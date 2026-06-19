import React from 'react'
import { CheckCircle2, ArrowRight, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const Intro = () => {
  // बाप्पा की महिमा और विशेषताएं (हिंदी में)
  const features = [
    "वरद वल्लभा का पावन धाम",
    "सफलता एवं बुद्धिमत्ता के दाता",
    "प्राचीन सिद्धि पीठ धाम",
    "वैदिक शिक्षा एवं संस्कृति का केंद्र"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT SIDE: SACRED VISUAL (पवित्र विग्रह चित्र) --- */}
        <div className="relative group px-4 md:px-0">
          {/* सजावटी बैकग्राउंड एलिमेंट */}
          <div className="absolute -top-10 -left-10 text-orange-100 hidden md:block">
            <Flower2 size={120} strokeWidth={1} />
          </div>
          
          {/* केसरिया डेकोरेटिव फ्रेम */}
          <div className="absolute -inset-2 md:-inset-6 bg-orange-50 rounded-[2.5rem] -z-10 transform -rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
          
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border-[4px] md:border-[8px] border-white relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img 
                src="/image.png" 
                alt="श्री वरद वल्लभा महागणपति" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* दिव्य शैडो ओवरले */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent"></div>
              
              {/* इमेज के ऊपर का लेबल */}
              <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center px-4">
                <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-[9px] md:text-[11px] mb-2 block animate-pulse">
                  सिद्धिदाता विनायक
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-black tracking-tighter drop-shadow-2xl italic">
                  ॐ श्री वरद वल्लभा
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: DIVINE CONTENT (दिव्य विवरण) --- */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <h4 className="text-orange-600 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs">
                एक पावन शुरुआत
              </h4>
            </div>
            
            <h2 className="text-4xl md:text-4xl font-black text-red-900 leading-[0.95] tracking-tighter">
              श्री वरद वल्लभा <br />
              <span className="text-orange-500 italic block mt-2">महागणपति मंदिर</span>
            </h2>
            
            <p className="text-gray-500 font-bold text-[20px] md:text-xs tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              छलेसर, आगरा (उत्तर प्रदेश)
            </p>
          </div>

          {/* मुख्य विशेषताएं ग्रिड */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group/item">
                <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                <span className="text-gray-800 font-extrabold text-[11px] md:text-xs uppercase tracking-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* आध्यात्मिक संदेश कोट */}
          <div className="relative pl-6 md:pl-10 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-700 via-orange-500 to-transparent rounded-full"></div>
            <p className="text-gray-600 leading-relaxed font-medium text-base md:text-xl italic">
              "छलेसर धाम का यह महागणपति मंदिर विघ्नहर्ता की असीम कृपा का साक्षात प्रमाण है। बाप्पा यहाँ आने वाले सभी भक्तों को सुख-समृद्धि का वरदान देते हैं और उनके जीवन से अज्ञानता के अंधकार को दूर करते हैं।"
            </p>
          </div>

          {/* इतिहास बटन (Action Button) */}
          <Link to="/history" className="relative z-10">
          <div className="pt-4">
            <button className="group relative flex items-center gap-6 bg-red-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase overflow-hidden shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
             
                 <span className="relative z-10">दिव्य इतिहास देखें</span>
              
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
          </Link>
        </div>
        

      </div>
    </section>
  )
}

export default Intro