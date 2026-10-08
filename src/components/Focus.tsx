import {
  Brain,
  MonitorSmartphone,
  FileSpreadsheet,
  Search,
  Database,
  MessageSquare,
  Lightbulb,
  RefreshCw,
  CalendarClock,
  Briefcase,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const focusItems = [
  {
    icon: Brain,
    title: 'AI & Generative AI',
    description: 'Apply Artificial Intelligence and Generative AI tools to everyday tasks and workplace activities.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Productivity',
    description: 'Use digital technologies to improve productivity and efficiency in the workplace.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Administrative Tasks',
    description: 'Perform computer-based administrative and information-management tasks with accuracy.',
  },
  {
    icon: Search,
    title: 'Online Research',
    description: 'Conduct online research and organise information effectively for decision-making.',
  },
  {
    icon: Database,
    title: 'Productivity Software',
    description: 'Use Microsoft Office and other productivity applications to deliver quality work.',
  },
  {
    icon: MessageSquare,
    title: 'Professional Communication',
    description: 'Communicate professionally with colleagues, clients, and stakeholders.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    description: 'Identify problems and use technology-based solutions where appropriate.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Continuously learn and adapt to new technologies and workplace requirements.',
  },
];

export function Focus() {
  return (
    <section id="focus" className="relative bg-ink-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary-600">
            What I Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Professional Focus
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
            My professional focus spans across AI technology, digital productivity, and administrative
            excellence — here are the key areas I concentrate on.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusItems.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional focus areas banner */}
        <Reveal delay={200} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-ink-900 to-ink-800 p-8 md:flex-row md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <CalendarClock className="h-6 w-6 text-primary-400" />
                <span className="text-base font-medium text-ink-200">Organisation &amp; Time Management</span>
              </div>
              <div className="hidden h-4 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-accent-400" />
                <span className="text-base font-medium text-ink-200">Professionalism &amp; Willingness to Learn</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
