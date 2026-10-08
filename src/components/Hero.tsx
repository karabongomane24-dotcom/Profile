import { ArrowDown, Mail, Linkedin, Brain, Cpu, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute top-1/4 left-[10%] h-72 w-72 rounded-full bg-primary-500/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-1/4 right-[10%] h-80 w-80 rounded-full bg-accent-500/10 blur-3xl animate-pulse-slow" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Badge */}
        <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-200 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
          </span>
          Open to opportunities
        </div>

        <h1 className="animate-fade-delay-1 font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Karabo
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
            Ngomane
          </span>
        </h1>

        <p className="animate-fade-delay-2 mt-6 max-w-2xl text-lg text-ink-300 sm:text-xl md:text-2xl font-light leading-relaxed text-balance">
          Aspiring AI, Digital Technology &amp; Administrative Professional —
          passionate about using <span className="text-white font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-white font-medium">Generative AI</span>, and modern productivity tools
          to solve real-world problems.
        </p>

        {/* Floating skill chips */}
        <div className="animate-fade-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Brain, label: 'AI & Generative AI' },
            { icon: Cpu, label: 'Digital Literacy' },
            { icon: Zap, label: 'Productivity Tools' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink-200 backdrop-blur-sm transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
            >
              <Icon className="h-4 w-4 text-primary-400" />
              {label}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-delay-4 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-primary-50 hover:shadow-xl hover:shadow-primary-500/20"
          >
            <Mail className="h-5 w-5" />
            Contact me
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
          >
            Learn more
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>

        {/* Social icons */}
        <div className="animate-fade-delay-4 mt-12 flex items-center gap-4">
          <a
            href="mailto:karabongomane24@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/karabo-ngomane"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-primary-400/30 hover:bg-primary-500/10 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
