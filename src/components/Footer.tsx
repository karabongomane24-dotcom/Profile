import { Mail, Linkedin, Sparkles, ArrowUp } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div>
              <p className="font-display font-bold text-white">Karabo Ngomane</p>
              <p className="text-xs text-ink-400">AI &amp; Digital Technology Professional</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:karabongomane24@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karabo-ngomane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#hero"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-sm text-ink-500">
            &copy; {year} Karabo Ngomane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
