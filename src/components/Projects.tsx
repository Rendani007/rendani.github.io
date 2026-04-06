import { Lock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PROJECTS = [
  {
    title: 'Resource Modular Management (RMM)',
    description: 'A modular business management platform with a decoupled Laravel 12 API and separate React frontend. Features tenant isolation, UUID-based models, Sanctum auth, and API versioning. Structured for inventory, user roles, permissions, and future Xero integrations.',
    stack: 'Laravel 12 API + React + PostgreSQL',
    technologies: ['Laravel 12', 'React', 'PostgreSQL', 'Sanctum', 'UUID', 'API Versioning'],
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-700',
    icon: '🏗️',
  },
  {
    title: 'Career Day Event Platform',
    description: 'A platform for schools to manage career-day events, student participation, industry assignments, and admin workflows. Secure CRUD operations, role-based flows, and a fully responsive dashboard experience.',
    stack: 'Laravel + Inertia.js + Tailwind',
    technologies: ['Laravel', 'Inertia.js', 'Tailwind CSS', 'RBAC', 'CRUD'],
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-600',
    icon: '🎓',
  },
  {
    title: 'Enterprise Learning & Admin Platform',
    description: 'Backend structures and admin workflows for documents, quizzes, videos, user management, course content, and progress tracking. Protected routes, reusable admin interfaces, and scalable content relationships.',
    stack: 'Laravel + React Admin Workflows',
    technologies: ['Laravel', 'React', 'MySQL', 'Admin Dashboard', 'CRUD'],
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-600',
    icon: '📚',
  },
  {
    title: 'Market Segmentation MVP — AdHive',
    description: 'API-first product foundation for audience segmentation, monetisation, predictive intelligence, and cross-sell workflows. Defined secure architecture patterns including tenant-aware access, schema planning, and phased MVP delivery.',
    stack: 'Laravel + React + PostgreSQL Architecture',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Multi-Tenant', 'API-First'],
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-600',
    icon: '📊',
  },
];

// ── 3-D tilt handlers ─────────────────────────────────────────────────────────
const onTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const rotateX = ((y - height / 2) / (height / 2)) * -8;
  const rotateY = ((x - width  / 2) / (width  / 2)) *  8;
  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(102,126,234,0.25)`;
};

const onTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  card.style.boxShadow = '';
};

// ── Component ─────────────────────────────────────────────────────────────────
const Projects = () => {
  const headingRef = useScrollReveal();
  const noteRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  const cardRefs = [
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
    useScrollReveal<HTMLDivElement>({ threshold: 0.1 }),
  ];

  return (
    <section id="projects" className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">Selected Projects</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            A selection of backend-focused platforms and products I've designed and built.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              ref={cardRefs[i]}
              className={`tilt-card reveal${i % 2 === 0 ? '-left' : '-right'} glassmorphism rounded-2xl shadow-lg overflow-hidden border-theme flex flex-col cursor-default`}
              onMouseMove={onTiltMove}
              onMouseLeave={onTiltLeave}
            >
              {/* Gradient banner */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
                <span className="text-6xl drop-shadow-lg select-none">{project.icon}</span>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    <Lock className="w-3 h-3" />
                    Private
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-mono text-theme-accent mb-1">{project.stack}</span>
                <h3 className="text-xl font-bold text-theme-primary mb-3">{project.title}</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 glassmorphism text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border-theme">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legacy client work */}
        <div ref={noteRef} className="reveal mt-12 glassmorphism rounded-2xl p-6 border-theme text-center">
          <p className="text-theme-secondary text-sm">
            <span className="font-semibold text-theme-primary">Previous client work</span> includes{' '}
            <a href="https://mmi.myhealth360.co.za/"     target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Metropolitan Health</a>,{' '}
            <a href="https://www.vknfs.co.za/"           target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">VKN Financial Services</a>, and{' '}
            <a href="https://www.promatch.munjle.com/"   target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Promatch</a>{' '}
            — delivered at Baseline Digital (2022–2024).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
