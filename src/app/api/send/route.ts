import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, interests } = body;
    console.log(process.env.NEXT_PUBLIC_APP_PASSWORD)

    if (!email || !interests || !Array.isArray(interests)) {
      return NextResponse.json({ error: 'Email and interests are required.' }, { status: 400 });
    }

    const formattedInterests = interests.length > 0
      ? interests.map((i: string) => `• ${i}`).join('<br/>')
      : 'No interests selected';

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'narendranishad59@gmail.com',
        pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'narendranishad59@gmail.com',
      to: 'narendranishad59@gmail.com',
      subject: '🔥 New Interest Submission - Soul Arise',
      html: `
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Selected Interests:</strong></p>
        <p>${formattedInterests}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Inquiry sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Inquiry Error:', error);
    return NextResponse.json({ error: 'Failed to send inquiry.' }, { status: 500 });
  }
}
