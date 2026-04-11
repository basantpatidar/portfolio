'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import { Send, Mail, ExternalLink, GitBranch, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { FadeIn } from '@/app/components/ui/FadeIn';
import { cn } from '@/app/lib/utils';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'basantp180@gmail.com',
    href: 'mailto:basantp180@gmail.com',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/basantpatidar',
    href: 'https://linkedin.com/in/basantpatidar',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/basantpatidar',
    href: 'https://github.com/basantpatidar',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [form, setForm]             = useState({ name: '', email: '', message: '' });
  const [status, setStatus]         = useState<Status>('idle');
  const [errorMsg, setErrorMsg]     = useState('');
  const [turnstileToken, setToken]  = useState('');
  const turnstileRef                = useRef<HTMLDivElement>(null);
  const widgetIdRef                 = useRef<string>('');

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const initTurnstile = () => {
    if (!siteKey || !window.turnstile || !turnstileRef.current) return;
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      callback: (token: string) => setToken(token),
      'expired-callback': () => setToken(''),
      theme: 'dark',
    });
  };

  // In case script already loaded before component mounts
  useEffect(() => {
    if (window.turnstile) initTurnstile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _trap: '', // always empty from real users — bots may populate this
          'cf-turnstile-response': turnstileToken,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        if (siteKey && window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
          setToken('');
        }
      } else {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = cn(
    'w-full rounded-lg px-4 py-3 text-sm bg-slate-900 border border-slate-700',
    'text-slate-200 placeholder:text-slate-600',
    'focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30',
    'transition-colors duration-200'
  );

  return (
    <>
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onLoad={initTurnstile}
        />
      )}

      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeader
              number="05"
              title="Get in Touch"
              subtitle="Open to new opportunities and interesting projects. I'll get back to you within a day."
            />
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* Left — contact links */}
            <div className="md:col-span-2 space-y-4">
              <FadeIn delay={100}>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Whether you have a role in mind, a system to build, or just want to
                  connect — drop me a message and let's talk.
                </p>
              </FadeIn>

              <div className="space-y-3 pt-2">
                {links.map(({ icon: Icon, label, value, href }, i) => (
                  <FadeIn key={label} delay={150 + i * 70}>
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 card-glass border border-slate-700/50 p-4 hover:border-blue-400/30 transition-colors duration-200 group"
                    >
                      <Icon size={16} className="text-blue-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-mono">{label}</p>
                        <p className="text-sm text-slate-300 group-hover:text-blue-300 transition-colors truncate">
                          {value}
                        </p>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="md:col-span-3">
              <FadeIn delay={150} direction="left">
                <div className="card-glass border border-slate-700/50 p-6 md:p-8">

                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                      <CheckCircle size={48} className="text-green-400" />
                      <div>
                        <p className="text-lg font-semibold text-slate-100 mb-1">Message sent!</p>
                        <p className="text-sm text-slate-400">Thanks for reaching out. I'll be in touch shortly.</p>
                      </div>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">

                      {/* Honeypot — no HTML input rendered, so browsers can't autofill it.
                          Bots that POST directly may include this field; real users never will. */}

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-2">
                            Name <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Jane Smith"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-2">
                            Email <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jane@company.com"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2">
                          Message <span className="text-blue-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell me about the role or project..."
                          value={form.message}
                          onChange={handleChange}
                          className={cn(inputClass, 'resize-none')}
                        />
                      </div>

                      {/* Turnstile widget */}
                      {siteKey && (
                        <div ref={turnstileRef} className="flex justify-start" />
                      )}

                      {/* Error message */}
                      {status === 'error' && errorMsg && (
                        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                          <AlertCircle size={15} className="shrink-0" />
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={cn(
                          'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg',
                          'font-medium text-sm transition-all duration-200',
                          'bg-blue-500 hover:bg-blue-400 text-white',
                          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500'
                        )}
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
