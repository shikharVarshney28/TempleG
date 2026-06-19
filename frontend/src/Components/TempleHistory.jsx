import React from 'react';
import { 
  History, 
  Award, 
  Hammer, 
  Milestone, 
  Target, 
  Flower2, 
  Clock, 
  MapPin, 
  Calendar, 
  Utensils, 
  Heart, 
  Flame, 
  Camera, 
  Sparkles,
  Plane,
  Train,
  Bus,
  CheckCircle2
} from 'lucide-react';

const TempleHistory = () => {
  // टाइमलाइन डेटा (आपके दस्तावेज़ के अनुसार पूर्ण विवरण)
  const timeline = [
    {
      year: "30 जुलाई सन्-2009 (महान शुभारंभ)",
      title: "आधारशिला और दिव्य स्वप्न की संकल्पना",
      desc: "मैनेजिंग ट्रस्टी श्री हरिमोहन गर्ग जी के एक अलौकिक व दिव्य स्वप्न को साकार रूप देने के लिए इस पावन धरा पर आधिकारिक रूप से प्रथम शिला रखी गई। यहाँ से आध्यात्मिक साधना और स्थापत्य कला के एक ऐतिहासिक अध्याय की शुरुआत हुई।",
      icon: <History className="text-orange-600" />
    },
    {
      year: "सन् 2009 से सन् 2021 (निर्माण काल)",
      title: "12 वर्षों की अनवरत साधना और बिना लोहे का शिल्प",
      desc: "4000 वर्ग गज के विस्तीर्ण क्षेत्र में फैले इस अष्टकोणीय (Octagonal) भव्य मंदिर के ढांचे को तराशने में असंख्य कुशल कारीगरों को पूरे 12 वर्ष का समय लगा। संपूर्ण निर्माण जैसलमेर के प्रसिद्ध पीले पत्थर और सफेद संगमरमर से बिना किसी लोहे के उपयोग के किया गया है, जो प्राचीन सनातन शिल्प कला का अद्भुत उदाहरण है।",
      icon: <Hammer className="text-orange-600" />
    },
    {
      year: "सन् 2021 से सन् 2022 (मूर्ति शिल्प)",
      title: "पद्म श्री पेरेमल सतपति जी की अनवरत शिल्प साधना",
      desc: "महाबलीपुरम (चेन्नई, तमिलनाडु) के विख्यात मूर्तिकार पद्म श्री पेरेमल सतपति जी ने ब्लू ग्रेनाइट के 10 टन वजनी विशाल पत्थर को एक वर्ष से अधिक समय तक लगातार तराशा। जिसके बाद दक्षिण अफ्रीका की मूल्यवान घाना लकड़ी से निर्मित और मुंबई के सिद्धिविनायक मंदिर से पूजित शिलाओं पर आधारित सिंहासन पर विराजमान 4 टन के इस मनमोहक दक्षिणावर्ती विग्रह को साकार रूप मिला।",
      icon: <Award className="text-red-700" />
    },
    {
      year: "28 अप्रैल सन्-2022 (ऐतिहासिक उद्घाटन)",
      title: "वैदिक कुंभाभिषेक और भव्य प्राण प्रतिष्ठा समारोह",
      desc: "दक्षिण भारत से पधारे प्रकांड आचार्यों द्वारा यज्ञशाला पूजा, 108 कलश पूजा, महापूर्णआहुति, स्पर्श आहुति और नाड़ी सन्तानम् जैसी अत्यंत गूढ़ वैदिक क्रियाओं को पूर्ण किया गया। अंत में नेत्रलोचन क्रिया पूर्ण कर मंदिर के शिखर पर कलश व ध्वजा पताका स्थापित कर इसे आधिकारिक रूप से समस्त जनता के दर्शन लाभ हेतु समर्पित कर दिया गया।",
      icon: <Milestone className="text-red-700" />
    }
  ];

  // 10 मुख्य बातें (सभी पॉइंट्स पूरी जानकारी के साथ)
  const keyFeatures = [
    { num: "1", title: "स्थापना और निर्माण", text: "इस मंदिर का निर्माण सन् 2009 में शुरू हुआ और 12 वर्षों की अनवरत साधना में बन कर तैयार हुआ।" },
    { num: "2", title: "उद्घाटन", text: "मंदिर का उद्घाटन प्राण प्रतिष्ठा के अनुष्ठान उपरान्त 28 अप्रैल 2022 को किया गया तथा आधिकारिक रूप से जनता के दर्शन लाभ हेतु खोला गया।" },
    { num: "3", title: "प्रेरणा", text: "इस मंदिर की परिकल्पना 2009 में श्री हरिमोहन गर्ग ने अपने दिव्य स्वप्न को साकार रूप देने के लिए की थी।" },
    { num: "4", title: "स्थापत्य कला", text: "यह मंदिर जैसलमेर पीला पत्थर व सफेद संगमरमर से निर्मित है। जिस पर अद्भुत नक्काशी की गई है, जो सनातन संस्कृति और श्रद्धा का जीवंत प्रतीक है।" },
    { num: "5", title: "मुख्य मंदिर", text: "गर्भगृह में ब्लू ग्रेनाइट की श्री महागणपति भगवान की चार फीट ऊँची भव्य प्रतिमा स्थापित है। चबूतरे पर परिक्रमा मार्ग का निर्माण किया गया है और रात की रंग-बिरंगी लाइटें मुख्य आकर्षण हैं।" },
    { num: "6", title: "श्री अन्जनेय स्वामी मंदिर", text: "मंदिर परिसर में विशेष रूप से दक्षिणमुखी श्री अन्जनेय स्वामी महाराज (श्री हनुमान जी) के दिव्य विग्रह का मंदिर निर्मित है।" },
    { num: "7", title: "महाभिषेक", text: "प्रत्येक माह की कृष्ण पक्ष व शुक्ल पक्ष की चतुर्थी तिथि पर प्रातः में महाभिषेक दक्षिण शैली के अनुसार दूध, दही, चन्दन भस्मी, कुमकुम, हल्दी, फल, शहद, नारियल-पानी आदि से पूर्ण किया जाता है।" },
    { num: "8", title: "गणपति दैनिक भोग", text: "श्री गणपति महाराज को नित्य मंगला से शयन तक 6 भोग अर्पित किये जाते है। दक्षिण व उत्तर भारत भोग पद्धति के अनुसार पृथक-पृथक भोग अर्पित किये जाते है। मंदिर में ही निर्मित प्रसाद का ही भगवान को भोग लगाया जाता है। सभी दर्शनार्थियों को भी मंदिर की ओर से प्रसाद का वितरण किया जाता है।गणपति महाराज के नित्य भोग व महाराज का प्रिय भोग “मोदक” मंदिर की रसोईघर में पूर्ण शुद्धता व उच्च गुणवत्ता की सामग्री से निर्मित किया जाता है। विशेष मोदक भोग भक्तों द्वारा अर्पित किया जाता है।" },
    { num: "9", title: "यज्ञशाला", text: "परिसर में स्थापित यज्ञशाला में समय-समय पर हवनयज्ञ, धार्मिक-अनुष्ठान के साथ वैवाहिक कार्यक्रम व वर-वधू द्वारा सात फेरे लिये जाते हैं।" },
    { num: "10", title: "गौशाला", text: "मंदिर परिसर में स्थापित गौशाला में पालित उच्च नस्ल की गिर व साहिवाल गायों का दुग्ध नित्यअभिषेक, धार्मिक-अनुष्ठान व भोग प्रसाद के उपयोग में लाया जाता है।" }
  ];

  // सेवाएँ सूची
  const services = [
    "नित्य अभिषेक सेवा", "महाअभिषेक", "गणपति सहस्रनाम अर्चना", 
    "गणपति अष्टोत्तर अर्चना", "महागणपति हवन", "भोग सेवा (एक समय)", 
    "भोग सेवा (पूर्ण दिवस)", "वस्त्र/श्रृंगार सेवा", 
    "चतुर्थी उद्यापन सेवा (प्रातः से रात्रि तक)", "फूल बंगला"
  ];

  return (
    <section className="bg-[#fffcf9] py-24 px-4 md:px-6 relative overflow-hidden font-sans">
      {/* सजावटी बैकग्राउंड एलिमेंट्स */}
      <Flower2 className="absolute -bottom-20 -left-20 text-orange-100/40 size-80 pointer-events-none" />
      <Flower2 className="absolute -top-20 -right-20 text-orange-100/40 size-80 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-orange-100 pb-10 gap-8">
          <div className="max-w-3xl space-y-2">
            <h4 className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs">
              HISTORY & CONSTRUCTION
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-red-950 tracking-tighter leading-none">
              श्री वरद वल्लभा महागणपति मंदिर <br />
              <span className="text-orange-600 italic font-serif">इतिहास और दिव्य निर्माण</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center animate-spin-slow">
                <Target className="text-orange-400" size={32} />
             </div>
          </div>
        </div>

        {/* --- MAIN STORY & STATS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p className="text-xl font-bold text-red-900 bg-orange-50 p-6 rounded-3xl border-l-4 border-orange-500">
              आगरा की पावन धरा पर दक्षिण भारतीय शैली पर आधारित चार हजार वर्ग गज में निर्मित दिव्य एवं भव्य श्री वरद वल्लभा महागणपति जी के अष्टकोणीय मंदिर का निर्माण 12 वर्षों की अथक साधना के बाद पूर्ण हुआ।
            </p>
            <p>
              यह मंदिर आगरा-फिरोजाबाद (कानपुर) नेशनल हाईवे पर <span className="font-bold text-red-900">छलेसर, आगरा</span> में बनाया गया एक आधुनिक आध्यात्मिक स्थल है। जिसे मैनेजिंग ट्रस्टी श्री हरिमोहन गर्ग ने अपने दिव्य स्वप्न को साकार रूप देने के लिए बनवाया था। 30 जुलाई सन्-2009 को आधार शिला रखने के बाद 12-13 वर्षों के अथक प्रयासों से यह सन् 2022 में पूर्ण हुआ।
            </p>
            <p>
              जैसलमेर पीला स्टोन व सफेद संगमरमर से, बिना लोहे के असंख्य कुशल कारीगरों की मदद से इस भव्य मंदिर का निर्माण करवाया गया है, जो कि भारतीय सनातन संस्कृति, वास्तुकला और कला का अनूठा संगम है। मंदिर में प्रवेश करते ही स्वयं को अलग सा प्रतीत होता है व असीम शांति व आनन्द का अनुभव होता है।
            </p>

            {/* विग्रह विशिष्ट पहचान बॉक्स */}
            <div className="p-8 bg-white rounded-[2rem] shadow-xl border border-orange-100 space-y-4">
              <div className="flex items-center gap-2 text-red-900 font-black uppercase text-sm">
                <Sparkles size={20} className="text-orange-500" />
                <span>ब्लू ग्रेनाइट से बनी दायीं ओर मुड़ी हुई सूंड वाली प्रतिमा</span>
              </div>
              <p className="text-sm text-gray-600">
                मूर्तिकार पद्म श्री पदक सम्मानित <strong>“श्री पेरेमल सतपति जी”</strong> (निवासी महाबली पुरम चेन्नई, तमिलनाडु) ने ब्लू ग्रेनाइट के दस टन वजनी विशाल पत्थर को एक वर्ष से अधिक समय तक अनवरत तराश कर प्रतिमा को साकार रूप दिया। चार फीट ऊँचे व तीन फीट चौड़े स्वर्णिम आभा लिए भगवान श्री महागणपति मनमोहक सिंहासन पर विराजित हैं। प्रतिमा की सूँड दाहिनी ओर झुकी हुई है और इसका वजन करीब चार टन है।
              </p>
              <p className="text-sm text-gray-600">
                भगवान का यह दिव्य सिंहासन दक्षिण अफ्रीका की विशेष कीमती घाना लकड़ी से, अक्षरधाम (गुजरात) के कारीगरों द्वारा अहमदाबाद में निर्मित व मुंबई के सिद्धि विनायक मंदिर से विशेष रूप से पूजा-अर्चना कर लाई गई शिलाओं से निर्मित है।
              </p>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="bg-red-950 p-6 rounded-3xl text-white shadow-xl">
                <span className="block text-4xl font-black mb-1 text-orange-400">12 वर्ष</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80 block font-bold">अथक निर्माण काल</span>
             </div>
             <div className="bg-orange-600 p-6 rounded-3xl text-white shadow-xl">
                <span className="block text-4xl font-black mb-1 text-white">4 टन</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80 block font-bold">विग्रह का वजन</span>
             </div>
             <div className="bg-orange-100 p-6 rounded-3xl text-red-950 border border-orange-200">
                <span className="block text-3xl font-black mb-1">4000 गज</span>
                <span className="text-[10px] uppercase tracking-widest block font-bold text-gray-600">कुल क्षेत्रफल</span>
             </div>
             <div className="bg-amber-50 p-6 rounded-3xl text-amber-900 border border-amber-200">
                <span className="block text-3xl font-black mb-1">दक्षिणावर्ती</span>
                <span className="text-[10px] uppercase tracking-widest block font-bold text-amber-800">ब्लू ग्रेनाइट सूंड</span>
             </div>
             <div className="col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-md text-center">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">विशेष आकर्षण</p>
                <p className="text-sm text-gray-700 font-medium">बुधवार को भक्तों का तांता & रात्रि में रंग-बिरंगी भव्य लाइटिंग</p>
             </div>
          </div>
        </div>

        {/* --- INTERACTIVE TIMELINE --- */}
        <div className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-black text-red-950 uppercase tracking-tight text-center">
            निर्माण यात्रा कालक्रम (Timeline)
          </h3>
          <div className="relative space-y-8 max-w-5xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-orange-200 hidden md:block"></div>
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-0 md:pl-20 group">
                <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-white border-4 border-orange-500 hidden md:block z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-orange-50/50 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-50 rounded-xl w-fit">
                      {item.icon}
                    </div>
                    <span className="text-sm font-black text-orange-600 uppercase tracking-wider">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-red-900 mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 10 KEY FEATURES GRID --- */}
        <div className="space-y-12 bg-orange-50/40 p-8 md:p-12 rounded-[3rem] border border-orange-100">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-red-950 uppercase tracking-tight">
              श्री वरद वल्लभा महागणपति मंदिर से जुड़ी मुख्य बातें
            </h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">मंदिर परिसर की विशेषताएँ, भोग पद्धति, स्थापत्य कला एवं अन्य सेवा अनुष्ठान</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((item) => (
              <div key={item.num} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-50 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-red-900 text-white flex items-center justify-center font-black shrink-0 shadow-md">
                  {item.num}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-red-950 text-base">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TempleHistory;