
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Rendanni.m@gmail.com",
      href: "mailto:Rendanni.m@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+27 824 823 473",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dobsonville, Mmesi Park",
      href: "#"
    }
  ];

  const socialLinks = [
    // { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rendani-masegwala-7ba468165", label: "LinkedIn" },
  ];

 return (
    <section id="contact" className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, and being a valuable asset to your organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
            <h3 className="text-2xl font-bold text-theme-primary mb-6">Contact Information</h3>
            <div className="flex flex-wrap gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-center gap-4 min-w-[200px]">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-theme-primary leading-tight">{item.title}</h4>
                    <a 
                      href={item.href}
                      className="text-theme-secondary hover:text-blue-500 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
            <h3 className="text-2xl font-bold text-theme-primary mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glassmorphism rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all duration-300 group border-theme hover:scale-110"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6 text-theme-secondary group-hover:text-white" />
                </a>
              ))}
            </div>
            <p className="text-theme-secondary mt-4">
              Let's connect and discuss how we can work together on your next project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
