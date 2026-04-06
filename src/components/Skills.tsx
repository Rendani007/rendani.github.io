import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SKILL_CATEGORIES = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'PHP',         level: 85 },
      { name: 'Laravel',     level: 85 },
      { name: 'JavaScript',  level: 75 },
      { name: 'React',       level: 65 },
      { name: 'Inertia.js',  level: 65 },
      { name: 'WordPress',   level: 75 },
    ],
  },
  {
    title: 'Backend & Architecture',
    skills: [
      { name: 'REST APIs',               level: 85 },
      { name: 'PostgreSQL',              level: 80 },
      { name: 'MySQL',                   level: 80 },
      { name: 'Sanctum Auth',            level: 80 },
      { name: 'RBAC',                    level: 75 },
      { name: 'Multi-Tenant Architecture', level: 70 },
    ],
  },
  {
    title: 'Frontend & Tools',
    skills: [
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Bootstrap',    level: 70 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker',       level: 55 },
      { name: 'Postman',      level: 75 },
      { name: 'Linux CLI',    level: 65 },
    ],
  },
  {
    title: 'Ways of Working',
    skills: [
      { name: 'Remote Collaboration',      level: 90 },
      { name: 'Agile Delivery',            level: 75 },
      { name: 'Debugging & Problem Solving', level: 85 },
      { name: 'Feature Ownership',         level: 85 },
      { name: 'Maintainable Code',         level: 85 },
    ],
  },
];

// ── Individual animated skill bar ─────────────────────────────────────────────
const SkillBar = ({ name, level, animate, delay }: { name: string; level: number; animate: boolean; delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-theme-primary font-medium text-sm">{name}</span>
      <span className="text-theme-accent text-xs font-mono">{level}%</span>
    </div>
    <div className="w-full bg-theme-accent rounded-full h-2 overflow-hidden">
      <div
        className="bg-gradient-creative h-2 rounded-full animate-gradient"
        style={{
          width: animate ? `${level}%` : '0%',
          transition: animate ? `width 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms` : 'none',
        }}
      />
    </div>
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────
const Skills = () => {
  const headingRef  = useScrollReveal();
  const tagsRef     = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  // Trigger bar animations once the section enters view
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Per-category reveal refs
  const catRefs = [
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">Skills &amp; Expertise</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            The technologies and practices I use to build robust, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, ci) => (
            <div
              key={category.title}
              ref={catRefs[ci]}
              className={`reveal${ci % 2 === 0 ? '-left' : '-right'} glassmorphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-theme group hover:scale-[1.02]`}
            >
              <h3 className="text-xl font-bold text-theme-primary mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={animated}
                    delay={ci * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={tagsRef} className="reveal mt-16 text-center">
          <h3 className="text-2xl font-bold text-theme-primary mb-8">Additional Tools &amp; Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['GitHub Actions', 'API Versioning', 'UUID Models', 'Sanctum', 'Vercel', 'Netlify', 'Railway', 'Figma'].map((tech, i) => (
              <span
                key={tech}
                className="px-6 py-3 glassmorphism border-theme rounded-full text-theme-primary font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-default hover:scale-105 transform"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
