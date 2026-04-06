import { NextRequest, NextResponse } from 'next/server'

// Mock email sending (replace cu Resend API key)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { jobId, jobTitle, company, name, email, phone, message } = body

    // TODO: Integrate Resend API
    // For MVP, log to console
    console.log('Application received:', {
      jobTitle,
      company,
      applicant: name,
      email,
      phone,
      message,
    })

    // Mock: Send email to recruiter (later: Resend API)
    // await resend.emails.send({
    //   from: 'noreply@cautjob.com',
    //   to: recruiterEmail,
    //   subject: `Candidat pentru: ${jobTitle}`,
    //   html: `<p>${name} (${phone}) s-a aplicat.</p>`,
    // })

    return NextResponse.json(
      { success: true, message: 'Aplicare trimisă!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Apply error:', error)
    return NextResponse.json({ error: 'Apply failed' }, { status: 500 })
  }
}
