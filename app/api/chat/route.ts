import { NextRequest, NextResponse } from 'next/server'
import { systemPrompt } from '@/lib/groq'

// Mock responses for MVP (replace with real Groq when API key is set)
const mockResponses = [
  'Ce domeniu te interesează? IT, Contabilitate, Vânzări?',
  'Perfect! Am găsit 3 joburi potrivite pentru tine în Craiova. Vrei să le vezi?',
  'Contactează recruitorul pe WhatsApp sau fă-ți un CV pe platforma noastră.',
  'Îți pot ajuta cu mai multe informații. Ce vrei să știi?',
]

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    // Mock response for MVP
    const randomIndex = Math.floor(Math.random() * mockResponses.length)
    const reply = mockResponses[randomIndex]

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Chat error' }, { status: 500 })
  }
}
