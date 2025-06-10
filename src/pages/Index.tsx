
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-theme-primary transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="glassmorphism text-theme-primary py-8 border-t border-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-theme-secondary">
            © 2025 Full Stack Developer Portfolio. Built by Rendani with react & tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
