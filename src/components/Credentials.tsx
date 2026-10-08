import {
  Award,
  GraduationCap,
  Brain,
  Sparkles,
  Zap,
  Cpu,
  FileSpreadsheet,
  Search,
  Database,
  MessageSquare,
  Lightbulb,
  RefreshCw,
  CalendarClock,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const certifications = [
  {
    icon: Brain,
    badge: 'Google AI Certificates',
    title: 'Artificial Intelligence',
    description: 'Foundational knowledge of AI technologies and their practical applications.',
  },
  {
    icon: Sparkles,
    badge: 'Google AI Certificates',
    title: 'Generative AI',
    description: 'Understanding of Generative AI concepts, tools, and real-world use cases.',
  },
  {
    icon: Zap,
    badge: 'Google AI Certificates',
    title: 'AI Productivity Tools',
    description: 'Practical use of AI technologies and productivity solutions.',
  },
];

const education = [
  {
    icon: Award,
    title: 'ICDL — International Certification of Digital Literacy',
    items: [
      'Computer and Digital Skills',
      'Digital Productivity',
      'Computer Applications',
      'Online Collaboration and Information Management',
    ],
  },
  {
    icon: GraduationCap,
    title: 'National Senior Certificate (NSC)',
    items: [
      'Secondary Education Qualification',
      'Foundation for further education, training, and professional development',
    ],
  },
];

const skills = [
  { icon: Brain, label: 'Artificial Intelligence & Generative AI' },
  { icon: Cpu, label: 'Digital Literacy & Computer Applications' },
  { icon: FileSpreadsheet, label: 'Microsoft Office & Productivity Tools' },
  { icon: Search, label: 'Internet & Online Research' },
  { icon: Database, label: 'Information & Data Management' },
  { icon: MessageSquare, label: 'Communication & Interpersonal Skills' },
  { icon: Lightbulb, label: 'Problem-Solving & Critical Thinking' },
  { icon: RefreshCw, label: 'Adaptability & Technology Skills' },
  { icon: CalendarClock, label: 'Organisation & Time Management' },
  { icon: Briefcase, label: 'Professionalism & Willingness to Learn' },
];

export function Credentials() {
  return (
    <section id="credentials" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary-600">
            Qualifications
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Education &amp; Skills
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
            A strong foundation in AI technologies, digital literacy, and professional skills —
            backed by internationally recognised certifications.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </Reveal>

        {/* Certifications */}
        <Reveal className="mb-10">
          <h3 className="mb-6 font-display text-xl font-bold text-ink-900">Certifications</h3>
        </Reveal>

        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {certifications.map(({ icon: Icon, badge, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-white to-ink-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-200">
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-500/5 blur-2xl transition-all group-hover:bg-primary-500/10" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    <Award className="h-3 w-3" />
                    {badge}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold text-ink-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Key Skills */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal>
              <h3 className="mb-6 font-display text-xl font-bold text-ink-900">Education</h3>
            </Reveal>
            <div className="space-y-5">
              {education.map(({ icon: Icon, title, items }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 text-accent-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-ink-900">{title}</h4>
                        <ul className="mt-3 space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink-500">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <Reveal>
              <h3 className="mb-6 font-display text-xl font-bold text-ink-900">Key Skills</h3>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-6 shadow-sm">
                <div className="grid gap-3 sm:grid-cols-2">
                  {skills.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 transition-all hover:border-primary-200 hover:bg-primary-50/30"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-medium text-ink-700">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
