'use client';
import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Ask OpenAI</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question here"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </form>
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
          {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap border border-gray-300 rounded p-4">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}