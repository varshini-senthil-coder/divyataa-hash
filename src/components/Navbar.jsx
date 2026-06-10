import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/divyataa-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-montessori' },
    { name: 'Curriculum', path: '/why-divyataa' },
    { name: 'Campus', path: '/montessori-in-tirupur' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAboutPage = location.pathname === '/about-montessori';
  const isContactPage = location.pathname === '/contact';
  const isExperiencePage = location.pathname === '/montessori-in-tirupur';
  const isCurriculumPage = location.pathname === '/why-divyataa';
  const isGalleryPage = location.pathname === '/gallery';

  const isInnerPage = isAboutPage || isContactPage || isExperiencePage || isCurriculumPage || isGalleryPage;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
        (isScrolled || isInnerPage || isMobileMenuOpen) ? 'bg-white/95 backdrop-blur-lg shadow-md py-1' : 'bg-transparent py-2'
      }`}>
        <div className="max-w-7xl mx-auto flex w-full items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start gap-0 relative">
            <div className="relative">
              <img 
                src={logo} 
                alt="Divyataa Logo" 
                className={`transition-all duration-300 ${(isScrolled || isInnerPage || isMobileMenuOpen) ? 'h-12 md:h-16' : 'h-24 md:h-40'} w-auto`} 
              />
              <span className={`absolute -right-1.5 top-0 md:-right-2.5 text-[8px] md:text-sm font-bold transition-all duration-300 ${
                (isScrolled || isInnerPage || isMobileMenuOpen) ? 'text-purple-600' : 'text-white'
              }`}>
              
              </span>
            </div>
            <span className={`text-[7px] md:text-[8px] font-bold uppercase tracking-[0.12em] transition-all duration-300 -mt-1 px-2 py-0.5 rounded-md ${
              (isScrolled || isInnerPage || isMobileMenuOpen) 
                ? 'opacity-0 h-0 overflow-hidden mt-0 py-0' 
                : 'text-white/90 bg-white/10 backdrop-blur-sm'
            }`}>
              Smr pavalammal educational trust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <div className={`transition-all duration-300 flex items-center gap-1 rounded-full px-2 py-2 text-sm font-medium ${
              (isScrolled || isInnerPage) ? 'bg-white shadow-sm border border-slate-100' : 'glass'
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative rounded-full px-5 py-2 transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : (isScrolled || isInnerPage)
                          ? 'text-slate-700 hover:bg-slate-50'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-purple-600 shadow-md"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions & Mobile Toggle */}
          <div className={`flex items-center gap-3 md:gap-8 ${(isScrolled || isInnerPage || isMobileMenuOpen) ? 'text-slate-800' : 'text-white'}`}>
            <a href="tel:9751112300" className="hidden sm:flex items-center gap-2 text-xs font-bold whitespace-nowrap md:text-sm hover:text-purple-600 transition-colors">
              <Phone size={14} className="md:size-4" />
              <span>97511 12300</span>
            </a>
            
            <Link to="/contact" className="hidden md:flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-purple-500 hover:scale-105 active:scale-95">
              Enroll Now <ArrowRight size={16} />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                (isScrolled || isInnerPage || isMobileMenuOpen) ? 'hover:bg-slate-100' : 'hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl" />
        
        {/* Menu Content */}
        <div className={`absolute top-0 left-0 right-0 h-full bg-white pt-24 pb-12 px-6 shadow-2xl transition-transform duration-500 transform overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex flex-col gap-3 items-center min-h-[calc(100vh-6rem)]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-serif py-1.5 w-full text-center transition-colors ${
                    isActive ? 'text-purple-600 font-bold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="w-full h-px bg-slate-100 my-2" />
            
            <a href="tel:9751112300" className="flex items-center gap-3 text-slate-800 font-bold text-base py-2">
              <Phone className="text-purple-600" size={18} />
              <span>97511 12300</span>
            </a>

            <Link to="/contact" className="flex items-center justify-center gap-3 w-full max-w-[280px] rounded-full bg-purple-600 px-6 py-3.5 text-base font-bold text-white shadow-xl mt-2">
              Enroll Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
