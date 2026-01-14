import React from 'react';
import { Gift, Heart, Eye, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    // {
    //   title: "Savamani Booking",
    //   desc: "Offer sacred prasad to the deity through our verified booking system.",
    //   icon: <Utensils className="w-10 h-10 text-orange-600" />,
    //   bgColor: "bg-white",
    //   textColor: "text-orange-700",
    //   btnColor: "text-orange-600"
    // },
    {
      title: "Darshan Labh",
      desc: "Experience the divine presence with real-time virtual darshan services.",
      icon: <Eye className="w-10 h-10 text-white" />,
      bgColor: "bg-[#7c434f]", // Deep Plum/Maroon
      textColor: "text-white",
      btnColor: "text-orange-200",
      link:"/ddarshan"
    },
    // {
    //   title: "Public Service",
    //   desc: "Join our mission for social welfare and humanitarian causes.",
    //   icon: <Heart className="w-10 h-10 text-red-600" />,
    //   bgColor: "bg-white",
    //   textColor: "text-red-700",
    //   btnColor: "text-red-600"
    // },
    {
      title: "Donations",
      desc: "Contribute to the temple's development and charitable activities.",
      icon: <Gift className="w-10 h-10 text-white" />,
      bgColor: "bg-[#e53935]", // Vibrant Red
      textColor: "text-white",
      btnColor: "text-white/80",
      link : "/donation"
    }
  ];

  return (
    <section className="bg-[#2d1b15] py-20 px-6"> {/* Dark textured background */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center`}
            >
              {/* Icon Container with subtle glow */}
              <div className="mb-6 p-4 rounded-full bg-opacity-10 bg-gray-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className={`text-xl font-black mb-3 uppercase tracking-tight ${service.textColor}`}>
                {service.title}
              </h3>

              <p className={`text-sm mb-6 ${service.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
                {service.desc}
              </p>

              <Link to={service.link} className={`mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${service.btnColor} group-hover:gap-3 transition-all`}>
                Learn More 
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;