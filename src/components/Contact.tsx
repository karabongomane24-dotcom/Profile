import { Mail, Linkedin, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('karabongomane24@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary-600">
            Let's Connect
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
            I'm open to job opportunities, internships, learnerships, and graduate programmes.
            Feel free to reach out — I'd love to hear from you.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Email card */}
            <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-500/5 blur-2xl transition-all group-hover:bg-primary-500/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Email</h3>
                <p className="mt-2 text-sm text-ink-500">The best way to reach me</p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="mailto:karabongomane24@gmail.com"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                  >
                    karabongomane24@gmail.com
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-accent-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn card */}
            <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-accent-50/40 to-white p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-500/5 blur-2xl transition-all group-hover:bg-accent-500/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/20">
                  <Linkedin className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">LinkedIn</h3>
                <p className="mt-2 text-sm text-ink-500">Connect with me professionally</p>
                <a
                  href="https://www.linkedin.com/in/karabo-ngomane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
                >
                  Karabo Ngomane
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/in/karabo-ngomane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600 transition-all hover:border-accent-200 hover:bg-accent-50 hover:text-accent-700"
                  >
                    <Linkedin className="h-4 w-4" />
                    View profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Location / availability banner */}
        <Reveal delay={200} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-ink-50 px-8 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary-500" />
              <span className="text-sm font-medium text-ink-600">Available for opportunities worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              <span className="text-sm font-medium text-accent-600">Currently available</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
