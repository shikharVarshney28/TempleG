import React from 'react';
import { History, Target, Hammer, Award, Milestone } from 'lucide-react';

const TempleHistory = () => {
  const timeline = [
    {
      year: "The Beginning",
      title: "12 Years of Sadhana",
      desc: "A journey of faith that spanned over a decade of tireless spiritual practice and architectural planning.",
      icon: <History className="text-orange-600" />
    },
    {
      year: "The Crafting",
      title: "Padma Shri Craftsmanship",
      desc: "Master sculptor Perumal Sthapathi spent one entire year carving the rare Ganesha idol from a single blue stone block.",
      icon: <Award className="text-red-700" />
    },
    {
      year: "The Structure",
      title: "South Indian Architecture",
      desc: "The temple follows the majestic Dravidian octagonal style, creating a unique spiritual landmark in Agra.",
      icon: <Hammer className="text-orange-600" />
    },
    {
      year: "April 2022",
      title: "Pran Pratishtha",
      desc: "The grand 3-day consecration ceremony from April 26-28 marked the opening of the temple for devotees.",
      icon: <Milestone className="text-red-700" />
    }
  ];

  return (
    <section className="bg-orange-50/30 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs mb-4">The Legacy</h4>
            <h2 className="text-5xl md:text-7xl font-black text-red-900 tracking-tighter leading-none">
              History & <span className="text-orange-500 italic">Motivation</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center animate-spin-slow">
                <Target className="text-orange-400" size={32} />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: THE STORY CONTENT */}
          <div className="space-y-12">
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-bold text-red-900 mb-6">
                The Varadha Vallabha Mahaganpati Temple at Chalesar is not just a structure, but a testament to a 12-year spiritual journey.
              </p>
              <p>
                Driven by the motivation to bring authentic South Indian temple traditions to the heart of North India, the founders envisioned a sanctuary where the "Vighnaharta" (Destroyer of Obstacles) could be worshipped in His most rare and powerful form.
              </p>
              <div className="p-8 bg-white rounded-3xl border-r-8 border-red-700 shadow-xl mt-8">
                <h4 className="font-black text-red-900 mb-2 uppercase text-sm">Key Specification</h4>
                <p className="text-gray-600 text-sm">
                  The 3-ton idol is 4 feet high and was so massive it required a heavy-duty crane for its sacred placement within the Octagonal Sanctum.
                </p>
              </div>
            </div>

            {/* STATS MINI GRID */}
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-red-900 p-6 rounded-2xl text-white">
                  <span className="block text-4xl font-black mb-1">12 Yrs</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Construction Period</span>
               </div>
               <div className="bg-orange-500 p-6 rounded-2xl text-white">
                  <span className="block text-4xl font-black mb-1">3 Tons</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Weight of Idol</span>
               </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE TIMELINE */}
          <div className="relative space-y-8">
            {/* Timeline Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-orange-200 hidden md:block"></div>
            
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-0 md:pl-20 group">
                {/* Timeline Node */}
                <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-white border-4 border-orange-500 hidden md:block z-10 group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-orange-50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-50 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black text-orange-500 uppercase tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-red-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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