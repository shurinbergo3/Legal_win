import { execSync } from 'node:child_process';

/**
 * Returns the date of the last git commit that modified any of the given
 * paths (relative to repo root). Used by sitemap.ts to set realistic
 * <lastmod> values for service / legal pages so Google trusts them.
 *
 * Returns null if git is unavailable (e.g. on a non-git host) or if the
 * paths have no commits — caller should fall back to a hardcoded date.
 */
export function getGitLastModified(paths: string[]): Date | null {
  try {
    const out = execSync(
      `git log -1 --format=%cI -- ${paths.map((p) => `"${p}"`).join(' ')}`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    if (!out) return null;
    const d = new Date(out);
    return Number.isNaN(d.getTime()) ? null : d;
  } catch {
    return null;
  }
}
