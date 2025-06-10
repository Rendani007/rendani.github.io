
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {

  // view my work scroll function
  const handleViewWorkClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-theme-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/30 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/30 dark:bg-pink-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 mt-10 pt-30 p">
            <div className="flex justify-center mb-6 mt-6">
              {/* <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse-glow" /> */}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold pt-10 mb-6">
              <span className="text-theme-primary">Rendani Masiagwala</span>
              <br />
              <span className="text-gradient animate-gradient">Full Stack Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
              I craft beautiful, responsive web applications with modern technologies.
              Passionate about creating seamless user experiences and robust backend solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          
          <Button 
            onClick={handleViewWorkClick}  // <-- This connects the function to the button
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

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/Rendani007', color: 'text-gray-700 dark:text-gray-300' },
              { icon: Linkedin, href: 'www.linkedin.com/in/rendani-masegwala-7ba468165', color: 'text-blue-600' },
              // { icon: Mail, href: 'rendanni.m@gmail.com', color: 'text-red-500' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="p-3 glassmorphism rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform border-theme group"
              >
                <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
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
