
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
    { icon: Linkedin, href: "www.linkedin.com/in/rendani-masegwala-7ba468165", label: "LinkedIn" },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
            <h3 className="text-2xl font-bold text-theme-primary mb-6">Send Me a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Netlify hidden inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-theme-primary mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    placeholder=""
                    className="w-full glassmorphism border-theme text-theme-primary placeholder-theme-accent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-theme-primary mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    placeholder=""
                    className="w-full glassmorphism border-theme text-theme-primary placeholder-theme-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-theme-primary mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder=""
                  className="w-full glassmorphism border-theme text-theme-primary placeholder-theme-accent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-theme-primary mb-2">
                  Subject
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder=""
                  className="w-full glassmorphism border-theme text-theme-primary placeholder-theme-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-theme-primary mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  placeholder="Let's talk..."
                  className="w-full glassmorphism border-theme text-theme-primary placeholder-theme-accent"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-creative hover:opacity-90 text-white py-3 transition-all duration-300 hover:scale-105 animate-gradient"
              >
                Send Message
              </Button>
            </form>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
              <h3 className="text-2xl font-bold text-theme-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-theme-primary">{item.title}</h4>
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
      </div>
    </section>
  );
};

export default Contact;
