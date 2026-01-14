import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRANDING & MISSION */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-red-700 uppercase tracking-tighter">
              Sri-Varadha Vallabha MahaGanpati Mandir
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Serving the community through spiritual guidance and social welfare since our inception. Join us in our journey of faith and service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500">
              {['Home', 'About Us', 'Gallery', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-700 flex items-center gap-1 transition-colors group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SUPPORT & SERVICES */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500">
              {['Donations', 'Virtual Darshan', 'Savamani Booking', 'Pooja Timings', 'News'].map((item) => (
                <li key={item} className="hover:text-red-700 cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. REACH US */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Reach Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-700 shrink-0" size={18} />
                <span className="text-sm text-gray-500 font-medium">Hanuman Temple Road, <br/> District Main Chowk, India.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-700 shrink-0" size={18} />
                <span className="text-sm text-gray-500 font-medium">+91 7378222000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-700 shrink-0" size={18} />
                <span className="text-sm text-gray-500 font-medium">trisakto@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <p>© {currentYear} Tri-Sakti Jyoti. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-700">Privacy Policy</a>
            <a href="#" className="hover:text-red-700">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;