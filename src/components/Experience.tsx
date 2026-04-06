import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const JOBS = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Remote / Contract',
    period: '2025 – Present',
    bullets: [
      'Build decoupled Laravel + React solutions for internal tools, client platforms, and SaaS-style products.',
      'Focus on secure authentication, database design, API integration, dashboards, and multi-tenant access control.',
      'Work across product planning, implementation, debugging, deployment preparation, and remote collaboration.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Baseline Digital',
    period: '2022 – 2024',
    bullets: [
      'Delivered web application features, admin tools, API integrations, and data-driven workflows across client platforms.',
      'Worked with PHP, Laravel-style backend patterns, JavaScript, Bootstrap, MySQL, and structured web development practices.',
      'Supported feature development, maintenance, debugging, and client-request implementation in a collaborative agency environment.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Independent',
    period: '2020 – 2021',
    bullets: [
      'Built and maintained client websites and custom PHP solutions with a focus on practical business requirements.',
      'Handled WordPress work, responsive front-end updates, and backend customisation for small business clients.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Computer and Information Sciences in Application Development',
    institution: 'Varsity College, Johannesburg',
  },
  {
    degree: 'Diploma in Software Development',
    institution: 'Varsity College, Johannesburg',
  },
  {
    degree: 'Certificate: Backend Development and APIs',
    institution: 'freeCodeCamp',
  },
];

const Experience = () => {
  const headingRef   = useScrollReveal();
  const jobsRef      = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const eduRef       = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const remoteRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="experience" className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">Experience &amp; Education</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Professional background and academic credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Work Experience ───────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-theme-primary">Work Experience</h3>
            </div>

            <div ref={jobsRef} className="reveal-left relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full" />

              <div className="space-y-8">
                {JOBS.map((job, i) => (
                  <div key={job.role} className="relative pl-12" style={{ transitionDelay: `${i * 120}ms` }}>
                    {/* Dot */}
                    <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-gradient-primary border-2 border-white dark:border-gray-900 shadow-md" />

                    <div className="glassmorphism p-6 rounded-xl border-theme hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-theme-primary text-lg leading-tight">{job.role}</h4>
                          <p className="text-blue-500 font-medium text-sm">{job.company}</p>
                        </div>
                        <span className="px-3 py-1 glassmorphism rounded-full text-xs font-medium text-theme-secondary border-theme shrink-0">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-theme-secondary text-sm">
                            <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education + Remote callout ────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-theme-primary">Education</h3>
            </div>

            <div ref={eduRef} className="reveal-right space-y-6">
              {EDUCATION.map((edu, i) => (
                <div
                  key={edu.degree}
                  className="glassmorphism p-6 rounded-xl border-theme hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-creative rounded-lg flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-theme-primary leading-tight mb-1">{edu.degree}</h4>
                      <p className="text-blue-500 text-sm font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Remote callout */}
              <div ref={remoteRef} className="reveal glassmorphism p-6 rounded-xl border border-blue-500/30 mt-4">
                <h4 className="font-bold text-theme-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                  Open to Remote Work
                </h4>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  I work remotely and collaborate effectively across time zones. Comfortable with async communication,
                  feature ownership, and delivering end-to-end backend solutions independently or within a distributed team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
