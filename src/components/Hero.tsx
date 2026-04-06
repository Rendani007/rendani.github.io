import { useState, useEffect } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

const GitHubSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
  </svg>
);

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { Button } from '@/components/ui/button';

const ROLES = [
  'Full-Stack Developer',
  'Backend Engineer',
  'PHP & Laravel Specialist',
  'API Architect',
];

const Hero = () => {
  // ── Typewriter ────────────────────────────────────────────
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused]     = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2400);
      return () => clearTimeout(t);
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }
  }, [displayed, isDeleting, isPaused, roleIndex]);

  // ── Scroll to projects ────────────────────────────────────
  const handleViewWorkClick = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-theme-primary relative overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/30 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/30 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/30 dark:bg-pink-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '4s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full opacity-25 animate-float"
            style={{
              left: `${(i * 4.5) % 100}%`,
              top:  `${(i * 7.3) % 100}%`,
              animationDelay:    `${(i * 0.3) % 6}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          <div className="mt-20" />

          {/* Name */}
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <span className="text-theme-primary">Rendani Masegwala</span>
          </h1>

          {/* Typewriter role line */}
          <div className="h-14 flex items-center justify-center mb-6">
            <span className="text-gradient animate-gradient text-2xl sm:text-3xl md:text-4xl font-bold">
              {displayed}
              <span className="typewriter-cursor text-blue-500" />
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-theme-secondary max-w-2xl mx-auto leading-relaxed mb-3">
            I build Laravel APIs, React frontends, and scalable backend systems.
            Specialising in secure auth, multi-tenant architecture, and end-to-end product delivery.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-theme-secondary text-sm mb-10">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Johannesburg, South Africa</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleViewWorkClick}
              size="lg"
              className="bg-gradient-creative hover:opacity-90 transition-all duration-500 text-white px-8 py-3 text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 animate-gradient hover:-translate-y-1"
            >
              View My Work
            </Button>
            <a href="/Documents/Rendani Masegwala CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="glassmorphism border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </Button>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: GitHubSVG,   href: 'https://github.com/Rendani007',                         label: 'GitHub',   color: 'text-gray-700 dark:text-gray-300' },
              { icon: LinkedInSVG, href: 'https://linkedin.com/in/rendani-masegwala-7ba468165',   label: 'LinkedIn', color: 'text-blue-600' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 glassmorphism rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform border-theme group"
              >
                <s.icon className={`w-6 h-6 ${s.color} group-hover:scale-110 transition-transform duration-300`} />
              </a>
            ))}
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-theme-accent mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
