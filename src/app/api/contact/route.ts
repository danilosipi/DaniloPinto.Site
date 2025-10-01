import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Zod schema for server-side validation
const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome muito curto.')
    .regex(/(\w.+\s).+/, 'Por favor, informe seu nome completo.')
    .regex(/^[a-zA-Z\s]+$/, 'O nome deve conter apenas letras e espaços.'),
  email: z
    .string()
    .email('Informe um email válido.')
    .refine(
      (e) => !['email@email.com', 'test@test.com', 'example@example.com'].includes(e.toLowerCase()),
      'Por favor, use um endereço de e-mail real.',
    ),
  company: z
    .string()
    .min(2, 'O nome da empresa é obrigatório.')
    .refine((c) => c.toLowerCase() !== 'empresa', 'Por favor, insira um nome de empresa válido.'),
  message: z.string().min(30, 'Por favor, detalhe um pouco mais sua mensagem.').max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { name, email, company, message } = parsed.data;

    // IMPORTANT: These values should be in your .env.local file
    const {
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_SERVER_USER,
      EMAIL_SERVER_PASSWORD,
      EMAIL_FROM,
      EMAIL_TO,
    } = process.env;

    if (
      !EMAIL_SERVER_HOST ||
      !EMAIL_SERVER_PORT ||
      !EMAIL_SERVER_USER ||
      !EMAIL_SERVER_PASSWORD ||
      !EMAIL_FROM ||
      !EMAIL_TO
    ) {
      console.error('Missing required environment variables for email sending.');
      return NextResponse.json(
        { error: 'Server is not configured to send emails.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: parseInt(EMAIL_SERVER_PORT, 10),
      secure: parseInt(EMAIL_SERVER_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `[Curriculo Digital] Nova Mensagem de Contato de ${name}`,
      html: `
        <h1>Nova Mensagem de Contato</h1>
        <p>Parabéns Você recebeu uma nova mensagem de contato através do formulario de contato do seu site (http://danilopinto.dstudium.com).</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
