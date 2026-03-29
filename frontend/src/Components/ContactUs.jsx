import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  MapPin, Phone, Mail, Send, Flower2, CheckCircle, 
  Instagram, Facebook, MessageCircle, UserCircle, Crown 
} from 'lucide-react';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // SOCIAL LINKS DATA
  const socialLinks = [
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/varadavallabhaganpatimandir?igsh=bDdveTVqb3VncWpy", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: <Facebook size={20} />, link: "https://facebook.com/yourpage", color: "hover:bg-blue-700", label: "Facebook" },
    { icon: <MessageCircle size={20} />, link: "https://wa.me/919997512016", color: "hover:bg-green-600", label: "WhatsApp" },
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
          alert("Failed to send message. Please try again later.");
          setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative bg-orange-50/50 rounded-[4rem] p-8 md:p-16 border-[12px] border-white shadow-2xl overflow-hidden">
          {/* Decorative Background Icon */}
          <Flower2 className="absolute -bottom-10 -right-10 text-orange-100 size-64 rotate-12" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT: INFO SECTION */}
            <div className="space-y-10">
              <div>
                <h4 className="text-orange-600 font-black tracking-[0.4em] uppercase text-[10px] mb-4">Connect With Us</h4>
                <h2 className="text-5xl md:text-6xl font-black text-red-900 tracking-tighter leading-[0.8]">
                  Reach Out To <br/> <span className="text-orange-500 italic text-4xl md:text-5xl">Dham Authorities</span>
                </h2>
              </div>

              {/* CONTACT LIST */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Crown size={22} />, title: "Manager", val: "Mr. Nitin Sharma" },
                  { icon: <UserCircle size={22} />, title: "Chief Priest", val: "Pt. Lakhan Dixit" },
                  { icon: <MapPin size={22} />, title: "Address", val: "Bypass Road, Chalesar, Agra, UP" },
                  { icon: <Phone size={22} />, title: "Phone", val: "+91 9997512016" },
                  { icon: <Mail size={22} />, title: "Email", val: "demo08843@gmail.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-red-700 border border-orange-100 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-black text-red-900 uppercase text-[10px] tracking-widest opacity-60">{item.title}</h5>
                      <p className="text-gray-700 font-bold text-sm">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* NEW: SOCIAL MEDIA SECTION */}
              <div className="pt-6 border-t border-orange-200/50">
                <h5 className="text-red-900 font-black uppercase text-[10px] tracking-widest mb-4">Follow Divine Updates</h5>
                <div className="flex gap-4">
                  {socialLinks.map((soc, idx) => (
                    <a 
                      key={idx}
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 transition-all duration-300 ${soc.color} hover:text-white hover:-translate-y-1`}
                      aria-label={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: EMAILJS FORM */}
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-xl border border-white/50 relative">
              {isSent ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <CheckCircle size={80} className="text-green-500" />
                  <h3 className="text-2xl font-black text-red-900">Message Received!</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">We will get back to you shortly.</p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      name="user_name" 
                      placeholder="Your Name" 
                      required
                      className="w-full bg-orange-50/30 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-4 outline-none transition-all font-bold text-red-900 placeholder:text-gray-300" 
                    />
                    <input 
                      type="email" 
                      name="user_email" 
                      placeholder="Email Address" 
                      required
                      className="w-full bg-orange-50/30 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-4 outline-none transition-all font-bold text-red-900 placeholder:text-gray-300" 
                    />
                    <textarea 
                      name="message" 
                      rows="4" 
                      placeholder="How can we assist you?" 
                      required
                      className="w-full bg-orange-50/30 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-4 outline-none transition-all font-bold text-red-900 placeholder:text-gray-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="group w-full bg-red-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-orange-600 transition-all shadow-xl disabled:bg-gray-400"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
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