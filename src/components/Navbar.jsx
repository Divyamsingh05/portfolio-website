import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}
      style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'pan-y', transform: 'translateZ(0)' }}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'md:max-w-[1000px]' : ''}`}>
        <div className={`flex items-center justify-between transition-all duration-500 rounded-[2rem] ${scrolled ? 'border border-white/10 shadow-2xl px-6 py-3 bg-[#0a0a0f]/80 backdrop-blur-xl' : 'px-2 py-2 border-transparent'}`}>

          <div className="flex-shrink-0 font-extrabold text-2xl tracking-wider cursor-pointer hover:scale-105 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            DS<span className="text-[#00f0ff]">.</span>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onDragStart={(e) => e.preventDefault()}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 hover:shadow-inner transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10 mx-2" aria-hidden />
              <a href="/Divyam_Singh_Resume.pdf" download 
                 className="flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#8a2be2]/10 border border-[#00f0ff]/30 text-[#00f0ff] hover:from-[#00f0ff]/20 hover:to-[#8a2be2]/20 hover:border-[#00f0ff]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 hover:scale-[1.02] font-semibold text-sm">
                <FileText size={16} />
                CV
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <a href="/Divyam_Singh_Resume.pdf" download className="text-[#00f0ff] bg-[#00f0ff]/10 p-2.5 rounded-full border border-[#00f0ff]/30 shadow-sm" onDragStart={(e) => e.preventDefault()}>
              <FileText size={18} />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 mx-4 transition-transform duration-200 transform origin-top ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto top-24' : '-translate-y-2 opacity-0 pointer-events-none top-20'}`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="rounded-[2rem] border border-white/10 shadow-2xl bg-[#0a0a0f]/95 backdrop-blur-sm md:backdrop-blur-xl overflow-hidden p-2 will-change-transform">
          <div className="flex flex-col gap-1 p-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                onDragStart={(e) => e.preventDefault()}
                className="block px-6 py-4 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
