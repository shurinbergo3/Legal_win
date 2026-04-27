'use client';

import dynamic from 'next/dynamic';

const Chatbot = dynamic(
  () => import('./Chatbot').then((m) => ({ default: m.Chatbot })),
  { ssr: false }
);

export function ChatbotLoader() {
  return <Chatbot />;
}
