import { NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages, StreamData  } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

    if (!messages) {
        return NextResponse.json({ error: "Invalid request body" });
    }
    const data = new StreamData();
      
    try {
        const result = await streamText({
            model: openai('gpt-3.5-turbo'),
            messages: convertToCoreMessages(messages),
            onFinish() {
              data.close();
            },
          });
        return result.toDataStreamResponse({ data });
    } catch (error) {
        console.error('OpenAI API error:', error);
        return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
  
}