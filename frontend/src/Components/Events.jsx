import React from 'react';
import { useData } from './DataContext'; // अपने पाथ के अनुसार बदलें
import { Calendar, MapPin, Info, Sparkles, Sun } from 'lucide-react';

const Events = () => {
  const { events, loading } = useData();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffcf9]">
      <Sun className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 bg-[#fffcf9] font-sans antialiased">
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full mb-4">
          <Sparkles size={14} className="text-orange-500" />
          <span className="text-orange-700 font-bold text-xs tracking-wider">पवित्र कैलेंडर</span>
        </div>
        {/* FIXED: Reduced from text-8xl to text-4xl/text-5xl for perfect premium balance */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-red-950 leading-tight">
          मंदिर के <span className="text-orange-600">दिव्य उत्सव</span>
        </h1>
        <div className="w-16 h-1 bg-orange-200 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* --- UPCOMING & ONGOING SECTION --- */}
      <div className="mb-24">
        <SectionHeader title="आगामी एवं वर्तमान उत्सव" color="bg-green-600" />
        
        {events?.upcoming?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.upcoming.map(event => (
              <EventCard key={event._id} event={event} borderColor="border-green-100" status="सक्रिय" />
            ))}
          </div>
        ) : (
          <EmptyState message="वर्तमान में मंदिर परिसर में शांति का वातावरण है। आगामी त्योहारों और उत्सवों के विवरण के लिए जल्द ही यहाँ दोबारा देखें।" />
        )}
      </div>

      {/* --- PAST EVENTS SECTION --- */}
      {events?.past?.length > 0 && (
        <div className="pt-16 border-t border-orange-100">
          <SectionHeader title="बीते हुए उत्सवों की स्मृतियाँ" color="bg-red-700" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            {events.past.map(event => (
              <EventCard key={event._id} event={event} borderColor="border-red-100" status="सम्पन्न" isPast />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

/* --- SUB-COMPONENTS FOR CLEANER CODE --- */

const SectionHeader = ({ title, color }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className={`h-6 w-1 ${color} rounded-full`}></div>
    <h2 className="text-xl md:text-2xl font-extrabold text-red-950 leading-tight">{title}</h2>
  </div>
);

const EmptyState = ({ message }) => (
  <div className="bg-white border border-dashed border-orange-200 p-12 rounded-[2.5rem] text-center max-w-2xl mx-auto shadow-sm">
    <Info className="mx-auto text-orange-200 mb-4" size={40} />
    <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">{message}</p>
  </div>
);

const EventCard = ({ event, borderColor, status, isPast }) => (
  <div className={`group flex flex-col border bg-white rounded-[2rem] overflow-hidden shadow-sm transition-all duration-500 ${borderColor} ${!isPast ? 'hover:shadow-xl hover:-translate-y-2' : ''}`}>
    
    {/* IMAGE SECTION */}
    <div className="relative h-56 overflow-hidden">
      <img 
        src={event.imgUrl || 'https://via.placeholder.com/800x600'} 
        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" 
        alt={event.title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-transparent opacity-50" />
      
      {/* STATUS BADGE */}
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-wide shadow-md ${isPast ? 'bg-gray-600' : 'bg-green-600'}`}>
        {status}
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="p-6 flex-grow flex flex-col">
      {/* FIXED: Removed uppercase, changed from text-2xl font-black to text-lg font-bold / tracking-normal to support both EN and HI beautifully */}
      <h3 className={`text-lg md:text-xl font-bold leading-snug mb-3 tracking-normal line-clamp-2 ${isPast ? 'text-gray-500' : 'text-red-950'}`}>
        {event.title}
      </h3>
      
      {/* PURPOSE BOX */}
      <div className="mb-6 relative flex-grow">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-100 rounded-full"></div>
        {/* FIXED: Reduced text size to text-xs/sm and weight to normal for soft look */}
        <p className="text-gray-500 text-xs md:text-sm font-medium italic leading-relaxed pl-3 line-clamp-3">
          "{event.purpose || 'भक्तों के कल्याण, आध्यात्मिक उन्नति और दिव्य आशीर्वाद प्राप्त करने हेतु एक सामूहिक आयोजन।'}"
        </p>
      </div>

      {/* METADATA */}
      <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-orange-50 rounded-lg">
            <Calendar size={14} className="text-orange-600" />
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-gray-400 tracking-wide">तिथि</p>
            <p className="text-xs font-bold text-gray-800 leading-tight truncate">
              {new Date(event.startTime).toLocaleDateString('hi-IN', { day: '2-digit', month: 'short' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-red-50 rounded-lg">
            <MapPin size={14} className="text-red-700" />
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-gray-400 tracking-wide">स्थान</p>
            <p className="text-xs font-bold text-gray-800 truncate leading-tight">
              {event.venue || 'मुख्य मंदिर'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Events;