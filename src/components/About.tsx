import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ── Animated counter ──────────────────────────────────────────────────────────
const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        let start: number | null = null;
        const duration = 1800;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  { value: 5,   suffix: '+',  label: 'Years Coding'     },
  { value: 20,  suffix: '+',  label: 'Projects Built'   },
  { value: 3,   suffix: '',   label: 'Companies'        },
  { value: 100, suffix: '%',  label: 'Remote Ready'     },
];

// ── Highlight cards ───────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Database,
    title: 'Backend Engineering',
    description: 'Building scalable Laravel APIs, multi-tenant architecture, UUID models, RBAC, and Sanctum-based auth systems.',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Crafting responsive React and Inertia.js interfaces with Tailwind CSS and Bootstrap for seamless UX.',
  },
  {
    icon: Shield,
    title: 'Secure Architecture',
    description: 'Implementing tenant isolation, API versioning, protected admin workflows, and robust auth patterns.',
  },
  {
    icon: Globe,
    title: 'Product Thinking',
    description: 'Working across planning, implementation, debugging, and deployment to deliver complete, maintainable products.',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const About = () => {
  const headingRef    = useScrollReveal();
  const storyRef      = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const highlightsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const statsRef      = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">About Me</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Full-stack developer focused on backend engineering, product development, and building platforms that scale.
          </p>
        </div>

        {/* Story + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          <div ref={storyRef} className="reveal-left glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-theme-primary mb-6 text-center">My Story</h3>
            <p className="text-theme-secondary mb-6 leading-relaxed text-center">
              I'm a full-stack developer with experience building Laravel-based applications, decoupled APIs,
              React frontends, and internal admin systems. I specialise in secure authentication, multi-tenant
              architecture, database design, workflow automation, and scalable product foundations.
            </p>
            <p className="text-theme-secondary mb-6 leading-relaxed text-center">
              Currently focused on remote developer roles in backend engineering and product delivery —
              working with teams that value maintainable code, clear ownership, and pragmatic problem-solving.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['PHP', 'Laravel', 'JavaScript', 'React', 'Inertia.js', 'PostgreSQL', 'WordPress'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glassmorphism text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border-theme hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div ref={highlightsRef} className="reveal-right grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                className="p-6 glassmorphism rounded-xl border-theme group hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center sm:items-start"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-theme-primary mb-2 text-center sm:text-left">{item.title}</h4>
                <p className="text-theme-secondary text-sm text-center sm:text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-gradient animate-gradient mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-theme-secondary text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
