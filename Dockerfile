# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Real content dates for the sitemap <lastmod>. The build context has no .git,
# so CI computes these from full git history and passes them as build args.
ARG SERVICES_LAST_MODIFIED
ARG LEGAL_LAST_MODIFIED
ENV SERVICES_LAST_MODIFIED=$SERVICES_LAST_MODIFIED
ENV LEGAL_LAST_MODIFIED=$LEGAL_LAST_MODIFIED
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /app/data

# Next.js writes on-demand optimized images here (next/image -> sharp).
# Mount a persistent volume at /app/.next/cache in Dokploy so this survives
# restarts AND redeploys — otherwise sharp re-optimizes every image on the
# first request after each deploy, which is heavy on a 4GB box. See docs/deploy.md.
RUN mkdir -p /app/.next/cache

EXPOSE 3000
CMD ["node", "server.js"]
