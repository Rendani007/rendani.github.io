
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 80 },
        { name: "CSS3", level: 80 },
      ]
    },
    {
      title: "Front-End Tools",
      skills: [
       
        { name: "Bootstrap", level: 60 },
        { name: "jQuery", level: 60 },
        { name: "AJAX", level: 60 },
        { name: "WordPress", level: 70 },
      ]
    },
    {
      title: "Back-End & Databases",
      skills: [
        { name: "Laravel MVC", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "API Integration", level: 60 },
        { name: "RESTful Services", level: 60 },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 80 },
        { name: "JSON", level: 80 },
        { name: "Postman", level: 60 },
        { name: "GitHub", level: 90 },
      ]
    },
    {
      title: "Development Practices",
      skills: [
        { name: "Architecture", level: 87 },
        { name: "Secure Authentication", level: 85 },
        { name: "Agile/Scrum", level: 60 },
        { name: "Unit Testing", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="glassmorphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-theme group hover:scale-105">
              <h3 className="text-2xl font-bold text-theme-primary mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-theme-primary font-medium">{skill.name}</span>
                      <span className="text-theme-accent text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-theme-accent rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-creative h-2 rounded-full transition-all duration-1000 ease-out animate-gradient"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-theme-primary mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
               'Figma', 'Vite', 'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Tailwind CSS'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 glassmorphism border-theme rounded-full text-theme-primary font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-default hover:scale-105 transform"
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
