import React from 'react'
import { CheckCircle2, ArrowRight, Flower2 } from 'lucide-react';

const Intro = () => {
  const features = [
    "Abode of Varadha Vallabha",
    "Giver of Success & Wisdom",
    "Ancient Siddhi Peeth Dham",
    "Center for Vedic Learning"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT SIDE: SACRED VISUAL --- */}
        <div className="relative group px-4 md:px-0">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 text-orange-100 hidden md:block">
            <Flower2 size={120} strokeWidth={1} />
          </div>
          
          {/* Saffron Decorative Frame */}
          <div className="absolute -inset-2 md:-inset-6 bg-orange-50 rounded-[2.5rem] -z-10 transform -rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
          
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border-[4px] md:border-[8px] border-white relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img 
                src="../public/image.png" 
                alt="Shree Varadha Vallabha Mahaganpati" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Sacred Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent"></div>
              
              {/* Image Label */}
              <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center px-4">
                <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-[9px] md:text-[11px] mb-2 block animate-pulse">
                  Siddhidata Vinayak
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-black tracking-tighter drop-shadow-2xl italic">
                  ॐ श्री वरद वल्लभा
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: DIVINE CONTENT --- */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <h4 className="text-orange-600 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs">
                A Sacred Beginning
              </h4>
            </div>
            
            <h2 className="text-4xl md:text-4xl font-black text-red-900 leading-[0.95] tracking-tighter">
              Shree Varadha Vallabha <br />
              <span className="text-orange-500 italic block mt-2">Mahaganapati Temple</span>
            </h2>
            
            <p className="text-gray-500 font-bold text-[20px] md:text-xs tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Chalesar, Agra (Uttar Pradesh)
            </p>
          </div>

          {/* Features Grid */}
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

          {/* Descriptive Quote */}
          <div className="relative pl-6 md:pl-10 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-700 via-orange-500 to-transparent rounded-full"></div>
            <p className="text-gray-600 leading-relaxed font-medium text-base md:text-xl italic">
              "The Mahaganpati Temple in Chalesar stands as a testament to the supreme grace of Vighnaharta. 
              The Lord grants the boons of prosperity and removes shadows of 
              ignorance from the hearts of all."
            </p>
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <button className="group relative flex items-center gap-6 bg-red-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase overflow-hidden shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
              <span className="relative z-10">Divine History</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro