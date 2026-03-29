import React from 'react';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const BoardOfDirectors = () => {
  // DIRECTORS DATA ARRAY - Easy to update in the future
  const directors = [
    {
      name: "Hari Mohan Garg",
      role: "Managing Director",
      image: "https://via.placeholder.com/400x500", // Replace with real photo
      education: "Industry Veteran since 1982",
      bio: "The visionary founder of NRL Group. Starting from the logistics industry in 1982, he built a strong foundation that allowed the group to expand into petroleum and the automobile sector. Under his leadership, NRL has become a respected brand in Western Uttar Pradesh.",
      linkedin: "#"
    },
    {
      name: "Rohit Garg",
      role: "Director",
      image: "https://via.placeholder.com/400x500", // Replace with real photo
      education: "Civil Engineer (Melbourne University), MBA (SIBM Pune)",
      bio: "A technical powerhouse with a global perspective. Rohit joined the group in 2012, successfully establishing the Mahindra Truck & Bus division before launching the Hyundai car dealership in 2014. He focuses on operational excellence and customer loyalty.",
      linkedin: "#"
    },
    {
      name: "Siddhant Garg",
      role: "Director",
      image: "https://via.placeholder.com/400x500", // Replace with real photo
      education: "Mechanical Engineer, Masters in Logistics (UK)",
      bio: "Bringing international supply chain expertise from Scotland to India. Siddhant holds the distinction of being the youngest Dealer Principal for Hyundai. He drives the group's innovation, manpower development, and high-tech infrastructure initiatives.",
      linkedin: "#"
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h4 className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs mb-4">Leadership Team</h4>
          <h2 className="text-5xl md:text-6xl font-black text-red-900 tracking-tighter leading-none">
            Board of <span className="text-orange-500 italic">Directors</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-medium">
            Our directors guide our businesses in achieving their strategic goals, ensuring that our organization continues to provide a platform for success.
          </p>
        </div>

        {/* DIRECTORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {directors.map((member, index) => (
            <div key={index} className="group">
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[4/5] mb-6 shadow-lg border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <a href={member.linkedin} className="p-3 bg-white text-blue-600 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-3 bg-white text-red-600 rounded-full shadow-xl hover:bg-red-600 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-3 px-2">
                <div>
                  <h3 className="text-2xl font-black text-red-900 tracking-tight leading-none uppercase">{member.name}</h3>
                  <p className="text-orange-600 font-bold text-sm mt-1 uppercase tracking-widest">{member.role}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <GraduationCap size={16} />
                  <span className="text-[11px] font-bold uppercase tracking-tight">{member.education}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CORPORATE FOOTER */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
           <p className="text-gray-300 font-black text-[10px] tracking-[0.5em] uppercase">Driving Excellence Since 1982 — NRL Group Agra</p>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;