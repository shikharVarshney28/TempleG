import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from './DataContext'; // अपने पाथ के अनुसार बदलें
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // NEW: सोशल मीडिया लिंक्स को सैनिटी से डायनामिकली प्राप्त किया
  const { socials } = useData();

  const arr = [
    { name: "मुख्य पृष्ठ", link: "/" },
    { name: "प्रबंधन एवं इतिहास", link: "/management" },
    { name: "पवित्र गैलरी", link: "/gallery" },
    { name: "दिव्य आयोजन", link: "/events" },
    { name: "संपर्क करें", link: "/contact" }
  ];

  const services = [
    { name: "ऑनलाइन दान", link: "/donation" },
    { name: "दैनिक दर्शन", link: "/ddarshan" },
    { name: "पूजा का समय", link: "/" },
    { name: "नवीनतम समाचार", link: "/events" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 font-sans pt-16 pb-8 antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRANDING & MISSION */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-red-800 leading-tight">
              श्री वरद वल्लभ <br/>
              <span className="text-orange-600">महागणपति मंदिर</span>
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              आध्यात्मिक मार्गदर्शन और सामाजिक कल्याण के माध्यम से निरंतर सेवा। श्रद्धा, विश्वास और भक्ति की इस पावन यात्रा में हमारे साथ जुड़ें।
            </p>
            
            {/* UPDATED: डायनामिक सोशल मीडिया लिंक्स */}
            <div className="flex gap-4 pt-2">
              <a 
                href={socials?.instagram || "https://www.instagram.com/varadavallabhaganpatimandir"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:shadow-md transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={socials?.facebook || "https://facebook.com/yourpage"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-md transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={socials?.whatsapp || "https://wa.me/919997512016"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-600 hover:shadow-md transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div>
            <h4 className="text-xs font-black text-red-950 tracking-wider mb-6">त्वरित लिंक्स</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500">
              {arr.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="hover:text-red-700 flex items-center gap-1 transition-colors group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SUPPORT & SERVICES */}
          <div>
            <h4 className="text-xs font-black text-red-950 tracking-wider mb-6">धार्मिक सेवाएँ</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="hover:text-red-700 flex items-center gap-1 transition-colors group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. REACH US */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-red-950 tracking-wider mb-6">मंदिर स्थान</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-700 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-500 font-bold leading-normal">
                  बायपास रोड, छलेसर, <br/>
                  आगरा, उत्तर प्रदेश, भारत।
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-700 shrink-0" size={18} />
                <span className="text-sm text-gray-500 font-bold">+91 9997512016</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-700 shrink-0" size={18} />
                <span className="text-sm text-gray-500 font-bold break-all">demo08843@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-gray-400">
          <p>© {currentYear} वरद वल्लभ महागणपति मंदिर। सर्वाधिकार सुरक्षित।</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-700 transition-colors">गोपनीयता नीति</a>
            <a href="#" className="hover:text-red-700 transition-colors">नियम एवं शर्तें</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;