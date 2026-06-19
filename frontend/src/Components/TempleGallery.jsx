import React, { useState } from 'react';

import { useData } from './DataContext'; 
import { urlFor } from '../sanityClient'; 
import { Sun, Play, X, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const TempleGallery = ({ limitPerCategory = null }) => {
  // बदलाव: अब डेटा सीधे ग्लोबल स्टोर से आ रहा है - 0 नेटवर्क कॉल!
  const { gallery, loading } = useData();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // श्रेणियों (Categories) का हिंदी रूपांतरण
  const categories = [
    { id: 'All', label: 'सभी चित्र' },
    { id: 'Ganesh Chaturthi', label: 'गणेश चतुर्थी' },
    { id: 'Sankashti Special', label: 'संकष्टी विशेष' },
    { id: 'Daily Abhishek', label: 'दैनिक अभिषेक' },
    { id: 'Temple Architecture', label: 'मंदिर वास्तुकला' },
    { id: 'Spiritual Events', label: 'आध्यात्मिक उत्सव' },
    { id: 'Bhandara (Prasad)', label: 'भंडारा (प्रसाद)' },
  ];

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-orange-50/10 rounded-3xl">
      <Sun className="animate-spin text-orange-500" size={48} />
      <p className="text-xs font-bold text-orange-800 uppercase tracking-widest">दिव्य पुरालेख खुल रहे हैं...</p>
    </div>
  );

  // यदि कोई डेटा न हो तो सुरक्षित एग्जिट
  if (!gallery || gallery.length === 0) return null;

  // सभी एल्बम के मीडिया को एक सिंगल एरे में फ्लैट करना और इमेज एसेट ऑब्जेक्ट को सुरक्षित रखना
  const allMedia = gallery.flatMap(album => 
    album.mediaList?.map(item => ({ 
      ...item, 
      albumTitle: album.title, 
      category: album.category 
    })) || []
  );

  // एक्टिव फ़िल्टर के आधार पर मीडिया को फ़िल्टर करना
  const filteredMedia = activeFilter === 'All' 
    ? allMedia 
    : allMedia.filter(m => m.category === activeFilter);

  // श्रेणियों के आधार पर ग्रुपिंग (ताकि 'All' टैब में अलग-अलग सेक्शन दिखें)
  const groupedMedia = filteredMedia.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 font-sans">
      
      {/* --- DIVINE HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Camera size={14} className="text-orange-600" />
            <span className="text-orange-600 font-black tracking-[0.2em] text-[9px] md:text-[10px] uppercase">विजुअल यात्रा</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-red-900 tracking-tighter uppercase leading-none">
            गैलरी <span className="text-orange-500 italic lowercase text-2xl md:text-4xl font-light">darshan</span>
          </h2>
        </div>
        
        {limitPerCategory && (
          <Link to="/gallery" className="w-full md:w-auto text-center group flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black tracking-widest hover:bg-red-900 transition-all shadow-lg900">
            संपूर्ण दिव्य दर्शन देखें
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {/* --- SACRED CATEGORY TABS --- */}
      <div className="flex overflow-x-auto scrollbar-hide gap-x-6 md:gap-x-10 border-b border-gray-100 mb-8 md:mb-12 pb-px -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`text-[10px] md:text-xs font-black transition-all relative pb-4 whitespace-nowrap uppercase tracking-widest flex-shrink-0 ${
              activeFilter === cat.id ? 'text-red-900' : 'text-gray-400 hover:text-red-600'
            }`}
          >
            {cat.label}
            {activeFilter === cat.id && (
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

          // वर्तमान अंग्रेजी कैटेगरी नाम का हिंदी लेबल ढूंढना (हेडर डिस्प्ले के लिए)
          const currentCat = categories.find(c => c.id === catName);
          const hindiHeader = currentCat ? currentCat.label : catName;

          return (
            <div key={catName} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {activeFilter === 'All' && (
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-[10px] md:text-[12px] font-black text-red-900/40 uppercase tracking-[0.3em] whitespace-nowrap">
                    {hindiHeader}
                  </h3>
                  <div className="h-px w-full bg-orange-100"></div>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {displayItems.map((item, index) => (
                  <MediaCard key={index} item={item} onClick={() => setSelectedMedia(item)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- LIGHTBOX (पॉपअप ओवरले) --- */}
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
               <span className="text-orange-500 font-black tracking-widest text-[9px] md:text-[10px] uppercase">
                 {categories.find(c => c.id === selectedMedia.category)?.label || selectedMedia.category}
               </span>
               <h4 className="text-white text-base md:text-xl font-bold tracking-tight">{selectedMedia.albumTitle}</h4>
            </div>

            <div className="flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10">
              {selectedMedia._type === 'image' || (selectedMedia.image && !selectedMedia.url?.endsWith('.mp4')) ? (
                /* लाइटबॉक्स में फुल एचडी ऑप्टिमाइज्ड इमेज */
                <img 
                  src={urlFor(selectedMedia.image || selectedMedia).width(1200).format('webp').url()} 
                  className="max-h-[75vh] md:max-h-[80vh] w-auto object-contain" 
                  alt="Sacred Darshan" 
                />
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
  // विजुअल टाइप चेक करना (वीडियो या इमेज)
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
        /* कार्ड ग्रिड के लिए ऑप्टिमाइज्ड इमेज थंबनेल (.width(500)) */
        <img 
          src={urlFor(item.image || item).width(500).height(625).format('webp').url()} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="Sacred Darshan Thumbnail" 
          loading="lazy"
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-8 flex flex-col justify-end">
          <p className="text-orange-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] mb-1 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">दिव्य छवि</p>
          <span className="text-white text-sm md:text-lg font-bold leading-tight transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.albumTitle}</span>
      </div>
    </div>
  );
};

export default TempleGallery;