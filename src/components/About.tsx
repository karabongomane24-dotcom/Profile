import { Target, Compass, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <Reveal className="mb-16 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary-600">
            Who I Am
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </Reveal>

        {/* Role card */}
        <Reveal className="mb-8">
          <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-8 shadow-sm transition-all hover:shadow-xl md:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-primary-500/5 blur-2xl transition-all group-hover:bg-primary-500/10" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20">
                <Compass className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900">Role</h3>
                <p className="mt-1 text-base font-medium text-primary-600">
                  Aspiring AI, Digital Technology and Administrative Professional
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  I am a motivated and adaptable individual with a strong interest in{' '}
                  <span className="font-semibold text-ink-900">Artificial Intelligence, Generative AI, digital technology, and productivity tools</span>.
                  I have developed a foundation in digital literacy, computer applications, AI technologies,
                  communication, research, and problem-solving.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  My goal is to apply my knowledge and skills in a professional environment while
                  continuing to develop my technical and professional capabilities.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Objective card */}
        <Reveal delay={100}>
          <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-accent-50/40 to-white p-8 shadow-sm transition-all hover:shadow-xl md:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-accent-500/5 blur-2xl transition-all group-hover:bg-accent-500/10" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/20">
                <Target className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900">Objective</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  To obtain an opportunity where I can apply my{' '}
                  <span className="font-semibold text-ink-900">AI, digital literacy, computer, communication, and problem-solving skills</span>{' '}
                  while gaining valuable professional experience.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  I aim to contribute positively to an organisation by using technology and modern
                  productivity tools to improve efficiency, solve problems, manage information, and
                  support business operations.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: TrendingUp, value: '3+', label: 'Professional Certifications' },
            { icon: Compass, value: '10+', label: 'Core Skill Areas' },
            { icon: Target, value: '100%', label: 'Dedication & Drive' },
            { icon: TrendingUp, value: '∞', label: 'Willingness to Learn' },
          ].map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-primary-200">
                <Icon className="mx-auto h-6 w-6 text-primary-500" />
                <p className="mt-3 font-display text-2xl font-bold text-ink-900">{value}</p>
                <p className="mt-1 text-sm text-ink-500">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
