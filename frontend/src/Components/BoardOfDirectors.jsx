import React from 'react';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const BoardOfDirectors = () => {
  // निदेशकों का डेटा एरे
  const directors = [
    {
      id: "dir-1", // React key चेतावनी को हटाने के लिए यूनीक आईडी
      name: "हरी मोहन गर्ग",
      role: "प्रबंध निदेशक (Managing Director)",
      image: "https://via.placeholder.com/400x500", 
      education: "1982 से उद्योग जगत के अनुभवी",
      bio: "एनआरएल (NRL) ग्रुप के दूरदर्शी संस्थापक। वर्ष 1982 में लॉजिस्टिक्स उद्योग से शुरुआत करते हुए, उन्होंने एक मजबूत आधारशिला रखी, जिसने समूह को पेट्रोलियम और ऑटोमोबाइल क्षेत्र में विस्तार करने में सक्षम बनाया। उनके कुशल नेतृत्व में, NRL पश्चिमी उत्तर प्रदेश में एक अत्यंत प्रतिष्ठित ब्रांड बन चुका है।",
      linkedin: "#"
    },
    {
      id: "dir-2",
      name: "रोहित गर्ग",
      role: "निदेशक (Director)",
      image: "https://via.placeholder.com/400x500", 
      education: "सिविल इंजीनियर (मेलबर्न यूनिवर्सिटी), एमबीए (SIBM पुणे)",
      bio: "वैश्विक दृष्टिकोण से समृद्ध एक तकनीकी पावरहाउस। रोहित वर्ष 2012 में समूह से जुड़े और 2014 में हुंडई (Hyundai) कार डीलरशिप शुरू करने से पहले महिंद्रा ट्रक एंड बस डिवीजन को सफलतापूर्वक स्थापित किया। वह परिचालन उत्कृष्टता और ग्राहक निष्ठा पर विशेष ध्यान केंद्रित करते हैं।",
      linkedin: "#"
    },
    {
      id: "dir-3",
      name: "सिद्धांत गर्ग",
      role: "निदेशक (Director)",
      image: "https://via.placeholder.com/400x500", 
      education: "मैकेनिकल इंजीनियर, मास्टर्स इन लॉजिस्टिक्स (यूके)",
      bio: "स्कॉटलैंड से भारत तक अंतरराष्ट्रीय आपूर्ति श्रृंखला (Supply Chain) की विशेषज्ञता लाने वाले सिद्धांत को हुंडई के सबसे युवा डीलर प्रिंसिपल होने का गौरव प्राप्त है। वह समूह के नवाचार (Innovation), मानव संसाधन विकास और हाई-टेक बुनियादी ढांचे की पहलों को गति देते हैं।",
      linkedin: "#"
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h4 className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs mb-4">नेतृत्व टीम</h4>
          <h2 className="text-5xl md:text-6xl font-black text-red-900 tracking-tighter leading-none">
            निदेशक <span className="text-orange-500 italic">मंडल</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-medium">
            हमारे निदेशक रणनीतिक लक्ष्यों को प्राप्त करने में हमारे व्यवसायों का मार्गदर्शन करते हैं, यह सुनिश्चित करते हुए कि हमारा संगठन सफलता के लिए एक मजबूत मंच प्रदान करता रहे।
          </p>
        </div>

        {/* DIRECTORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {directors.map((member) => (
            <div key={member.id} className="group">
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[4/5] mb-6 shadow-lg border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* सोशल मीडिया ओवरले */}
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
                  {/* त्रुटि सुधार: यहाँ वापस सही Lucide आइकॉन GraduationCap लगा दिया है */}
                  <GraduationCap size={16} className="text-gray-400 shrink-0" />
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
           <p className="text-gray-300 font-black text-[10px] tracking-[0.5em] uppercase">1982 से निरंतर उत्कृष्टता की ओर — एनआरएल ग्रुप आगरा</p>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;