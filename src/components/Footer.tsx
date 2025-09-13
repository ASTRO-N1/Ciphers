import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#mission' },
    { name: 'Events', href: '#events' },
    { name: 'Career Paths', href: '#paths' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Learning Resources', href: '#' },
    { name: 'Interview Prep', href: '#' },
    { name: 'Project Templates', href: '#' },
    { name: 'Study Groups', href: '#' },
    { name: 'Mentorship', href: '#' }
  ];

  const programs = [
    { name: 'AI/ML Bootcamp', href: '#' },
    { name: 'Cybersecurity Track', href: '#' },
    { name: 'Full Stack Academy', href: '#' },
    { name: 'Mobile Development', href: '#' },
    { name: 'Research Program', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">CIPHERS</h3>
            <p className="text-[#F5F5F5]/80 mb-6 leading-relaxed">
              Empowering the next generation of tech leaders through innovation, collaboration, and excellence. Join us in decoding the future.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/ciphers-club"
                className="p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700]/20 transition-colors duration-300 group"
              >
                <Github className="text-[#F5F5F5] group-hover:text-[#FFD700]" size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/ciphers-club"
                className="p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700]/20 transition-colors duration-300 group"
              >
                <Linkedin className="text-[#F5F5F5] group-hover:text-[#FFD700]" size={20} />
              </a>
              <a 
                href="https://twitter.com/ciphers_club"
                className="p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700]/20 transition-colors duration-300 group"
              >
                <Twitter className="text-[#F5F5F5] group-hover:text-[#FFD700]" size={20} />
              </a>
              <a 
                href="https://instagram.com/ciphers.club"
                className="p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#FFD700]/20 transition-colors duration-300 group"
              >
                <Instagram className="text-[#F5F5F5] group-hover:text-[#FFD700]" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#F5F5F5]/70 hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-[#F5F5F5]/70 hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-[#F5F5F5]/70 hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFD700]/10 rounded-lg">
                <Mail className="text-[#FFD700]" size={20} />
              </div>
              <div>
                <p className="text-[#F5F5F5] font-medium">Email</p>
                <p className="text-[#F5F5F5]/70 text-sm">hello@ciphers.club</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFD700]/10 rounded-lg">
                <MapPin className="text-[#FFD700]" size={20} />
              </div>
              <div>
                <p className="text-[#F5F5F5] font-medium">Location</p>
                <p className="text-[#F5F5F5]/70 text-sm">Computer Science Building, Room 301</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFD700]/10 rounded-lg">
                <Phone className="text-[#FFD700]" size={20} />
              </div>
              <div>
                <p className="text-[#F5F5F5] font-medium">Phone</p>
                <p className="text-[#F5F5F5]/70 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-[#F5F5F5] mb-2">Stay Updated</h4>
              <p className="text-[#F5F5F5]/70 text-sm">Get the latest news, events, and opportunities delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 max-w-sm md:max-w-none">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#0A0A0A] border border-white/10 rounded-lg text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:outline-none focus:border-[#FFD700] transition-colors duration-300"
              />
              <button className="bg-[#FFD700] text-[#0A0A0A] px-6 py-2 rounded-lg font-medium hover:bg-[#FFD700]/90 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#F5F5F5]/60 text-sm">
            © {currentYear} Ciphers Club. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[#F5F5F5]/60 hover:text-[#FFD700] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[#F5F5F5]/60 hover:text-[#FFD700] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-[#F5F5F5]/60 hover:text-[#FFD700] transition-colors duration-300">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;