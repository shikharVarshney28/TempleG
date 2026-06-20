import React from 'react';
import { Linkedin, Mail, GraduationCap, Award, ShieldCheck, Heart } from 'lucide-react';

const BoardOfDirectors = () => {
  // केवल श्री हरी मोहन गर्ग जी का विस्तृत डेटा
  const directorData = {
    name: "श्री हरी मोहन गर्ग",
    role: "संस्थापक एवं प्रबंध निदेशक (NRL Group) | मुख्य न्यासी (Managing Trustee)",
    image: "https://via.placeholder.com/500x650", // यहाँ उनकी मूल तस्वीर का पाथ आ जाएगा
    experience: "1982 से उद्योग जगत एवं सामाजिक सरोकारों के प्रणेता (44+ वर्षों का समृद्ध अनुभव)",
    linkedin: "#",
    email: "mailto:info@nrlgroup.in" // उदाहरण के लिए ईमेल लिंक
  };

  return (
    <section className="bg-[#fffdfb] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] shadow-sm">
            नेतृत्व एवं प्रेरणा
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-red-950 mt-6 tracking-tighter leading-tight">
            मार्गदर्शक <span className="text-orange-600 italic">मण्डल</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 rounded-full mx-auto mt-5"></div>
        </div>

        {/* MAIN PROFILE CONTAINER: Split Layout (Image Left, Premium Content Right) */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: IMAGE COLUMN (5 Columns) */}
          <div className="lg:col-span-5 w-full h-full min-h-[400px] lg:min-h-[580px] relative group overflow-hidden bg-gray-50">
            <img 
              src={directorData.image} 
              alt={directorData.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-102"
            />
            
            {/* सोशल मीडिया फ्लोटिंग बटन्स */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-10">
              <a 
                href={directorData.linkedin} 
                className="p-3.5 bg-white text-blue-600 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={directorData.email} 
                className="p-3.5 bg-white text-red-700 rounded-full shadow-xl hover:bg-red-700 hover:text-white transition-all transform hover:-translate-y-1"
                title="Contact Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* इमेज पर एक हल्का ग्रेडिएंट ओवरले */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* RIGHT: TEXT CONTENT COLUMN (7 Columns) */}
          <div className="lg:col-span-7 p-8 lg:p-12 space-y-6">
            
            {/* नाम और पद */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-red-950 tracking-tight leading-none mb-3">
                {directorData.name}
              </h3>
              <p className="text-orange-600 font-extrabold text-sm md:text-base uppercase tracking-wider">
                {directorData.role}
              </p>
            </div>

            {/* अनुभव / क्रेडेंशियल बार */}
            <div className="flex items-center gap-3 py-3 px-4 bg-orange-50/60 border border-orange-100 rounded-xl">
              <GraduationCap size={20} className="text-orange-700 shrink-0" />
              <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight">
                {directorData.experience}
              </span>
            </div>

            {/* विस्तृत जीवन परिचय (Rich Rich Content for Light Background) */}
            <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
              <p>
                श्री हरी मोहन गर्ग जी एनआरएल (NRL) ग्रुप के दूरदर्शी संस्थापक और प्रबंध निदेशक हैं। वर्ष 1982 में लॉजिस्टिक्स उद्योग से एक दृढ़ संकल्प के साथ शुरुआत करते हुए, उन्होंने व्यापार जगत में एक मजबूत आधारशिला रखी। अपने अद्वितीय विजन, कड़े परिश्रम और व्यावसायिक कौशल के बल पर उन्होंने समूह को पेट्रोलियम और ऑटोमोबाइल क्षेत्रों में सफलतापूर्वक विस्तारित किया, जिससे आज NRL ग्रुप पश्चिमी उत्तर प्रदेश का एक अत्यंत प्रतिष्ठित, विश्वसनीय और अग्रणी ब्रांड बन चुका है।
              </p>
              
              <p className="border-l-4 border-red-800 pl-4 italic text-gray-900 font-semibold bg-gray-50/80 py-2 rounded-r-xl">
                व्यावसायिक उत्कृष्टता के साथ-साथ, श्री हरी मोहन गर्ग जी का जीवन सनातन संस्कृति, जनकल्याण और सामाजिक नैतिक मूल्यों के प्रति पूरी तरह समर्पित है।
              </p>

              <p>
                वह छलेसर (आगरा) में स्थापित **श्री वरद वल्लभा महागणपति मंदिर के मुख्य न्यासी (Managing Trustee)** हैं। मंदिर परिसर की भव्य संकल्पना, दिव्य दक्षिण भारतीय शैली की वास्तुकला का समन्वय, और इस पूरे छलेसर धाम को भक्तों के लिए एक उत्कृष्ट आध्यात्मिक एवं चेतना केंद्र के रूप में विकसित करने के पीछे उन्हीं की मुख्य प्रेरणा, श्रद्धा और दूरदर्शी नेतृत्व क्रियाशील है।
              </p>
            </div>

            {/* कोर वैल्यू के छोटे हाइलाइट पिल्स */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                <ShieldCheck size={16} className="text-green-600" />
                <span>दूरदर्शी व्यावसायिक विजन</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                <Heart size={16} className="text-red-600" />
                <span>सांस्कृतिक संरक्षण</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                <Award size={16} className="text-amber-600" />
                <span>4 दशकों की विश्वसनीयता</span>
              </div>
            </div>

          </div>

        </div>

        {/* CORPORATE FOOTER */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-gray-400 font-black text-[10px] tracking-[0.5em] uppercase">
            1982 से निरंतर उत्कृष्टता एवं सेवा की ओर — एनआरएल ग्रुप आगरा
          </p>
        </div>

      </div>
    </section>
  );
};

export default BoardOfDirectors;