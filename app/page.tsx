'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setAnswer('This is openai answer');
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred while fetching the answer.');
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
   
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Ask OpenAI</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Ask'}
          </button>
        </form>
        {answer && (
          <div className="mt-8 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold mb-2">Answer:</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}