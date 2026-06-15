import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, Droplet, Sparkles, Wind, Waves, Palette, Droplets, BadgeCheck } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import logoImage from '../imports/image.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const stylesAndWork = [
    { id: 1, title: 'Knoting Style', description: 'Premium knotting techniques for unique tie-dye patterns', alt: 'Tie-dye sample 1' },
    { id: 2, title: 'Dipping Style', description: 'Traditional dipping methods for vibrant color blends', alt: 'Tie-dye sample 2' },
    { id: 3, title: 'Cloud Style', description: 'Soft, cloud-like patterns with smooth transitions', alt: 'Tie-dye sample 3' },
    { id: 4, title: 'Famous Sungudi Saree', description: 'The original format using fine knots to block out circular patterns across the saree body.', alt: 'Tie-dye sample 4' },
    { id: 5, title: 'Acid Wash', description: 'Classic acid wash finish for vintage appeal', alt: 'Tie-dye sample 5' },
    { id: 6, title: 'Optic Wash', description: 'Optical brightening for enhanced white tones', alt: 'Tie-dye sample 6' }
  ];

  const clients = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="SWC Logo" className="h-16 w-16" />
              <div className="hidden sm:block">
                <div className="uppercase tracking-wider" style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.125rem' }}>
                  System Wash Care
                </div>
                <div className="text-xs text-white/70">Tie & Dye Specialists</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#D4AF37] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('styles')} className="text-white hover:text-[#D4AF37] transition-colors">
                Styles
              </button>
              <button onClick={() => scrollToSection('clients')} className="text-white hover:text-[#D4AF37] transition-colors">
                Clients
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#D4AF37] transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#D4AF37] transition-colors text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('styles')} className="text-white hover:text-[#D4AF37] transition-colors text-left">
                  Styles
                </button>
                <button onClick={() => scrollToSection('clients')} className="text-white hover:text-[#D4AF37] transition-colors text-left">
                  Clients
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#D4AF37] transition-colors text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="uppercase tracking-tight mb-6" style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
              Expert Tie & Dye & Washing Solutions in Tiruppur
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              <BadgeCheck size={28} style={{ color: '#D4AF37' }} />
              <span>Plant Approved - We use standard dyes and chemicals</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-6 text-lg"
                style={{ backgroundColor: '#D4AF37', color: '#0B0B0B', fontWeight: 600 }}
              >
                Contact Us
              </Button>
              <Button
                onClick={() => scrollToSection('styles')}
                className="px-8 py-6 text-lg border-2"
                style={{ backgroundColor: 'transparent', borderColor: '#D4AF37', color: '#D4AF37', fontWeight: 600 }}
              >
                View Styles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Styles & Work Section */}
      <section id="styles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="uppercase mb-4" style={{ color: '#0B0B0B', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our Styles & Services
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylesAndWork.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Area */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles size={64} className="text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Description Area */}
                <div className="p-6">
                  <h3 className="uppercase mb-2" style={{ color: '#0B0B0B', fontWeight: 700, fontSize: '1.25rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proud Clients Section */}
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="uppercase mb-4" style={{ color: '#0B0B0B', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Proud Buyers We Worked With
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 rounded-xl border-2 border-gray-200 hover:border-[#D4AF37] transition-all"
              >
                <span className="uppercase" style={{ color: '#0B0B0B', fontWeight: 600 }}>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="uppercase mb-8" style={{ color: '#D4AF37', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            About Us
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            We are a Tiruppur-based washing unit specializing in high-quality tie & dye and garment washing techniques with industry-grade finishing. Our expertise spans traditional and modern washing methods, delivering exceptional results for brands across India.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="uppercase mb-4" style={{ color: '#0B0B0B', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#0B0B0B' }}>
                  <MapPin style={{ color: '#D4AF37' }} size={24} />
                </div>
                <div>
                  <h3 className="uppercase mb-2" style={{ color: '#0B0B0B', fontWeight: 700, fontSize: '1.125rem' }}>Address</h3>
                  <p className="text-gray-600">
                    212/1A, High Court Thottam, Alankattu Pudur,<br />
                    Kulathupalayam, Mannarai,<br />
                    Tiruppur - 641607
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#0B0B0B' }}>
                  <Phone style={{ color: '#D4AF37' }} size={24} />
                </div>
                <div>
                  <h3 className="uppercase mb-2" style={{ color: '#0B0B0B', fontWeight: 700, fontSize: '1.125rem' }}>Phone</h3>
                  <a href="tel:+919597392088" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                    +91 9597392088
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#0B0B0B' }}>
                  <Mail style={{ color: '#D4AF37' }} size={24} />
                </div>
                <div>
                  <h3 className="uppercase mb-2" style={{ color: '#0B0B0B', fontWeight: 700, fontSize: '1.125rem' }}>Email</h3>
                  <a href="mailto:systemwashcare.7@gmail.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                    systemwashcare.7@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/919597392088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white transition-colors"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] outline-none"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] outline-none"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] outline-none min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#D4AF37', color: '#0B0B0B', fontWeight: 600, fontSize: '1.125rem' }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://www.youtube.com/@systemwashcare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full transition-colors"
              style={{ backgroundColor: '#0B0B0B' }}
            >
              <Youtube size={32} style={{ color: '#D4AF37' }} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full transition-colors"
              style={{ backgroundColor: '#0B0B0B' }}
            >
              <Instagram size={32} style={{ color: '#D4AF37' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B0B0B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Info */}
            <div>
              <img src={logoImage} alt="SWC Logo" className="h-20 w-20 mb-4" />
              <p className="text-white/70">
                All Types of Tie & Dye & Washing Solutions
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="uppercase mb-4" style={{ color: '#D4AF37', fontWeight: 700 }}>Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('styles')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">
                  Styles
                </button>
                <button onClick={() => scrollToSection('clients')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">
                  Clients
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="uppercase mb-4" style={{ color: '#D4AF37', fontWeight: 700 }}>Contact Info</h4>
              <div className="space-y-2 text-white/70">
                <p>+91 9597392088</p>
                <p>systemwashcare.7@gmail.com</p>
                <p>Tiruppur - 641607</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p>© 2026 System Wash Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
