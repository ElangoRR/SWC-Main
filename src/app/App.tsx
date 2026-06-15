import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, BadgeCheck, Leaf, Zap, Users, Award } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import logoImage from '../imports/image.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  // Color Palette
  const colors = {
    offWhite: '#F9F9FB',
    charcoal: '#1E2229',
    lightGray: '#E8E8EC',
    mediumGray: '#7A7A8E',
    gold: '#D4AF37',
  };

  const craftTechniques = [
    { id: 1, title: 'Knoting Style', description: 'Premium knotting techniques for unique tie-dye patterns' },
    { id: 2, title: 'Dipping Style', description: 'Traditional dipping methods for vibrant color blends' },
    { id: 3, title: 'Cloud Style', description: 'Soft, cloud-like patterns with smooth transitions' },
    { id: 4, title: 'Famous Sungudi Saree', description: 'The original format using fine knots to block out circular patterns across the saree body.' },
    { id: 5, title: 'Acid Wash', description: 'Classic acid wash finish for vintage appeal' },
    { id: 6, title: 'Optic Wash', description: 'Optical brightening for enhanced white tones' }
  ];

  const b2bCapabilities = [
    { title: 'Bulk Orders', description: 'Handle large-scale orders with consistent quality', icon: Users },
    { title: 'Custom Sourcing', description: 'Source and finish custom fabrics per specification', icon: Award },
    { title: 'Corporate Partnerships', description: 'Dedicated support for brand collaborations', icon: Zap },
  ];

  const sustainabilityPoints = [
    { title: 'Non-Toxic Dyes', description: 'Plant-derived dyes with zero harmful chemicals', icon: Leaf },
    { title: 'Water Conservation', description: '70% reduction in water usage through advanced recycling', icon: Zap },
    { title: 'Fair Wages', description: 'Ethical compensation for all artisans and staff', icon: Users },
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
    <div className="min-h-screen" style={{ backgroundColor: colors.offWhite, fontFamily: "'Inter', sans-serif" }}>
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: colors.charcoal, borderBottom: `1px solid ${colors.lightGray}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="SWC Logo" className="h-14 w-14" />
              <div className="hidden sm:block">
                <div className="tracking-wide" style={{ color: colors.gold, fontWeight: 700, fontSize: '1.125rem', fontFamily: "'Playfair Display', serif" }}>
                  System Wash Care
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Textile Specialists</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Craft', 'B2B', 'Sustainability', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="transition-colors duration-300 hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 500 }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'Craft', 'B2B', 'Sustainability', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="transition-colors duration-300 text-left"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.charcoal }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="tracking-tight mb-6 leading-tight" style={{ color: colors.offWhite, fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif" }}>
              Revitalizing Traditional Textile Artistry
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg mb-8 max-w-2xl mx-auto">
              <BadgeCheck size={28} style={{ color: colors.gold, flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Plant Approved — We use standard dyes and chemicals</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-base transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.gold, color: colors.charcoal, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
              >
                Contact Us
              </Button>
              <Button
                onClick={() => scrollToSection('craft')}
                className="px-8 py-4 text-base transition-all duration-300"
                style={{ backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.gold, color: colors.gold, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
              >
                Explore Craft
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Craft Section */}
      <section id="craft" className="py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 leading-tight" style={{ color: colors.charcoal, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Playfair Display', serif" }}>
              The Craft & Process
            </h2>
            <p style={{ color: colors.mediumGray, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Master textile techniques combining traditional artistry with modern finishing standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftTechniques.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightGray}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-10">
                    ◆
                  </div>
                </div>

                {/* Description */}
                <div className="p-8">
                  <h3 className="mb-3 leading-tight" style={{ color: colors.charcoal, fontWeight: 700, fontSize: '1.25rem', fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.mediumGray, lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B & Bulk Capabilities Section */}
      <section id="b2b" className="py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 leading-tight" style={{ color: colors.offWhite, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Playfair Display', serif" }}>
              B2B & Bulk Capabilities
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Enterprise-grade solutions for brands and corporate partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {b2bCapabilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${colors.gold}30`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="mb-5">
                    <IconComponent size={40} style={{ color: colors.gold }} />
                  </div>
                  <h3 className="mb-3 leading-tight" style={{ color: colors.offWhite, fontWeight: 700, fontSize: '1.25rem', fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability & Ethics Section */}
      <section id="sustainability" className="py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 leading-tight" style={{ color: colors.charcoal, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Playfair Display', serif" }}>
              Sustainability & Ethics
            </h2>
            <p style={{ color: colors.mediumGray, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Committed to non-toxic practices, environmental conservation, and fair compensation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityPoints.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: 'white',
                    border: `1px solid ${colors.lightGray}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div className="p-8">
                    <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.gold + '15' }}>
                      <IconComponent size={28} style={{ color: colors.gold }} />
                    </div>
                    <h3 className="mb-3 leading-tight" style={{ color: colors.charcoal, fontWeight: 700, fontSize: '1.25rem', fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: colors.mediumGray, lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 leading-tight" style={{ color: colors.offWhite, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Playfair Display', serif" }}>
              Our Portfolio
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Trusted by leading textile brands across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="rounded-xl p-6 transition-all duration-300 flex items-center justify-center text-center"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${colors.gold}40`,
                  minHeight: '120px'
                }}
              >
                <span style={{ color: colors.offWhite, fontWeight: 600, fontSize: '0.95rem' }}>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 leading-tight" style={{ color: colors.charcoal, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Playfair Display', serif" }}>
              Get In Touch
            </h2>
            <p style={{ color: colors.mediumGray, fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Let's discuss how we can partner on your textile needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full transition-all duration-300" style={{ backgroundColor: colors.gold + '20' }}>
                  <MapPin style={{ color: colors.gold }} size={24} />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: colors.charcoal, fontWeight: 700, fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>Address</h3>
                  <p style={{ color: colors.mediumGray, lineHeight: 1.8 }}>
                    212/1A, High Court Thottam, Alankattu Pudur,<br />
                    Kulathupalayam, Mannarai,<br />
                    Tiruppur - 641607
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full transition-all duration-300" style={{ backgroundColor: colors.gold + '20' }}>
                  <Phone style={{ color: colors.gold }} size={24} />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: colors.charcoal, fontWeight: 700, fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>Phone</h3>
                  <a href="tel:+919597392088" className="transition-colors duration-300" style={{ color: colors.mediumGray }}>
                    +91 9597392088
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full transition-all duration-300" style={{ backgroundColor: colors.gold + '20' }}>
                  <Mail style={{ color: colors.gold }} size={24} />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: colors.charcoal, fontWeight: 700, fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>Email</h3>
                  <a href="mailto:systemwashcare.7@gmail.com" className="transition-colors duration-300" style={{ color: colors.mediumGray }}>
                    systemwashcare.7@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/919597392088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg"
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
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:shadow-md"
                    style={{
                      backgroundColor: 'white',
                      border: `1px solid ${colors.lightGray}`,
                      color: colors.charcoal
                    }}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:shadow-md"
                    style={{
                      backgroundColor: 'white',
                      border: `1px solid ${colors.lightGray}`,
                      color: colors.charcoal
                    }}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:shadow-md min-h-32"
                    style={{
                      backgroundColor: 'white',
                      border: `1px solid ${colors.lightGray}`,
                      color: colors.charcoal
                    }}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.gold, color: colors.charcoal, fontWeight: 600, fontSize: '1rem' }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://www.youtube.com/@systemwashcare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.charcoal }}
            >
              <Youtube size={32} style={{ color: colors.gold }} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.charcoal }}
            >
              <Instagram size={32} style={{ color: colors.gold }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 transition-all duration-500" style={{ backgroundColor: colors.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Info */}
            <div>
              <img src={logoImage} alt="SWC Logo" className="h-16 w-16 mb-4" />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Premium textile solutions with traditional craftsmanship and modern standards.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4" style={{ color: colors.gold, fontWeight: 700, fontSize: '0.95rem', fontFamily: "'Playfair Display', serif" }}>Links</h4>
              <div className="space-y-2">
                {['Home', 'Craft', 'B2B', 'Sustainability', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block transition-colors duration-300 text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4" style={{ color: colors.gold, fontWeight: 700, fontSize: '0.95rem', fontFamily: "'Playfair Display', serif" }}>Contact</h4>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <p>+91 9597392088</p>
                <p>systemwashcare.7@gmail.com</p>
                <p>Tiruppur, India</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4" style={{ color: colors.gold, fontWeight: 700, fontSize: '0.95rem', fontFamily: "'Playfair Display', serif" }}>Newsletter</h4>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: `1px solid ${colors.gold}40`,
                    color: colors.offWhite
                  }}
                />
                <Button
                  className="w-full py-2 rounded-lg text-sm transition-all duration-300"
                  style={{ backgroundColor: colors.gold, color: colors.charcoal, fontWeight: 600 }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8" style={{ borderTop: `1px solid ${colors.gold}20` }}>
            <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 System Wash Care. All rights reserved. Crafted with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
