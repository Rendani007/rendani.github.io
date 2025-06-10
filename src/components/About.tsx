
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React and modern CSS frameworks."
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with Laravel, and various databases."
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Expertise in modern web standards, performance optimization, and SEO best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Designing and developing mobile-responsive applications that work seamlessly across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            About Me
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in both frontend and backend technologies. 
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-theme-primary mb-6">My Journey</h3>
            <p className="text-theme-secondary mb-6 leading-relaxed">
              I’m a motivated and versatile Software Developer with extensive experience in delivering scalable, 
              secure, and user-friendly web applications using React and Laravel frameworks. Proficient in front-end 
              and back-end development, database management, and API integration. I design custom solutions aligned 
              with business objectives, ensuring exceptional user experiences and robust system performance.
            </p>
            <p className="text-theme-secondary mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends and best practices. When I'm not coding, you can find me exploring new 
              technologies, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'Laravel', 'PostgreSQL', 'WordPress'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glassmorphism text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border-theme hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="p-6 glassmorphism rounded-xl hover:shadow-lg transition-all duration-300 border-theme group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-theme-primary mb-2">{item.title}</h4>
                <p className="text-theme-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
