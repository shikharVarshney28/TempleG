import React, { useState } from 'react';
import { Clock, Sun, Moon, Utensils, DoorClosed, Coffee, Shield, MapPin, Heart, ArrowRight, Flower2, Sparkles, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
const TempleInfo = () => {
  // पॉपअप (Modal) स्टेट मैनेजमेंट
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // राइट कॉलम समय सारणी के लिए एक्टिव टैब स्टेट ("daily" या "festival")
  const [activeTab, setActiveTab] = useState("daily");

  // विकास और परिसर के लक्ष्य
  const developmentGoals = [
    { 
      title: "सिद्धि स्थल विकास", 
      desc: "भक्तों के लिए विघ्नेश्वर की दिव्य चेतना और बुद्धिमत्ता से जुड़ने हेतु विशेष ध्यान और ध्यान साधना क्षेत्रों का निर्माण।", 
      icon: <Flower2 size={18}/> 
    },
    { 
      title: "महाप्रसाद वितरण", 
      desc: "दैनिक स्तर पर शुद्ध और सात्विक महाप्रसाद एवं मोदक वितरण के लिए आधुनिक व स्वच्छ रसोई का संचालन।", 
      icon: <Utensils size={18}/> 
    },
    { 
      title: "श्रद्धालु सुविधा", 
      desc: "छलेसर परिसर का विस्तार, ताकि आगरा की भीषण गर्मियों में भी भक्तों को ठंडे विश्राम स्थल और शीतल जल मिल सके।", 
      icon: <MapPin size={18}/> 
    },
  ];

  // नया दैनिक समय सारणी डेटा (Worship Schedule)
  const schedule = [
    { time: "07:00 AM", event: "मंगला आरती", icon: <Sun className="text-orange-500" /> },
    { time: "07:30 AM", event: "नित्य अभिषेकम्", icon: <Coffee className="text-blue-400" /> },
    { time: "09:30 AM", event: "श्री गणपति सहस्रनाम अर्चना", icon: <Sparkles className="text-yellow-500" /> },
    { time: "10:00 AM", event: "भोग आरती", icon: <Utensils className="text-red-500" /> },
    { time: "01:00 PM", event: "दर्शन विराम (पट बंद)", icon: <DoorClosed className="text-red-400" /> },
    { time: "04:30 PM", event: "उत्थापन आरती / दर्शन प्रारंभ", icon: <Sun className="text-amber-500" /> },
    { time: "06:00 PM", event: "श्री गणेश सहस्रनाम पाठ", icon: <Sparkles className="text-orange-400" /> },
    { time: "07:00 PM", event: "महाआरती", icon: <Moon className="text-indigo-400" /> },
    { time: "08:45 PM", event: "शयन आरती", icon: <DoorClosed className="text-gray-400" /> },
    { time: "09:00 PM", event: "दर्शन विराम (पट बंद)", icon: <DoorClosed className="text-gray-600" /> },
  ];

  // भाद्रपद मास शुक्ल पक्ष गणेश चतुर्थी (विनायक चतुर्थी) विशेष उत्सव समय
  const festivalSchedule = [
    { time: "05:00 AM", event: "मंगला आरती", icon: <Sun className="text-orange-500" /> },
    { time: "05:15 AM", event: "महा अभिषेकम्", icon: <Coffee className="text-blue-500" /> },
    { time: "07:00 AM TO 10:00 PM", event: "श्री गणेश दर्शन (अनवरत)", icon: <Sparkles className="text-amber-500" /> },
    { time: "09:30 AM", event: "श्री गणेश सहस्रनाम पाठ", icon: <Sparkles className="text-yellow-600" /> },
    { time: "10:00 AM", event: "भोग आरती", icon: <Utensils className="text-red-500" /> },
    { time: "07:00 PM", event: "महा आरती", icon: <Moon className="text-indigo-500" /> },
    { time: "09:45 PM", event: "शयन आरती", icon: <DoorClosed className="text-gray-400" /> },
    { time: "10:00 PM", event: "दर्शन विराम (पट बंद)", icon: <DoorClosed className="text-gray-700" /> },
  ];

  // 10 आधिकारिक सेवाएँ (Services & Offerings)
  const officialServices = [
    { id: 1, name: "नित्य अभिषेक सेवा", desc: "भगवान गणेश का प्रतिदिन वैदिक मंत्रोच्चार के साथ किया जाने वाला पवित्र अभिषेक।" },
    { id: 2, name: "महाअभिषेक", desc: "विशेष पर्वों और तिथियों पर पंचामृत एवं औषधीय द्रव्यों से होने वाला भव्य अभिषेक।" },
    { id: 3, name: "गणपति सहस्रनाम अर्चना", desc: "भगवान गणपति के 1000 पवित्र नामों का उच्चारण करते हुए की जाने वाली विशेष अर्चना।" },
    { id: 4, name: "गणपति अष्टोत्तर अर्चना", desc: "बाप्पा के 108 दिव्य नामों के जाप के साथ दूर्वा और पुष्प अर्पित करने की सेवा।" },
    { id: 5, name: "महागणपति हवन", desc: "जीवन के समस्त विघ्नों को दूर करने और समृद्धि के लिए गर्भगृह के समीप यज्ञशाला में हवन।" },
    { id: 6, name: "भोग सेवा (एक समय)", desc: "दिन के किसी एक मुख्य समय (प्रातः अथवा मध्याह्न) बाप्पा को सात्विक मिष्ठान व मोदक का भोग।" },
    { id: 7, name: "भोग सेवा (पूर्ण दिवस)", desc: "पूरे दिन के सभी प्रहरों (प्रातः, दोपहर, संध्या, शयन) में लगने वाले दिव्य भोग की संपूर्ण व्यवस्था।" },
    { id: 8, name: "वस्त्र/श्रृंगार सेवा", desc: "गणपति जी के विग्रह को सुंदर दक्षिण भारतीय रेशमी वस्त्र और स्वर्णिम आभूषणों से सजाने की सेवा।" },
    { id: 9, name: "चतुर्थी उद्यापन सेवा (प्रातः से रात्रि तक)", desc: "संकष्टी अथवा विनायकी चतुर्थी के पावन अवसर पर सुबह से रात तक चलने वाले विशेष अनुष्ठान।" },
    { id: 10, name: "फूल बंगला", desc: "विशेष उत्सवों पर गर्भगृह और गर्भगृह के विग्रह को सुगंधित देसी-विदेशी पुष्पों से भव्य रूप से सजाना।" },
  ];

  const handleOpenModal = (service = null) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: महागणपति की महिमा और सेवा बॉक्स */}
        <div className="lg:col-span-7 space-y-10">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">
              सिद्धि विनायक उपस्थिति
            </span>
            <h2 className="text-5xl font-black text-gray-900 mt-6 leading-none tracking-tighter">
              विघ्नहर्ता श्री <span className="text-red-700 italic">महागणपति</span>
            </h2>
            <div className="h-2 w-24 bg-orange-500 rounded-full mt-4"></div>
            
            <div className="space-y-6 mt-8">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                छलेसर (आगरा) के श्री वरद वल्लभा महागणपति मंदिर में भगवान गणेश भक्तों को मनवांछित वरदान देने वाले (वरद) और अपने भक्तों के प्रिय (वल्लभा) के रूप में विराजमान हैं।
              </p>
              <p className="text-gray-500 leading-relaxed border-l-4 border-red-100 pl-6 italic">
                "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ..." <br/>
                इस पावन धाम का प्रत्येक कोना भक्तों के भीतर बुद्धि, रिद्धि और सिद्धि को जागृत करने के लिए बनाया गया है, जिसे गणपति बाप्पा अपने भक्तों पर बरसाते हैं।
              </p>
            </div>
          </div>

          {/* परिसर विकास ग्रिड */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentGoals.map((goal, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:border-orange-200 transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {goal.icon}
                </div>
                <h4 className="font-black text-gray-900 text-sm tracking-tight mb-2">{goal.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>

          {/* SERVICES & DONATION BOXES (धार्मिक सेवाएँ एवं दान कक्ष) */}
          <div className="pt-6">
            <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">मंदिर की मुख्य सेवाएँ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: धार्मिक सेवाएँ बुक करें */}
              <div 
                onClick={() => handleOpenModal(null)}
                className="p-8 bg-gradient-to-br from-red-900 to-red-950 text-white rounded-[2rem] shadow-xl hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:scale-110 transition-transform">
                   <Flower2 size={120} />
                </div>
                <span className="bg-white/10 text-orange-300 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full">Seva Bookings</span>
                <h4 className="text-2xl font-black mt-4 mb-2">पूजा एवं अर्चना सेवाएँ</h4>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">नित्य अभिषेक, महाहवन, और वस्त्र श्रृंगार सहित कुल 10 दिव्य सेवाओं की सूची देखने के लिए यहाँ क्लिक करें।</p>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 group-hover:translate-x-2 transition-transform">
                  <span>सभी सेवाएँ देखें</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Box 2: दान एवं सहयोग */}
              <Link to = "/donation">
                <div
                className="p-8 bg-orange-500 text-white rounded-[2rem] shadow-xl hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:scale-110 transition-transform">
                   <Heart size={120} />
                </div>
                <span className="bg-white/10 text-white text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full">Donation</span>
                <h4 className="text-2xl font-black mt-4 mb-2">गौशाला व मंदिर दान</h4>
                <p className="text-orange-100 text-xs leading-relaxed mb-6">मंदिर निर्माण, अन्नक्षेत्र भंडार, और गौशाला में उच्च नस्ल की गायों की सेवा हेतु अपना बहुमूल्य सहयोग प्रदान करें।</p>
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-2 transition-transform">
                  <span>सहयोग राशि प्रदान करें</span>
                  <ArrowRight size={14} />
                </div>
              </div>
              </Link>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: दैनिक आरती व दर्शन समय सारणी + विशेष उत्सव टैब */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="bg-[#1e1e1e] text-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
              
              {/* बैकग्राउंड में पवित्र ॐ का चिन्ह */}
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <h1 className="text-[10rem] font-black italic">ॐ</h1>
              </div>
              
              <div className="relative z-10">
                
                {/* टैब हेडर (दैनिक बनाम विशेष उत्सव समय सारणी) */}
                <div className="mb-6 flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
                  <button 
                    onClick={() => setActiveTab("daily")}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${activeTab === 'daily' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Clock size={14} />
                    दैनिक समय सारणी
                  </button>
                  <button 
                    onClick={() => setActiveTab("festival")}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${activeTab === 'festival' ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Calendar size={14} />
                    गणेश चतुर्थी उत्सव
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black tracking-tight mb-1">
                    {activeTab === 'daily' ? 'दैनिक आराधना कार्यक्रम' : 'विनायक चतुर्थी उत्सव'}
                  </h3>
                  <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                    {activeTab === 'daily' ? 'धार्मिक कार्यक्रम (WORSHIP SCHEDULE)' : 'भाद्रपद मास शुक्ल पक्ष विशेष समय'}
                  </p>
                </div>

                {/* कंडीशनल रेंडरिंग: एक्टिव टैब के अनुसार लिस्ट */}
                <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
                  {(activeTab === 'daily' ? schedule : festivalSchedule).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
                      <div className="flex items-center gap-3.5">
                        <div className="p-2 bg-red-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-black text-white tracking-tight leading-tight">{item.event}</p>
                          <p className="text-[14px] text-gray-400 font-semibold mt-0.5">{item.time}</p>
                        </div>
                      </div>
                      <ArrowRight size={12} className="text-gray-600 group-hover:text-orange-500 transition-colors shrink-0" />
                    </div>
                  ))}
                </div>

                {/* महत्वपूर्ण सूचना और नोट सेक्शन */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                  
                  {/* शीतकालीन समय नोट */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[14px] text-gray-300 leading-normal">
                    <span className="font-bold text-amber-400 block mb-0.5">❄️ शीत कालीन समय ध्यान दें:</span>
                    1 नवम्बर से 28/29 फरवरी तक सायं काल के सभी कार्यक्रम नियत समय से <strong>30 मिनट पूर्व</strong> संपन्न किए जाएंगे।
                  </div>

                  {/* महाअभिषेक एवं विशेष दिवस समय */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[14px] text-gray-300 grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-bold text-orange-400 block">चतुर्थी महाअभिषेक:</span>
                      <span>प्रातः 6:00 (ग्रीष्म) / 7:00 (शीत)</span>
                    </div>
                    <div>
                      <span className="font-bold text-orange-400 block">दीपावली पूजा समय:</span>
                      <span>प्रातः 06:00 बजे विशेष पूजा</span>
                    </div>
                  </div>

                  {/* संकष्टी चतुर्थी नोट */}
                  <div className="flex items-center gap-3 p-3.5 bg-orange-500/10 rounded-xl border border-orange-500/20">
                    <Heart className="text-orange-500 animate-pulse shrink-0" fill="currentColor" size={16} />
                    <p className="text-[14px] font-bold text-gray-300 leading-tight">
                      प्रत्येक माह की <span className="text-orange-400 underline">संकष्टी व विनायक चतुर्थी</span> तिथि पर प्रातः काल में दक्षिण शैली अनुसार महाअभषेक एवं मोदक उत्सव मनाया जाता है।
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* POPUP MODAL: सभी 10 सेवाओं की विस्तृत सूची */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all animate-in fade-in duration-200">
          <div className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-orange-50 to-transparent">
              <div>
                <h3 className="text-2xl font-black text-red-900">श्री महागणपति सेवा सूची</h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">छलेसर धाम में भक्तों के लिए उपलब्ध धार्मिक अनुष्ठान</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content (Scrollable List) */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-gray-50/50">
              {officialServices.map((service) => (
                <div 
                  key={service.id} 
                  className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-300 transition-all group flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {service.id}
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 group-hover:text-red-900 transition-colors">{service.name}</h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-white flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-red-950 text-white rounded-xl text-sm font-bold hover:bg-red-900 transition-colors"
              >
                बंद करें
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default TempleInfo;