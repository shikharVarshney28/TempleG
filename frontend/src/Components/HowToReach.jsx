import React from 'react';
import { MapPin, Car, Train, Plane, Compass, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';

const HowToReach = () => {
  const [copied, setCopied] = React.useState(false);
  
  // छलेसर मंदिर का सटीक पता
  const templeAddress = "श्री वरद वल्लभा महागणपति मंदिर, छलेसर, एनएच-19 (आगरा-फिरोजाबाद हाईवे), आगरा, उत्तर प्रदेश - 282006";
  
  // अपडेटेड गूगल मैप्स ओरिजिनल नेविगेशन लिंक (भक्तों के लिए)
  const googleMapsLink = "https://maps.google.com/?q=Varad+Vallabh+Ganpati+Temple+Chalesar+Agra+Uttar+Pradesh+282006";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(templeAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // विभिन्न माध्यमों से पहुँचने के मार्ग
  const travelModes = [
    {
      title: "सड़क मार्ग द्वारा (By Road) - सबसे सुलभ विकल्प",
      icon: <Car className="text-orange-600" size={24} />,
      desc: "यह दिव्य मंदिर आगरा-फिरोजाबाद राष्ट्रीय राजमार्ग (NH-19 / पुराने NH-2) पर बिल्कुल मुख्य हाईवे पर स्थित है।",
      points: [
        "आगरा के मुख्य शहर, ताजमहल परिसर या आईएसबीटी (ISBT) बस टर्मिनल से मंदिर की कुल दूरी लगभग 12 से 15 किलोमीटर है।",
        "रामबाग चौराहे से कानपुर हाईवे की ओर बढ़ने पर करीब 6 किलोमीटर चलते ही छलेसर क्षेत्र में यह भव्य मंदिर दाहिनी ओर दिखाई देता है।",
        "यमुना एक्सप्रेस-वे (Yamuna Expressway) के मुख्य कट से पहले आगरा शहर की ओर आने वाले मार्ग पर महज 1 किलोमीटर की दूरी पर मंदिर स्थापित है।",
        "श्रद्धालु शहर के किसी भी कोने से ऑटो, प्राइवेट टैक्सी, ओला/उबर या JNNURM की स्थानीय बसों द्वारा छलेसर चौराहे तक बेहद सुगमता से पहुँच सकते हैं।"
      ]
    },
    {
      title: "रेल मार्ग द्वारा (By Train)",
      icon: <Train className="text-blue-700" size={24} />,
      desc: "आगरा शहर देश के सभी प्रमुख रेलवे नेटवर्कों से बेहद अच्छी तरह जुड़ा हुआ है, जहाँ नियमित ट्रेनें उपलब्ध हैं।",
      points: [
        "आगरा कैंट रेलवे स्टेशन (Agra Cantt - AGC): यह आगरा का मुख्य स्टेशन है। यहाँ से मंदिर की दूरी लगभग 18 किलोमीटर है। स्टेशन परिसर के बाहर से 24 घंटे प्रीपेड ऑटो, कैब या मुख्य हाईवे के लिए कनेक्टिंग वाहन आसानी से मिल जाते हैं।",
        "आगरा फोर्ट रेलवे स्टेशन (Agra Fort - AF): यह स्टेशन किला परिसर के पास है और यहाँ से मंदिर केवल 14 किलोमीटर दूर है। यहाँ से भी छलेसर और कानपुर हाईवे के लिए सीधे लोकल साधन उपलब्ध रहते हैं।",
        "टूंडला जंक्शन (Tundla Junction - TD): यदि आप हावड़ा-दिल्ली मुख्य लाइन से आ रहे हैं, तो टूंडला से भी मंदिर की दूरी केवल 15-16 किलोमीटर है, जहाँ से सीधे हाईवे की बसें उपलब्ध हैं।"
      ]
    },
    {
      title: "वायु मार्ग द्वारा (By Air)",
      icon: <Plane className="text-indigo-700" size={24} />,
      desc: "हवाई यात्रा के माध्यम से आने वाले दूर-दराज के श्रद्धालुओं के लिए निकटतम हवाई अड्डों का विवरण नीचे दिया गया है।",
      points: [
        "खेरिया हवाई अड्डा, आगरा (Agra Domestic Airport): यह एक घरेलू हवाई अड्डा है जो मंदिर परिसर से लगभग 22 किलोमीटर की दूरी पर स्थित है। यहाँ से सीधे कैब द्वारा आप 40 मिनट में मंदिर पहुँच सकते हैं।",
        "नोएडा अंतर्राष्ट्रीय हवाई अड्डा (Jewar Airport): जेवर में बन रहा यह भव्य एयरपोर्ट मंदिर से लगभग 140 किलोमीटर की दूरी पर है, जो यमुना एक्सप्रेसवे के माध्यम से सीधे आगरा से जुड़ा हुआ है।",
        "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा, नई दिल्ली (Delhi IGI Airport): यह वैश्विक हवाई अड्डा मंदिर से लगभग 220 किलोमीटर दूर है। दिल्ली से यमुना एक्सप्रेसवे के रास्ते केवल 3 घंटे की आरामदायक कार या वोल्वो बस यात्रा द्वारा छलेसर पहुँचा जा सकता है।"
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans bg-[#fffdfb]">
      
      {/* हेडर सेक्शन */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] shadow-sm">
          मार्गदर्शन एवं दिशा-निर्देश
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-950 mt-6 tracking-tighter leading-tight">
          श्री महागणपति मंदिर <span className="text-red-800 italic block md:inline">कैसे पहुँचें?</span>
        </h2>
        <p className="text-gray-800 mt-5 text-base md:text-lg leading-relaxed font-medium">
          श्री वरद वल्लभा महागणपति मंदिर (छलेसर) आगरा-कानपुर राष्ट्रीय राजमार्ग पर स्थित होने के कारण बेहद सुलभ है। अपनी यात्रा को सुगम बनाने के लिए नीचे दिए गए विस्तृत मार्गों और मानचित्र का उपयोग करें।
        </p>
        <div className="h-1.5 w-24 bg-orange-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* मुख्य ग्रिड: लेफ्ट में मार्ग विवरण, राइट में गूगल मैप्स */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT: यात्रा के माध्यम (7 कॉलम) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* एड्रेस कार्ड (कॉपी करने की सुविधा के साथ) */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-[2rem] border border-orange-100 relative overflow-hidden shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3.5 bg-red-900 text-white rounded-2xl mt-1 shadow-md shrink-0">
                <MapPin size={22} />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-gray-950 text-lg tracking-tight">मंदिर का आधिकारिक पता:</h4>
                <p className="text-base text-gray-900 mt-2 leading-relaxed font-semibold">{templeAddress}</p>
                
                <button 
                  onClick={handleCopyAddress}
                  className="mt-5 inline-flex items-center gap-2.5 text-xs font-black text-orange-800 bg-white hover:bg-orange-100/60 px-4 py-2.5 rounded-xl border border-orange-200 transition-all shadow-sm active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-green-600 font-bold" />
                      <span className="text-green-700">सफलतापूर्वक कॉपी हो गया!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>पूर्ण पता कॉपी करें</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* मार्ग विवरण लिस्ट */}
          <div className="space-y-8">
            {travelModes.map((mode, index) => (
              <div key={index} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-orange-50 rounded-2xl shrink-0">
                    {mode.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-950 tracking-tight">{mode.title}</h3>
                </div>
                <p className="text-base text-gray-900 font-bold mb-5 pl-1 border-l-2 border-orange-500/40 p-1">
                  {mode.desc}
                </p>
                
                <ul className="space-y-4 pl-1">
                  {mode.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-gray-800 leading-relaxed font-medium">
                      <ArrowRight size={16} className="text-orange-600 mt-1 shrink-0" />
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* प्रमुख लैंडमार्क नोट */}
          <div className="p-6 bg-red-50/80 rounded-2xl border border-red-100 flex items-start gap-4 shadow-sm">
            <Compass className="text-red-800 shrink-0 mt-0.5" size={24} />
            <p className="text-sm font-semibold text-gray-900 leading-relaxed">
              <span className="font-black text-red-950 text-base block mb-1">💡 महत्वपूर्ण लैंडमार्क नोट:</span> 
              यह पावन मंदिर मुख्य हाईवे पर स्थित प्रसिद्ध शैक्षणिक संस्थानों (Engineering Colleges) और छलेसर पुलिस चौकी के बिल्कुल समीप है। यदि मार्ग ढूंढने में कोई भी असुविधा हो, तो स्थानीय लोग इसे <span className="text-red-900 font-bold">"छलेसर वाले गणेश जी का मंदिर"</span> के नाम से जानते हैं।
            </p>
          </div>

        </div>

        {/* RIGHT: गूगल मैप्स इंटीग्रेशन (5 कॉलम) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-white p-5 rounded-[2.5rem] border border-gray-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)]">
            
            <div className="mb-4 px-2">
              <h4 className="font-black text-gray-950 text-base tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                लाइव लोकेशन मैप (Live Map)
              </h4>
            </div>

            {/* मैप कंटेनर - iFrame src को नए विशिष्ट खोज पते (Varad Vallabh Ganpati...) के साथ सिंक कर दिया गया है */}
            <div className="w-full h-[420px] rounded-[1.8rem] overflow-hidden bg-gray-50 border border-gray-200">
              <iframe
                title="Varad Vallabh Ganpati Temple Location Map"
                src="https://maps.google.com/maps?q=Varad%20Vallabh%20Ganpati%20Temple%20Chalesar%20Agra%20Uttar%20Pradesh%20282006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* मैप के नीचे नेविगेशन बटन */}
            <div className="mt-5 p-2 text-center space-y-2">
              <h5 className="font-black text-gray-950 text-base tracking-tight">सीधे नेविगेशन का उपयोग करें</h5>
              <p className="text-xs text-gray-700 font-medium pb-3">
                अपने मोबाइल या कार डैशबोर्ड पर सीधे लाइव रूट मैप और ट्रैफिक की स्थिति देखने के लिए नीचे दिए गए बटन पर क्लिक करें।
              </p>
              
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-sm font-black uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2.5 shadow-lg shadow-orange-600/20 active:scale-[0.99]"
              >
                <span>Google Maps में दिशा प्राप्त करें</span>
                <ExternalLink size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default HowToReach;