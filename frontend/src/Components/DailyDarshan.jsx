import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { Sparkles, Flower2, Share2, Loader2 } from 'lucide-react';

const DailyDarshan = () => {
  const [darshan, setDarshan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDarshan = async () => {
      // Fetch the latest published darshan
      const query = `*[_type == "darshan"] | order(_createdAt desc)[0] {
        title,
        blessing,
        date,
        "imgUrl": darshanImage.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setDarshan(data);
      } catch (err) {
        console.error("Darshan fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDarshan();
  }, []);

  if (loading) return <div className="py-20 text-center"><Loader2 className="animate-spin inline text-orange-600" /></div>;
  if (!darshan) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Flower2 className="text-orange-500" size={20} />
          <span className="text-orange-600 font-black tracking-widest text-[10px] uppercase">Live from Sanctum</span>
        </div>
        <h2 className="text-4xl font-black text-red-950 uppercase tracking-tighter">Daily <span className="text-orange-600 italic">Darshan</span></h2>
        <p className="text-gray-400 text-xs font-bold mt-2 uppercase tracking-widest">
          {new Date(darshan.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* THE DIVINE FRAME */}
      <div className="relative group">
        {/* Decorative Borders */}
        <div className="absolute -inset-4 border border-orange-100 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
        
        <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-orange-50">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img 
              src={darshan.imgUrl} 
              alt="Daily Darshan" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            {/* Share Button */}
            <button 
              onClick={() => window.print()} // Placeholder for share logic
              className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-orange-600 transition-colors"
            >
              <Share2 size={20} />
            </button>
          </div>

          {/* Blessing Message */}
          <div className="p-8 text-center bg-orange-50/30 mt-4 rounded-3xl border border-orange-100/50">
            <Sparkles className="mx-auto text-orange-400 mb-3" size={24} />
            <p className="text-red-900 font-medium italic leading-relaxed text-lg">
              "{darshan.blessing}"
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-400 text-[10px] font-bold uppercase mt-10 tracking-[0.3em]">
        May Lord Ganesha Bless Your Day
      </p>
    </section>
  );
};

export default DailyDarshan;