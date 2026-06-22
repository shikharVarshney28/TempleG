import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Globe, PlayCircle, X, Menu, Heart, ChevronDown, MapPin, MessageSquare } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ड्रॉपडाउन के बाहर क्लिक होने पर बंद करने के लिए
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // FIXED: All Navigation Names converted to Hindi (No tracking-wide/uppercase to protect Devanagari)
  const navLinks = [
    { name: "श्री गणेश", url: "/ganeshji" },
    { name: "इतिहास", url: "/history" },
    { name: "प्रबंधन", url: "/management" },
    { name: "गैलरी", url: "/gallery" },
    { name: "आयोजन", url: "/events" },
  ];

  return (
    <header className={`w-full font-sans fixed top-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      
      {/* --- TOP STRIP --- */}
      <div className="bg-[#8b0000] text-white py-2 px-4 lg:px-12 flex justify-between items-center text-[11px] font-bold tracking-wider">
        <div className="flex items-center gap-4 lg:gap-8">
          <a href="tel:+919997512016" className="flex items-center gap-2 hover:text-orange-300 transition-all">
            <Phone size={14} className="fill-current" />
            <span className="hidden sm:inline">+91 9997512016</span>
          </a>
          <span className="opacity-30">|</span>
          <a href="mailto:demo08843@gmail.com" className="flex items-center gap-2 hover:text-orange-300 transition-all">
            <Mail size={14} className="fill-current" />
            <span className="hidden sm:inline">demo08843@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} />
          <span className="tracking-wide">आगरा, उत्तर प्रदेश</span>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4">
        
        {/* Divine Branding */}
        {/* --- Divine Branding --- */}
      <Link to="/" className="flex items-center gap-2 lg:gap-3 shrink-0" onClick={() => setDropdownOpen(false)}>
        {/* FIXED: लोगो फ्रेम को 16 से थोड़ा बड़ा किया और object-top + scale-125 लगाया ताकि मंदिर का शिखर और नाम एकदम साफ दिखे */}
        <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border-2 border-orange-500 p-0.5 shadow-md overflow-hidden flex items-center justify-center bg-white shrink-0">
          <img 
            src="/logo.PNG" 
            alt="वरद वल्लभ महागणपति मंदिर लोगो" 
            className="w-full h-full object-cover object-top scale-110 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm lg:text-xl xl:text-2xl font-black text-red-800 leading-normal tracking-tight">
            वरद वल्लभा<br/>
            <span className="text-orange-600 block -mt-1">महागणपति मंदिर</span>
          </h1>
        </div>
      </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 mx-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className={`text-sm xl:text-base font-extrabold tracking-normal transition-all hover:text-red-700 whitespace-nowrap ${
                location.pathname === link.url ? 'text-red-700 underline underline-offset-4 decoration-2' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CONTACT Dropdown Component in Hindi */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm xl:text-base font-extrabold tracking-normal transition-all hover:text-red-700 whitespace-nowrap cursor-pointer ${
                location.pathname === '/contact' || location.pathname === '/reach-us' ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              संपर्क करें
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Box */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-0 w-52 bg-white rounded-2xl shadow-xl border border-orange-50 py-2 z-[250] animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  to="/contact" 
                  className="flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-red-800 transition-all border-b border-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  <MessageSquare size={16} className="text-orange-500" />
                  संपर्क विवरण
                </Link>
                <Link 
                  to="/how_to_reach"
                  className="flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-red-800 transition-all"
                  onClick={() => setDropdownOpen(false)}
                >
                  <MapPin size={16} className="text-red-700" />
                  मार्ग दर्शन (मैप)
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 xl:gap-4">
          {/* DONATE */}
          <Link 
            to="/donation" 
            className="hidden lg:flex items-center gap-2 bg-[#b20000] text-white px-4 xl:px-5 py-2.5 rounded-full text-xs font-black hover:bg-red-800 transition-all shadow-md shrink-0"
          >
            <Heart size={14} className="fill-current" />
            दान करें
          </Link>

          {/* DAILY DARSHAN */}
          <Link 
            to="/ddarshan" 
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff8c00] to-[#ff4500] text-white px-4 xl:px-5 py-2.5 rounded-full text-xs font-black shadow-md hover:brightness-110 transition-all shrink-0"
          >
            <PlayCircle size={16} />
            <span className="hidden sm:inline">दैनिक दर्शन</span>
            <span className="sm:hidden">दर्शन</span>
          </Link>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-red-700 ml-1 cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY (मोबाइल मेनू) --- */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[200] p-6 flex flex-col animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-8">
            <span className="font-black text-red-800 uppercase text-base">मुख्य मेनू</span>
            <X size={32} onClick={() => setIsOpen(false)} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto pr-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.url} className="text-xl font-black text-gray-800 border-b border-gray-50 pb-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Dropdown Breakdown */}
            <div className="border-b border-gray-50 pb-3 space-y-3">
              <span className="text-xs font-black text-gray-400 tracking-widest uppercase block">संपर्क के विकल्प</span>
              <Link to="/contact" className="flex items-center gap-2 text-lg font-black text-gray-800 pl-2" onClick={() => setIsOpen(false)}>
                <MessageSquare size={18} className="text-orange-500" /> संपर्क विवरण
              </Link>
              <Link to="/how_to_reach" className="flex items-center gap-2 text-lg font-black text-gray-800 pl-2" onClick={() => setIsOpen(false)}>
                <MapPin size={18} className="text-red-700" /> मार्ग दर्शन (मैप और लोकेशन)
              </Link>
            </div>

            <Link 
              to="/donation" 
              className="mt-4 flex items-center justify-center gap-3 bg-red-800 text-white py-4 rounded-2xl font-black text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={20} className="fill-current" />
              अभी दान करें
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header