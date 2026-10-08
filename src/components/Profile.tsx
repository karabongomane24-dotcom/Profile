import {
  Sparkles,
  Cpu,
  Database,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Rocket,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const careerValues = [
  {
    icon: Sparkles,
    title: 'AI-Assisted Productivity',
    description: 'Using AI tools to support research, content creation, organisation, and everyday tasks.',
  },
  {
    icon: Cpu,
    title: 'Digital Competence',
    description: 'Confidently working with computers, digital applications, and online platforms.',
  },
  {
    icon: Database,
    title: 'Information Management',
    description: 'Collecting, organising, processing, and presenting information effectively.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    description: 'Approaching tasks logically and identifying practical, technology-based solutions.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description: 'Learning new software, technologies, and workplace processes quickly.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Development',
    description: 'Continuously improving my technical and interpersonal skills.',
  },
];

export function Profile() {
  return (
    <section id="profile" className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            What I Bring
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional Profile
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </Reveal>

        {/* Profile summary */}
        <Reveal className="mb-16">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
            <p className="text-xl leading-relaxed text-ink-200 md:text-2xl text-balance">
              A motivated and technology-oriented individual with qualifications in{' '}
              <span className="font-semibold text-white">Artificial Intelligence, digital literacy, and secondary education</span>.
              Skilled in using digital tools, AI technologies, productivity applications, online research,
              information management, and problem-solving.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-400">
              I am eager to bring my skills into a professional environment, contribute to organisational
              goals, and develop further through practical workplace experience.
            </p>
          </div>
        </Reveal>

        {/* Career Value grid */}
        <Reveal className="mb-6 text-center">
          <h3 className="font-display text-2xl font-bold text-white">Career Value</h3>
          <p className="mt-2 text-ink-400">How I can contribute to an organisation</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerValues.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Career Goal banner */}
        <Reveal delay={200} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 p-8 md:p-12">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Career Goal</h3>
                <p className="mt-3 text-lg leading-relaxed text-primary-50 text-balance">
                  To build a successful career in a technology, artificial intelligence, administration,
                  digital support, business, or other technology-enabled professional environment — while
                  continuing to develop my skills and contribute meaningfully to the organisation I work for.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
