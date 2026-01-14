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
      
      {/* --- TOP STRIP --- */}
      <div className="bg-[#8b0000] text-white py-2 px-4 lg:px-12 flex justify-between items-center text-[11px] font-bold tracking-wider">
        <div className="flex items-center gap-4 lg:gap-8">
          <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-orange-300 transition-all">
            <Phone size={14} className="fill-current" />
            <span className="hidden sm:inline">+91 000 000 0000</span>
          </a>
          <span className="opacity-30">|</span>
          <a href="mailto:ganpati.agra@divine.com" className="flex items-center gap-2 hover:text-orange-300 transition-all uppercase">
            <Mail size={14} className="fill-current" />
            <span className="hidden sm:inline">ganpati.agra@divine.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} />
          <span className="uppercase">Agra, Uttar Pradesh</span>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4">
        
        {/* Divine Branding */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
          <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full border-2 border-orange-500 p-1 shadow-inner overflow-hidden flex items-center justify-center bg-white">
             <img src="/image.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm lg:text-xl xl:text-2xl font-black text-red-800 leading-[1] tracking-tight uppercase">
              Varadha Vallabha<br/>
              <span className="text-orange-600">MahaGanapati</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Links - CHANGED xl:flex TO lg:flex */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 mx-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className={`text-[11px] xl:text-[12px] font-black tracking-tighter xl:tracking-normal transition-all hover:text-red-700 whitespace-nowrap ${
                location.pathname === link.url ? 'text-red-700 underline underline-offset-4 decoration-2' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 xl:gap-4">
          {/* DONATE: Visible from Laptop (lg) size onwards */}
          <Link 
            to="/donation" 
            className="hidden lg:flex items-center gap-2 bg-[#b20000] text-white px-4 xl:px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-red-800 transition-all shadow-md shrink-0"
          >
            <Heart size={14} className="fill-current" />
            DONATE
          </Link>

          {/* DAILY DARSHAN: Always visible */}
          <Link 
            to="/ddarshan" 
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff8c00] to-[#ff4500] text-white px-4 xl:px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest shadow-md hover:brightness-110 transition-all shrink-0"
          >
            <PlayCircle size={16} />
            <span className="hidden sm:inline">DAILY DARSHAN</span>
            <span className="sm:hidden">DARSHAN</span>
          </Link>

          {/* Menu Button: Only visible on screens smaller than lg */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-red-700 ml-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[200] p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="font-black text-red-800 tracking-widest uppercase">Menu</span>
            <X size={32} onClick={() => setIsOpen(false)} className="text-gray-400" />
          </div>
          <div className="flex flex-col gap-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.url} className="text-2xl font-black text-gray-800 uppercase border-b border-gray-100 pb-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link 
              to="/donation" 
              className="mt-4 flex items-center justify-center gap-3 bg-red-800 text-white py-4 rounded-2xl font-black tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={20} className="fill-current" />
              DONATE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header