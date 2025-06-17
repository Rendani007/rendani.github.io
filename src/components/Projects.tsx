
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Metropolitan Health",
      description: "Developed secure login and data management using Spring MVC and PHP. I designed an admin dashboard with jQuery and Bootstrap for streamlined control. I developed backend features such as user authentication and verification. ",
      image: "Images/mmi.png",
      technologies: ["PHP", "JavaScript", "HTML", "CSS3"],
      githubUrl: "#",
      liveUrl: "https://mmi.myhealth360.co.za/"
    },
    // {
    //   title: "My Health 360",
    //   description: "Built user profile management and secure authentication features. I also implemented survey data conversion and responsive web design. ",
    //   image: "Images/silapha.png",
    //   technologies: ["PHP", "JavaScript", "HTML", "CSS3"],
    //   githubUrl: "#",
    //   liveUrl: "https://dsac.myhealth360.co.za/index.php"
    // },
    {
      title: "VKN Financial Servises",
      description: "Developed an insurance calculator integrated into a WordPress template. I also built secure admin panel and dynamic form calculations using PHP MVC.",
      image: "Images/vkn.png",
      technologies: ["PHP", "JavaScript", "HTML", "CSS3"],
      githubUrl: "#",
      liveUrl: "https://www.vknfs.co.za/"
    },
    {
      title: "Promatch",
      description: "ProMatch is a B-to-C platform that gives small businesses a platform to create profiles, allowing them to showcase their services to a broader audience without needing expensive advertising or marketing tools. I developed the entire user authentication process, WhatsApp feature and other backend features.",
      image: "Images/promatch.png",
      technologies: ["PHP", "JavaScript", "HTML", "CSS3"],
      githubUrl: "#",
      liveUrl: "https://www.promatch.munjle.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glassmorphism rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-theme hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-primary mb-3">{project.title}</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 glassmorphism text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border-theme"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {/* <Button variant="outline" size="sm" className="flex items-center space-x-2 border-theme text-theme-secondary hover:bg-theme-accent">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button> */}
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="flex items-center space-x-2 bg-gradient-primary hover:opacity-90">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glassmorphism border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
