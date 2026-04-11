import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, _trap, 'cf-turnstile-response': turnstileToken } = body;

    console.log('[contact] Request received — honeypot value:', JSON.stringify(_trap));

    // ── Honeypot check ────────────────────────────────────────────
    // '_trap' is a hidden field — only bots fill it
    if (_trap) {
      console.log('[contact] Honeypot triggered — rejecting silently');
      return Response.json({ success: true });
    }

    // ── Basic field validation ────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // ── Cloudflare Turnstile verification ─────────────────────────
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return Response.json({ error: 'Please complete the verification.' }, { status: 400 });
      }

      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken }),
        }
      );
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return Response.json({ error: 'Verification failed. Please try again.' }, { status: 400 });
      }
    }

    // ── Send email via Resend ─────────────────────────────────────
    console.log('[contact] Sending email via Resend to:', process.env.CONTACT_TO_EMAIL);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL ?? 'basantp180@gmail.com'],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
    });

    console.log('[contact] Resend response — data:', data, 'error:', error);

    if (error) {
      console.error('[contact] Resend error:', error);
      return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
