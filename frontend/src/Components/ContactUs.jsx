import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useData } from './DataContext'; 
import { 
  MapPin, Phone, Mail, Send, CheckCircle, Image,
  Instagram, Facebook, MessageCircle, UserCircle, Crown, HelpCircle, CreditCard
} from 'lucide-react';

const ContactUs = () => {
  const form = useRef();
  const [activeTab, setActiveTab] = useState('query'); // 'query' या 'payment'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // मीडिया फ़ाइल स्टेट (Base64 स्ट्रिंग स्टोर करने के लिए)
  const [attachment, setAttachment] = useState("");
  const [fileName, setFileName] = useState("");

  const { socials } = useData();

  const socialLinks = [
    { icon: <Instagram size={20} />, link: socials?.instagram || "https://www.instagram.com/varadavallabhaganpatimandir", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: <Facebook size={20} />, link: socials?.facebook || "https://facebook.com/yourpage", color: "hover:bg-blue-700", label: "Facebook" },
    { icon: <MessageCircle size={20} />, link: socials?.whatsapp || "https://wa.me/919997512016", color: "hover:bg-green-600", label: "WhatsApp" },
  ];

  // 📁 फोटो को सुरक्षित रूप से Base64 में कन्वर्ट करने का फंक्शन
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) { // 500KB की लिमिट (EmailJS की कैपेसिटी के लिए बेस्ट)
        alert("फ़ाइल का साइज़ 500KB से कम होना चाहिए।");
        e.target.value = null;
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachment(reader.result); // यह Base64 स्ट्रिंग जनरेट करेगा
      };
      reader.readAsDataURL(file);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔑 आपकी क्रेडेंशियल्स
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const TEMPLATE_ID = activeTab === 'query' 
     ? import.meta.env.VITE_EMAILJS_QUERY_TEMPLATE_ID   
    : import.meta.env.VITE_EMAILJS_PAYMENT_TEMPLATE_ID;
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      form_type: activeTab === 'query' ? "सामान्य पूछताछ" : "पेमेंट प्रूफ वेरिफिकेशन",
      payment_proof: attachment, // 🌟 यह आपके EmailJS टेम्पलेट में {{payment_proof}} की तरह काम करेगा
      transaction_id: activeTab === 'payment' ? form.current.transaction_id.value : 'N/A'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
          setIsSent(true);
          setIsSubmitting(false);
          form.current.reset();
          setAttachment("");
          setFileName("");
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          alert("संदेश भेजने में त्रुटि हुई। कृपया दोबारा प्रयास करें।");
          setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-white relative py-16 px-6 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-orange-50/40 rounded-[3rem] md:rounded-[4rem] p-6 md:p-16 border-[6px] md:border-[12px] border-white shadow-2xl overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT: INFO SECTION */}
            <div className="space-y-10 flex flex-col justify-center">
              <div>
                <h4 className="text-orange-600 font-black text-xs tracking-wider mb-3">हमसे संपर्क करें</h4>
                <h2 className="text-4xl md:text-5xl font-black text-red-950 tracking-tight leading-tight">
                  मंदिर प्रबंधन से <br/> 
                  <span className="text-orange-600 text-3xl md:text-4xl block mt-2">संपर्क स्थापित करें</span>
                </h2>
              </div>

              {/* CONTACT LIST */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Crown size={22} />, title: "प्रबंधक (Manager)", val: "श्री नितिन शर्मा" },
                  { icon: <UserCircle size={22} />, title: "मुख्य पुजारी (Chief Priest)", val: "पं. लखन दीक्षित" },
                  { icon: <MapPin size={22} />, title: "पता (Address)", val: "बायпас रोड, छलेसर, आगरा, उत्तर Pradesh" },
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

              {/* SOCIAL MEDIA SECTION */}
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

            {/* RIGHT: TABS AND TWO-WAY FORM */}
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-center">
              
              {/* --- TAB SWITCHER --- */}
              <div className="flex bg-orange-50 p-1.5 rounded-2xl mb-8 border border-orange-100/50">
                <button
                  type="button"
                  onClick={() => { setActiveTab('query'); form.current?.reset(); setFileName(""); setAttachment(""); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black tracking-wider transition-all cursor-pointer ${activeTab === 'query' ? 'bg-red-950 text-white shadow-md' : 'text-gray-500 hover:text-red-950'}`}
                >
                  <HelpCircle size={16} />
                  सामान्य पूछताछ
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('payment'); form.current?.reset(); setFileName(""); setAttachment(""); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black tracking-wider transition-all cursor-pointer ${activeTab === 'payment' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-500 hover:text-orange-600'}`}
                >
                  <CreditCard size={16} />
                  UPI पेमेंट रसीद भेजें
                </button>
              </div>

              {isSent ? (
                <div className="flex flex-col items-center justify-center min-h-[350px] text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <CheckCircle size={70} className="text-green-500" />
                  <h3 className="text-2xl font-black text-red-950">सफलतापूर्वक प्राप्त हुआ!</h3>
                  <p className="text-gray-500 font-bold text-xs tracking-wider">
                    {activeTab === 'query' ? "आपकी पूछताछ दर्ज कर ली गई है।" : "आपके भुगतान का सत्यापन जल्द किया जाएगा।"}
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="space-y-4">
                    
                    <input 
                      type="text" 
                      name="user_name" 
                      placeholder="आपका नाम" 
                      required
                      className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400" 
                    />

                    <input 
                      type="email" 
                      name="user_email" 
                      placeholder="ईमेल का पता" 
                      required
                      className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400" 
                    />

                    {/* 🌟 PAYMENT SPECIFIC FIELD: केवल पेमेंट मोड में दिखेगा */}
                    {activeTab === 'payment' && (
                      <input 
                        type="text" 
                        name="transaction_id" 
                        placeholder="UPI / Transaction ID दर्ज करें" 
                        required
                        className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-600 px-4 py-3 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400 animate-in slide-in-from-top-2 duration-300" 
                      />
                    )}

                    <textarea 
                      name="message" 
                      rows="3" 
                      placeholder={activeTab === 'query' ? "हम आपकी क्या सहायता कर सकते हैं?" : "पेमेंट से जुड़ी कोई विशेष टिप्पणी (जैसे: किस सेवा हेतु दान दिया)"}
                      required
                      className="w-full bg-orange-50/20 border-b-2 border-orange-100 focus:border-orange-500 px-4 py-3 outline-none transition-all font-bold text-red-950 placeholder:text-gray-400 resize-none leading-normal"
                    ></textarea>

                    {/* 📸 PHOTO / MEDIA OPTION INPUT FIELD */}
                    <div className="pt-2">
                      <label className="block text-[11px] font-black text-gray-400 uppercase mb-2 tracking-wider">
                        {activeTab === 'query' ? "कोई स्क्रीनशॉट या फोटो जोड़ें (वैकल्पिक)" : "पेमेंट स्क्रीनशॉट अपलोड करें (अनिवार्य)"}
                      </label>
                      <div className="relative border-2 border-dashed border-orange-200 hover:border-orange-500 rounded-2xl p-4 transition-colors flex items-center justify-center bg-orange-50/10">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleFileChange}
                          required={activeTab === 'payment'} // पेमेंट मोड में स्क्रीनशॉट मैंडेटरी है
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="text-center space-y-1 pointer-events-none">
                          <Image className="mx-auto text-orange-500" size={24} />
                          <p className="text-xs font-bold text-gray-600">
                            {fileName ? fileName : "यहाँ क्लिक करके फोटो चुनें"}
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium">अधिकतम साइज: 500KB</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <button 
                    disabled={isSubmitting}
                    className={`group w-full text-white py-4 rounded-2xl font-black tracking-wider text-xs flex items-center justify-center gap-3 transition-all shadow-xl disabled:bg-gray-400 cursor-pointer ${activeTab === 'query' ? 'bg-red-950 hover:bg-orange-600' : 'bg-orange-600 hover:bg-red-950'}`}
                  >
                    <span>{isSubmitting ? "भेजा जा रहा है..." : (activeTab === 'query' ? "पूछताछ भेजें" : "पेमेंट रसीद सबमिट करें")}</span>
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