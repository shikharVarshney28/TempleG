import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useData } from './DataContext'; // अपने पाथ के अनुसार बदलें
import { 
  MapPin, Phone, Mail, Send, Flower2, CheckCircle, 
  Instagram, Facebook, MessageCircle, UserCircle, Crown 
} from 'lucide-react';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // NEW: सैनिटी प्रोवाइडर से सोशल मीडिया लिंक्स का डेटा निकाला
  const { socials } = useData();

  // डायनामिक सोशल मीडिया लिंक्स डेटा (Sanity से लिंक्स आ रहे हैं, फॉलबैक बैकअप के साथ)
  const socialLinks = [
    { 
      icon: <Instagram size={20} />, 
      link: socials?.instagram || "https://www.instagram.com/varadavallabhaganpatimandir", 
      color: "hover:bg-pink-600", 
      label: "Instagram" 
    },
    { 
      icon: <Facebook size={20} />, 
      link: socials?.facebook || "https://facebook.com/yourpage", 
      color: "hover:bg-blue-700", 
      label: "Facebook" 
    },
    { 
      icon: <MessageCircle size={20} />, 
      link: socials?.whatsapp || "https://wa.me/919997512016", 
      color: "hover:bg-green-600", 
      label: "WhatsApp" 
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSent(true);
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          alert("संदेश भेजने में त्रुटि हुई। कृपया कुछ समय बाद पुनः प्रयास करें।");
          setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-white relative py-16 px-6 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative bg-orange-50/40 rounded-[3rem] md:rounded-[4rem] p-6 md:p-16 border-[6px] md:border-[12px] border-white shadow-2xl overflow-hidden">
          {/* पृष्ठभूमि सजावटी तत्व */}
          <Flower2 className="absolute -bottom-10 -right-10 text-orange-100/70 size-64 rotate-12 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT: INFO SECTION (विवरण अनुभाग) */}
            <div className="space-y-10 flex flex-col justify-center">
              <div>
                {/* FIXED: Removed extreme tracking and uppercase for clean Hindi typography */}
                <h4 className="text-orange-600 font-black text-xs tracking-wider mb-3">हमसे संपर्क करें</h4>
                <h2 className="text-4xl md:text-5xl font-black text-red-950 tracking-tight leading-tight">
                  मंदिर प्रबंधन से <br/> 
                  <span className="text-orange-600 text-3xl md:text-4xl block mt-2">संपर्क स्थापित करें</span>
                </h2>
              </div>

              {/* CONTACT LIST (संपर्क विवरण सूची) */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Crown size={22} />, title: "प्रबंधक (Manager)", val: "श्री नितिन शर्मा" },
                  { icon: <UserCircle size={22} />, title: "मुख्य पुजारी (Chief Priest)", val: "पं. लखन दीक्षित" },
                  { icon: <MapPin size={22} />, title: "पता (Address)", val: "बायपास रोड, छलेसर, आगरा, उत्तर Pradesh" },
                  { icon: <Phone size={22} />, title: "दूरभाष (Phone)", val: "+91 9997512016" },
                  { icon: <Mail size={22} />, title: "ईमेल (Email)", val: "demo08843@gmail.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-700 border border-orange-100 group-hover:bg-red-700 group-hover:text-white transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-extrabold text-red-950 text-xs tracking-wider opacity-60 mb-0.5">{item.title}</h5>
                      <p className="text-gray-800 font-bold text-sm md:text-base leading-normal">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SOCIAL MEDIA SECTION (सोशल मीडिया अनुभाग) */}
              <div className="pt-6 border-t border-orange-200/50">
                <h5 className="text-red-950 font-extrabold text-xs tracking-wider mb-4">दिव्य अपडेट्स का अनुसरण करें</h5>
                <div className="flex gap-4">
                  {socialLinks.map((soc, idx) => (
                    <a 
                      key={idx}
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 transition-all duration-300 ${soc.color} hover:text-white hover:-translate-y-1`}
                      aria-label={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: EMAILJS FORM (पूछताछ फॉर्म) */}
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-gray-100 relative flex flex-col justify-center">
              {isSent ? (
                <div className="flex flex-col items-center justify-center min-h-[350px] text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <CheckCircle size={70} className="text-green-500" />
                  <h3 className="text-2xl font-black text-red-950">संदेश प्राप्त हुआ!</h3>
                  <p className="text-gray-500 font-bold text-xs tracking-wider">हम शीघ्र ही आपसे संपर्क करेंगे।</p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-5">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="user_name" 
                        placeholder="आपका नाम" 
                        required
                        className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3.5 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400" 
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="user_email" 
                        placeholder="ईमेल का पता" 
                        required
                        className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3.5 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400" 
                      />
                    </div>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        rows="4" 
                        placeholder="हम आपकी क्या सहायता कर सकते हैं?" 
                        required
                        className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3.5 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400 resize-none leading-normal"
                      ></textarea>
                    </div>
                  </div>

                  {/* FIXED: Handled button spacing and tracking nicely */}
                  <button 
                    disabled={isSubmitting}
                    className="group w-full bg-red-950 text-white py-4 rounded-2xl font-black tracking-wider text-xs flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl disabled:bg-gray-400 cursor-pointer"
                  >
                    <span>{isSubmitting ? "भेजा जा रहा है..." : "पूछताछ भेजें"}</span>
                    {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;