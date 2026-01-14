import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { Calendar, MapPin, Clock, Loader2, History, Info, Sparkles } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState({ upcoming: [], past: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const query = `{
        "upcoming": *[_type == "event" && (startTime >= now() || (startTime <= now() && endTime >= now()))] | order(startTime asc) {
          ..., "imgUrl": image.asset->url
        },
        "past": *[_type == "event" && endTime < now()] | order(endTime desc)[0...10] {
          ..., "imgUrl": image.asset->url
        }
      }`;

      try {
        const data = await client.fetch(query);
        setEvents(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-40">
      <Loader2 className="animate-spin text-orange-600 mb-4" size={42} />
      <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">Fetching Divine Gatherings...</p>
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 bg-[#fffcf9]">
      {/* HEADER SECTION */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
          <Sparkles size={16} className="text-orange-500" />
          <span className="text-orange-700 font-black text-[10px] uppercase tracking-[0.2em]">Sacred Calendar</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-red-950 uppercase tracking-tighter leading-none">
          Temple <span className="text-orange-600 italic">Gatherings</span>
        </h1>
        <div className="w-24 h-1 bg-orange-200 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* UPCOMING & ONGOING SECTION */}
      <div className="mb-32">
        <SectionHeader title="Upcoming Celebrations" color="bg-green-600" />
        
        {events.upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {events.upcoming.map(event => (
              <EventCard key={event._id} event={event} borderColor="border-green-100" status="Active" />
            ))}
          </div>
        ) : (
          <EmptyState message="The temple is currently peaceful. Check back soon for upcoming festivals." />
        )}
      </div>

      {/* PAST EVENTS SECTION */}
      {events.past.length > 0 && (
        <div className="pt-20 border-t border-orange-100">
          <SectionHeader title="Recent Memoirs" color="bg-red-700" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-75 grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            {events.past.map(event => (
              <EventCard key={event._id} event={event} borderColor="border-red-100" status="Concluded" isPast />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

/* --- SUB-COMPONENTS FOR CLEANER CODE --- */

const SectionHeader = ({ title, color }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className={`h-8 w-1.5 ${color} rounded-full`}></div>
    <h2 className="text-2xl font-black text-red-950 uppercase tracking-tighter">{title}</h2>
  </div>
);

const EmptyState = ({ message }) => (
  <div className="bg-white border-2 border-dashed border-orange-100 p-20 rounded-[3rem] text-center max-w-2xl mx-auto shadow-sm">
    <Info className="mx-auto text-orange-200 mb-6" size={48} />
    <p className="text-gray-500 font-medium italic text-lg leading-relaxed">{message}</p>
  </div>
);

const EventCard = ({ event, borderColor, status, isPast }) => (
  <div className={`group flex flex-col border-lg rounded-[2.5rem] overflow-hidden ${borderColor} transition-all duration-500 ${!isPast ? 'hover:shadow-2xl hover:-translate-y-3' : 'hover:opacity-100'}`}>
    
    {/* IMAGE WITH DYNAMIC OVERLAY */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={event.imgUrl || 'https://via.placeholder.com/800x600'} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
        alt={event.title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent opacity-60" />
      
      {/* STATUS BADGE */}
      <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[9px] font-black text-white uppercase tracking-widest shadow-lg ${isPast ? 'bg-red-800' : 'bg-green-600 animate-pulse'}`}>
        {status}
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="p-8 flex-grow flex flex-col">
      <h3 className={`text-2xl font-black uppercase leading-none tracking-tighter mb-4 ${isPast ? 'text-gray-500' : 'text-red-950'}`}>
        {event.title}
      </h3>
      
      {/* PURPOSE BOX - Decided by Priest */}
      <div className="mb-8 relative">
        <div className="absolute -left-3 top-0 bottom-0 w-1 bg-orange-100 rounded-full"></div>
        <p className="text-gray-500 text-sm italic leading-relaxed pl-4">
          "{event.purpose || 'A divine gathering for the community to seek blessings and spiritual growth.'}"
        </p>
      </div>

      {/* METADATA */}
      <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <Calendar size={16} className="text-orange-600" />
          </div>
          <div>
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Date</p>
            <p className="text-[11px] font-bold text-gray-800">
              {new Date(event.startTime).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <MapPin size={16} className="text-red-700" />
          </div>
          <div>
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Venue</p>
            <p className="text-[11px] font-bold text-gray-800 truncate max-w-[80px]">
              {event.venue || 'Temple'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Events;