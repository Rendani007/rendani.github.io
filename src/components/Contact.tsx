import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const headingRef  = useScrollReveal();
  const infoRef     = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const rightRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const contactInfo = [
    { icon: Mail,   title: 'Email',    value: 'rendanni.m@gmail.com',      href: 'mailto:rendanni.m@gmail.com' },
    { icon: Phone,  title: 'Phone',    value: '+27 82 482 3473',           href: 'tel:+27824823473'            },
    { icon: MapPin, title: 'Location', value: 'Johannesburg, South Africa', href: '#'                          },
  ];

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/Rendani007',                       label: 'GitHub'   },
    { icon: Linkedin, href: 'https://linkedin.com/in/rendani-masegwala-7ba468165', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">Get In Touch</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Open to remote roles, freelance projects, and contract work. Let's discuss what you're building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact info */}
          <div ref={infoRef} className="reveal-left glassmorphism rounded-2xl shadow-lg p-8 border-theme">
            <h3 className="text-2xl font-bold text-theme-primary mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme-primary leading-tight">{item.title}</h4>
                    <a href={item.href} className="text-theme-secondary hover:text-blue-500 transition-colors duration-300">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social + services */}
          <div ref={rightRef} className="reveal-right space-y-6">
            <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
              <h3 className="text-2xl font-bold text-theme-primary mb-4">Connect With Me</h3>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 glassmorphism rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 group border-theme hover:scale-110"
                  >
                    <s.icon className="w-6 h-6 text-theme-secondary group-hover:text-white" />
                  </a>
                ))}
              </div>
              <p className="text-theme-secondary text-sm">
                Available for remote work, backend engineering roles, and freelance product delivery.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl shadow-lg p-8 border-theme">
              <h3 className="text-xl font-bold text-theme-primary mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-theme-secondary text-sm">
                {[
                  'Laravel API development & backend architecture',
                  'React & Inertia.js frontend integration',
                  'Multi-tenant SaaS platform foundations',
                  'Admin dashboards & internal tools',
                  'Database design & API integration',
                  'WordPress custom development',
                ].map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
