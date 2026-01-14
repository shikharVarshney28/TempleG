import React, { useState, useEffect } from 'react'
import { Phone, Mail, Globe, PlayCircle, X, Menu, Heart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "SHRI GANESH", url: "/ganeshji" },
    { name: "HISTORY", url: "/history" },
    { name: "MANAGEMENT", url: "/management" },
    { name: "GALLERY", url: "/gallery" },
    { name: "EVENTS", url: "/events" },
    { name: "CONTACT", url: "/contact" },
  ];

  return (
    <header className={`w-full font-sans fixed top-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      
      {/* TOP STRIP */}
      <div className="bg-[#8b0000] text-white py-1.5 px-4 lg:px-12 flex justify-between items-center text-[10px] sm:text-[11px] font-bold">
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="tel:+910000000000" className="flex items-center gap-1.5 whitespace-nowrap">
            <Phone size={12} fill="white" />
            <span>+91 000 000 0000</span>
          </a>
          <span className="opacity-30">|</span>
          <a href="mailto:ganpati.agra@divine.com" className="flex items-center gap-1.5 uppercase whitespace-nowrap">
            <Mail size={12} fill="white" />
            <span>ganpati.agra@divine.com</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Globe size={12} />
          <span>AGRA, UP</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3 lg:py-5">
        
        {/* Branding */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full border border-orange-500 overflow-hidden bg-white">
             <img src="/image.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[14px] lg:text-xl font-black text-red-800 leading-none uppercase">
              Varadha Vallabha<br/>
              <span className="text-orange-600">MahaGanapati</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation - Changed from xl:flex to lg:flex */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className={`text-[11px] xl:text-[12px] font-black tracking-wider transition-all hover:text-red-700 ${
                location.pathname === link.url ? 'text-red-700 border-b-2 border-red-700' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            to="/ddarshan" 
            className="flex items-center gap-1.5 bg-orange-500 text-white px-3 sm:px-5 py-2.5 rounded-full text-[9px] sm:text-[11px] font-black tracking-widest shadow-lg hover:bg-orange-600 transition-all"
          >
            <PlayCircle size={14} />
            <span className="whitespace-nowrap uppercase">Daily Darshan</span>
          </Link>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden p-2 text-red-800 hover:bg-red-50 rounded-lg"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div className={`fixed inset-0 bg-black/50 z-[200] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}>
        <div 
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-red-800 font-black uppercase tracking-widest">Menu</span>
            <X size={28} className="text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.url} 
                className="text-lg font-black text-gray-800 uppercase hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/donation" 
              className="mt-4 bg-red-800 text-white text-center py-4 rounded-xl font-black tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              DONATE
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header