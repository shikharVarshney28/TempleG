import React from 'react';
import { Clock, Sun, Moon, Utensils, DoorClosed, Coffee, Shield, MapPin, Heart, ArrowRight, Flower2 } from 'lucide-react';

const TempleInfo = () => {
  // Ganesha-specific development goals
  const developmentGoals = [
    { 
      title: "Siddhi Sthal Development", 
      desc: "Creating specialized meditation zones for devotees to connect with the wisdom of Vigneshwara.", 
      icon: <Flower2 size={18}/> 
    },
    { 
      title: "Prasad Distribution", 
      desc: "Developing modern, hygienic kitchens for the daily distribution of Mahaprasad and Modaks.", 
      icon: <Utensils size={18}/> 
    },
    { 
      title: "Pilgrim Comfort", 
      desc: "Expanding the Chalesar complex to include water-cooled resting areas for peak Agra summers.", 
      icon: <MapPin size={18}/> 
    },
  ];

  const schedule = [
    { time: "05:30 AM", event: "Mangala Aarti", icon: <Sun className="text-orange-500" /> },
    { time: "08:00 AM", event: "Panchamrut Abhishek", icon: <Coffee className="text-blue-500" /> },
    { time: "12:00 PM", event: "Rajbhog Offering", icon: <Utensils className="text-red-500" /> },
    { time: "07:00 PM", event: "Sandhya Mahapuja", icon: <Moon className="text-indigo-500" /> },
    { time: "09:30 PM", event: "Shayan Aarti", icon: <DoorClosed className="text-gray-700" /> },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: The Glory of Mahaganpati */}
        <div className="lg:col-span-7 space-y-10">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">
              Siddhi Vinayak Presence
            </span>
            <h2 className="text-5xl font-black text-gray-900 mt-6 leading-none tracking-tighter">
              The Remover of <span className="text-red-700 italic">Obstacles</span>
            </h2>
            <div className="h-2 w-24 bg-orange-500 rounded-full mt-4"></div>
            
            <div className="space-y-6 mt-8">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                At the Shree Varadha Vallabha Mahaganpati Temple in Chalesar, Lord Ganesha resides as the supreme giver of boons (Varadha) and the beloved of his devotees (Vallabha). 
              </p>
              <p className="text-gray-500 leading-relaxed border-l-4 border-red-100 pl-6 italic">
                "Vakratunda Mahakaya, Surya Koti Samaprabha..." <br/>
                Every corner of this sanctuary is designed to invoke the intellect (Buddhi) and success (Siddhi) that Ganpati Bappa bestows upon his followers.
              </p>
            </div>
          </div>

          {/* Development Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentGoals.map((goal, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:border-orange-200 transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {goal.icon}
                </div>
                <h4 className="font-black text-gray-900 uppercase text-sm tracking-tight mb-2">{goal.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Rituals Sidebar */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="bg-[#1e1e1e] text-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Sacred Om Background Pattern */}
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <h1 className="text-[10rem] font-black italic">ॐ</h1>
              </div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-3xl font-black tracking-tight mb-2">Daily Darshan</h3>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">Rituals of Chalesar Dham</p>
                </div>

                <div className="space-y-4">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-red-900/30 rounded-xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-black text-white uppercase tracking-tight">{item.event}</p>
                          <p className="text-xs text-gray-400 font-medium">{item.time}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                    <Heart className="text-orange-500 animate-pulse" fill="currentColor" />
                    <p className="text-[11px] font-bold text-gray-300 leading-tight">
                      Note: Special Maha-Abhishek is performed every <span className="text-orange-500 underline uppercase">Sankashti Chaturthi</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TempleInfo;