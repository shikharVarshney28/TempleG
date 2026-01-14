import React from 'react';
import { ShieldCheck, Sparkles, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  // Ganesha-specific qualities focusing on Wisdom and Success
  const qualities = [
    { 
      icon: <ShieldCheck className="text-red-700" size={24} />, 
      title: "Vighnaharta", 
      desc: "The supreme destroyer of all obstacles on the path of life." 
    },
    { 
      icon: <Sparkles className="text-orange-500" size={24} />, 
      title: "Siddhidata", 
      desc: "The divine bestower of success, prosperity, and fulfillment." 
    },
    { 
      icon: <Brain className="text-red-600" size={24} />, 
      title: "Buddhidata", 
      desc: "The fountainhead of intellect, wisdom, and creative power." 
    },
    { 
      icon: <Lightbulb className="text-orange-600" size={24} />, 
      title: "Pratham-Pujya", 
      desc: "The first worshipped deity who blesses every new beginning." 
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: SACRED VISUAL WITH DYNAMIC BORDER */}
        <div className="relative group">
          <div className="absolute -inset-5 bg-orange-100/50 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] lg:aspect-square">
            <img 
              src="../public/image.png" // Replace with actual Ganesha image
              alt="Shree Varadha Vallabha Mahaganpati" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-orange-400 font-black text-sm tracking-[0.4em] uppercase mb-2">Chalesar Dham</p>
              <h3 className="text-white font-black text-4xl tracking-tighter italic">Siddhi Vinayak Presence</h3>
            </div>
          </div>
        </div>

        {/* RIGHT: DIVINE CONTENT */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-red-700"></span>
              <span className="text-orange-600 font-black tracking-[0.3em] text-xs uppercase">Divine Introduction</span>
            </div>
            <h2 className="text-5xl md:text-5xl font-black text-red-900 tracking-tighter leading-[0.9]">
              MahaGanpati <br/> <span className="text-orange-500 italic">Lord of Wisdom</span>
            </h2>
            <div className="h-1.5 w-32 bg-red-800 rounded-full mt-2"></div>
          </div>

          {/* Sacred Sanskrit Shloka */}
          <div className="p-8 bg-orange-50/50 rounded-3xl border-l-8 border-orange-500">
            <p className="text-gray-800 text-xl leading-relaxed font-bold italic">
              "Gajananam Bhoota Ganadhi Sevitam, <br/> Kapittha Jambu Phala Sara Bhakshitam."
            </p>
            <p className="text-xs font-black text-gray-400 mt-4 uppercase tracking-widest">— Ganesha Pancharatnam</p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Lord Mahaganpati at Chalesar is the embodiment of the universe's cosmic energy. 
            Representing the perfect balance between strength and gentleness, he is 
            worshipped as <strong>Varadha Vallabha</strong>—the one who protects his 
            devotees and ensures that every auspicious task begins with his divine grace.
          </p>

          {/* ENHANCED ICON GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {qualities.map((q, i) => (
              <div key={i} className="group flex gap-5 p-6 rounded-3xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="mt-1 group-hover:scale-110 transition-transform">{q.icon}</div>
                <div>
                  <h4 className="font-black text-red-900 text-sm uppercase tracking-tight mb-1">{q.title}</h4>
                  <p className="text-xs text-gray-500 leading-snug font-medium">{q.desc}</p>
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