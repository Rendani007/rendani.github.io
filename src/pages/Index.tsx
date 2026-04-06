
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-theme-primary transition-colors duration-500">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="glassmorphism text-theme-primary py-8 border-t border-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-theme-secondary">
            © 2026 Rendani Masegwala — Full-Stack Developer. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
