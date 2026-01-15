import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { Sparkles, Flower2, Calendar, Sun } from 'lucide-react';

const DailyDarshan = () => {
  const [darshanData, setDarshanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "darshan"] | order(date desc)[0] {
      date,
      deities[] {
        deityName,
        blessing,
        "imgUrl": image.asset->url
      }
    }`;

    client.fetch(query)
      .then((data) => {
        setDarshanData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50/20">
      <Sun className="text-orange-500 animate-spin-slow" size={48} />
    </div>
  );

  return (
    <section className="bg-[#fdf8f1] min-h-screen pt-15 pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* SACRED HEADER */}
        <div className="text-center mb-20 relative">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-px w-12 bg-orange-300"></div>
            <Flower2 className="text-orange-600 animate-pulse" size={24} />
            <div className="h-px w-12 bg-orange-300"></div>
          </div>

          <h2 className="text-5xl md:text-5xl font-serif font-black text-red-900 tracking-tight leading-none mb-6">
            Daily <span className="text-orange-600 italic">Darshan</span>
          </h2>

          <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-lg border border-orange-100">
            <Calendar size={18} className="text-orange-600" />
            <span className="text-gray-800 font-bold tracking-widest uppercase text-sm">
              {new Date(darshanData.date).toLocaleDateString('en-IN', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
              })}
            </span>
          </div>
        </div>

        {/* MASONRY-STYLE OR UNIFORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {darshanData.deities?.map((item, index) => (
            <div key={index} className="flex flex-col group">

              {/* THE IMAGE FRAME */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-black aspect-[3/4.5] border-[12px] border-white ring-1 ring-orange-100">
                {/* Aura Glow Effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <img
                  src={item.imgUrl}
                  alt={item.deityName}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Bottom Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Deity Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-orange-400 font-black text-[10px] tracking-[0.4em] uppercase mb-2">Sacred Presence</p>
                  <h3 className="text-white text-3xl font-serif font-bold tracking-tight mb-1">
                    {item.deityName}
                  </h3>
                </div>
              </div>

              {/* BLESSING BOX - Detached for a modern look */}
              {item.blessing && (
                <div className="mt-[-2rem] mx-6 relative z-20 bg-white p-8 rounded-3xl shadow-xl border-t-4 border-orange-500 text-center">
                  <Sparkles className="text-orange-400 mx-auto mb-4" size={20} />
                  <p className="text-red-900 font-bold italic text-lg leading-relaxed">
                    "{item.blessing}"
                  </p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-100"></div>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyDarshan;