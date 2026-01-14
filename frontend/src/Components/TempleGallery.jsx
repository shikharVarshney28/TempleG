import React, { useState, useEffect } from 'react';
import { client } from '../sanityClient';
import { Loader2, Play, X, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const TempleGallery = ({ limitPerCategory = null }) => {
  const [albums, setAlbums] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    'All', 
    'Ganesh Chaturthi', 
    'Sankashti Special', 
    'Daily Abhishek', 
    'Temple Architecture', 
    'Spiritual Events', 
    'Bhandara (Prasad)', 
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "gallery"] | order(_createdAt desc) {
          _id, title, category, 
          mediaList[] { _type, "url": asset->url }
        }`;
        const data = await client.fetch(query);
        setAlbums(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const allMedia = albums.flatMap(album => 
    album.mediaList?.map(item => ({ 
      ...item, 
      albumTitle: album.title, 
      category: album.category 
    })) || []
  );

  const filteredMedia = activeFilter === 'All' 
    ? allMedia 
    : allMedia.filter(m => m.category === activeFilter);

  const groupedMedia = filteredMedia.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 space-y-4">
      <Loader2 className="animate-spin text-orange-600" size={48} />
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Opening Divine Archives...</p>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 font-sans">
      {/* --- DIVINE HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Camera size={14} className="text-orange-600" />
            <span className="text-orange-600 font-black tracking-[0.2em] text-[9px] md:text-[10px] uppercase">Visual Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-red-900 tracking-tighter uppercase leading-none">
            गैलरी <span className="text-orange-500 italic lowercase text-2xl md:text-4xl font-light">darshan</span>
          </h2>
        </div>
        
        {limitPerCategory && (
          <Link to="/gallery" className="w-full md:w-auto text-center group flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black tracking-widest hover:bg-red-900 transition-all shadow-lg">
            VIEW ALL SACRED MEDIA 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {/* --- SACRED CATEGORY TABS --- */}
      {/* Added scrollbar-hide and improved padding for mobile touch swipe */}
      <div className="flex overflow-x-auto scrollbar-hide gap-x-6 md:gap-x-10 border-b border-gray-100 mb-8 md:mb-12 pb-px -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-[10px] md:text-xs font-black transition-all relative pb-4 whitespace-nowrap uppercase tracking-widest flex-shrink-0 ${
              activeFilter === cat ? 'text-red-900' : 'text-gray-400 hover:text-red-600'
            }`}
          >
            {cat === 'All' ? 'सभी चित्र' : cat}
            {activeFilter === cat && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-orange-500 rounded-full animate-in fade-in slide-in-from-left-2 duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* --- GRID --- */}
      <div className="space-y-12 md:space-y-16">
        {Object.keys(groupedMedia).map((catName) => {
          const displayItems = limitPerCategory 
            ? groupedMedia[catName].slice(0, limitPerCategory) 
            : groupedMedia[catName];

          return (
            <div key={catName} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {activeFilter === 'All' && (
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-[9px] md:text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] whitespace-nowrap">{catName}</h3>
                  <div className="h-px w-full bg-gray-100"></div>
                </div>
              )}
              
              {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {displayItems.map((item, index) => (
                  <MediaCard key={index} item={item} onClick={() => setSelectedMedia(item)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- LIGHTBOX --- */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 md:bg-black/98 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center p-4 md:p-6" 
          onClick={() => setSelectedMedia(null)}
        >
          <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110]">
            <X size={32} md:size={48} strokeWidth={1.5} />
          </button>
          
          <div className="max-w-5xl w-full relative animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <div className="absolute -top-10 md:-top-12 left-0 px-2">
               <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase">{selectedMedia.category}</span>
               <h4 className="text-white text-base md:text-xl font-bold tracking-tight">{selectedMedia.albumTitle}</h4>
            </div>

            <div className="flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10">
              {selectedMedia._type === 'image' || !selectedMedia.url.endsWith('.mp4') ? (
                <img src={selectedMedia.url} className="max-h-[75vh] md:max-h-[80vh] w-auto object-contain" alt="Sacred" />
              ) : (
                <video src={selectedMedia.url} controls autoPlay className="max-h-[75vh] md:max-h-[80vh] w-full" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const MediaCard = ({ item, onClick }) => {
  const isVideo = item._type === 'file' || item.url?.toLowerCase().endsWith('.mp4');
  return (
    <div 
      onClick={onClick} 
      className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gray-50 aspect-[4/5] shadow-sm cursor-zoom-in transition-all active:scale-95 md:active:scale-100 hover:shadow-xl md:hover:-translate-y-2"
    >
      {isVideo ? (
        <div className="w-full h-full bg-black relative">
          <video src={item.url} className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity" muted preload="metadata" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
            <Play className="text-white fill-white ml-0.5 md:ml-1" size={20} md:size={24} />
          </div>
        </div>
      ) : (
        <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sacred" />
      )}
      
      {/* Overlay - visible on hover for desktop, simplified for mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-8 flex flex-col justify-end">
          <p className="text-orange-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] mb-1 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Divine Capture</p>
          <span className="text-white text-sm md:text-lg font-bold leading-tight transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.albumTitle}</span>
      </div>
    </div>
  );
};

export default TempleGallery;