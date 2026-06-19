import React from 'react';
import { ShieldCheck, Sparkles, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  // बाप्पा के चार दिव्य गुण (हिंदी में)
  const qualities = [
    { 
      icon: <ShieldCheck className="text-red-700" size={24} />, 
      title: "विघ्नहर्ता", 
      desc: "जीवन की राह में आने वाली समस्त बाधाओं और संकटों का समूल नाश करने वाले।" 
    },
    { 
      icon: <Sparkles className="text-orange-500" size={24} />, 
      title: "सिद्धिदाता", 
      desc: "भक्तों को सफलता, समृद्धि, ऐश्वर्य और मनोवांछित फल प्रदान करने वाले।" 
    },
    { 
      icon: <Brain className="text-red-600" size={24} />, 
      title: "बुद्धिदाता", 
      desc: "ज्ञान, प्रखर बुद्धि, विवेक और रचनात्मक शक्तियों के परम स्रोत।" 
    },
    { 
      icon: <Lightbulb className="text-orange-600" size={24} />, 
      title: "प्रथम-पूज्य", 
      desc: "हर शुभ कार्य, अनुष्ठान और नई शुरुआत में सबसे पहले पूजे जाने वाले देव।" 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* LEFT: PHOTO CONTAINER - स्पेसिंग और अनुपात को संतुलित किया गया है */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-100/50 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 md:border-8 border-white aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]"> 
            <img 
              src="/image.png" 
              alt="श्री वरद वल्लभा महागणपति" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* दिव्य छाया ओवरले */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-orange-400 font-black text-xs tracking-[0.4em] uppercase mb-1">छलेसर धाम</p>
              <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter italic leading-none">
                वरद वल्लभ <br/> महागणपति उपस्थिति
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT: DIVINE CONTENT - अनचाहे खाली स्पेस को हटाया गया है */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-red-700"></span>
              <span className="text-orange-600 font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">दिव्य परिचय</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-red-900 tracking-tighter leading-none">
              महागणपति <br/> <span className="text-orange-500 italic block mt-1">ज्ञान और विवेक के देवता</span>
            </h2>
            <div className="h-1 w-24 bg-red-800 rounded-full"></div>
          </div>

          {/* पवित्र संस्कृत श्लोक */}
          <div className="p-6 md:p-8 bg-orange-50/50 rounded-3xl border-l-8 border-orange-500 shadow-sm">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-bold italic">
              "गजाननं भूतगणादिसेवितं, <br/> कपित्थजम्बूफलसारभक्षितम्।"
            </p>
            <p className="text-[10px] font-black text-gray-400 mt-3 uppercase tracking-[0.2em]">— गणेश पंचरत्नम</p>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            छलेसर में विराजमान भगवान महागणपति ब्रह्मांड की दिव्य ऊर्जा का साक्षात स्वरूप हैं। शक्ति और सौम्यता के अनूठे संतुलन को दर्शाते हुए, बाप्पा यहाँ <strong className="text-red-900">वरद वल्लभा</strong> के रूप में पूजे जाते हैं—जो सदैव अपने भक्तों की रक्षा करते हैं और यह सुनिश्चित करते हैं कि हर शुभ कार्य उनकी दिव्य कृपा से निर्विघ्न संपन्न हो।
          </p>

          {/* चार गुणों का सुंदर ग्रिड (Qualities) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="shrink-0 p-2.5 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                  {q.icon}
                </div>
                <div>
                  <h4 className="font-black text-red-900 text-xs uppercase tracking-wider mb-0.5">{q.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-tight font-medium">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;