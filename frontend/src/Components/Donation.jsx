import React, { useState } from 'react';
import { useData } from './DataContext'; // ग्लोबल कॉन्टेक्स्ट इम्पोर्ट
import { urlFor } from '../sanityClient'; // इमेज बिल्डर इम्पोर्ट
import { Landmark, Smartphone, Copy, Check, Info, Heart, ShieldCheck, Sun } from 'lucide-react';

const Donation = () => {
  const { donation, loading } = useData(); // ग्लोबल स्टेट से डेटा निकालना
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffcf9]">
      <Sun className="animate-spin text-orange-600" size={40} />
    </div>
  );

  // यदि सॅनिटी से कोई डोनेशन डेटा प्राप्त नहीं होता है
  if (!donation) return <div className="text-center py-40 font-bold text-gray-500">दान विवरण उपलब्ध नहीं है।</div>;

  return (
    <main className="pt-32 pb-20 bg-[#fffcf9] font-sans antialiased selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PAGE HEADER (मुख्य हेडिंग सेक्शन) --- */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
             <Heart className="text-red-700 fill-red-700 animate-pulse" size={22} />
             <span className="text-red-800 font-black tracking-widest text-sm md:text-base">
               सेवा एवं योगदान
             </span>
          </div>
          
          {/* भव्य और बड़ी हेडिंग - मोबाइल पर text-5xl और बड़े स्क्रीन्स पर lg:text-8xl */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-red-950 leading-[1.15] md:leading-[1.2] tracking-tight px-2">
            {donation.title?.split(' ')[0]} <span className="text-orange-600 block sm:inline">{donation.title?.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="text-gray-600 font-semibold max-w-3xl mx-auto text-lg md:text-xl leading-relaxed italic border-t border-b border-orange-100 py-4 px-4">
            "आपका योगदान पवित्र परंपराओं, मंदिर के विकास और समाज की सेवा करने के हमारे मिशन को शक्ति प्रदान करता है।"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: DEVOTIONAL MESSAGE --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
              <img 
                src="../Img_For_Donation.jpg" 
                alt="मन्दिर सेवा" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <p className="text-orange-400 font-black tracking-widest text-sm uppercase mb-3">मंदिर ट्रस्ट</p>
                <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">
                  प्रत्येक योगदान एक दिव्य आशीर्वाद है
                </h3>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-orange-100 flex gap-4">
               <ShieldCheck className="text-green-600 shrink-0" size={28} />
               <div>
                 <h4 className="font-extrabold text-gray-900 text-base mb-1 tracking-tight">100% सुरक्षित एवं प्रत्यक्ष</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">सभी दान राशि सीधे मंदिर के रखरखाव और भंडारा सेवाओं के लिए मंदिर ट्रस्ट के खाते में जाती है।</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: PAYMENT METHODS --- */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. UPI Payment Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2.5rem] p-8 md:p-12 border border-orange-200">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                   <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                      <Smartphone className="text-orange-600" size={20} />
                      <span className="text-orange-700 font-black tracking-wider text-xs md:text-sm">त्वरित एवं डिजिटल</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black text-red-950 leading-tight mb-4">
                     स्कैन करके भुगतान करें
                   </h2>
                   <p className="text-gray-600 text-sm leading-relaxed">तुरंत योगदान करने के लिए किसी भी UPI ऐप (जैसे PhonePe, Google Pay, Paytm) से इस QR कोड को स्कैन करें।</p>
                   
                   <div className="pt-2 flex justify-center md:justify-start">
                     <button 
                       onClick={() => handleCopy(donation.upiId, 'upi')}
                       className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-orange-100"
                     >
                       <span className="text-xs font-black text-gray-800 tracking-wider uppercase">{donation.upiId}</span>
                       {copiedField === 'upi' ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-orange-400 group-hover:text-orange-600" />}
                     </button>
                   </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-orange-200">
                      {donation.qrCodeUrl ? (
                        <img 
                          src={urlFor(donation.qrCode || donation.qrCodeUrl).width(300).format('webp').url()} 
                          alt="मंदिर यूपीआई क्यूआर कोड" 
                          className="w-48 h-48 md:w-56 md:h-56 object-contain" 
                        />
                      ) : (
                        <div className="w-48 h-48 flex items-center justify-center text-gray-300 italic">क्यूआर कोड उपलब्ध नहीं है</div>
                      )}
                   </div>
                </div>
              </div>
            </div>

            {/* 2. Bank Details Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50">
               <div className="flex items-center gap-4 mb-8">
                  <Landmark className="text-red-800 shrink-0" size={32} />
                  <h2 className="text-3xl md:text-4xl font-black text-red-950 leading-tight">
                    बैंक ट्रांसफर विवरण
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "खाताधारक का नाम", value: donation.accountName, key: 'name' },
                    { label: "बैंक का नाम", value: donation.bankName, key: 'bank' },
                    { label: "खाता संख्या (Account Number)", value: donation.accountNumber, key: 'acc' },
                    { label: "आईएफएससी कोड (IFSC Code)", value: donation.ifscCode, key: 'ifsc' },
                    { label: "बैंक शाखा (Branch)", value: donation.branch, key: 'branch' },
                  ].map((item) => (
                    <div key={item.key} className="group flex justify-between items-end border-b border-gray-100 pb-2">
                      <div>
                        <p className="text-[14.5px] font-extrabold text-gray-400 tracking-wide mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-gray-800 leading-tight">{item.value || 'उपलब्ध नहीं'}</p>
                      </div>
                      <button 
                        onClick={() => handleCopy(item.value, item.key)}
                        className="p-2 hover:bg-orange-50 rounded-full transition-colors"
                      >
                        {copiedField === item.key ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-300" />}
                      </button>
                    </div>
                  ))}
               </div>

               <div className="mt-10 p-5 bg-red-50 rounded-2xl flex gap-4">
                  <Info className="text-red-800 shrink-0" size={20} />
                  <p className="text-[20px] md:text-xs text-red-900/70 font-medium leading-relaxed">
                    <strong>विशेष सूचना:</strong> बैंक ट्रांसफर या ऑनलाइन भुगतान करने के पश्चात, अपनी दान रसीद प्राप्त करने के लिए कृपया ट्रांजैक्शन का स्क्रीनशॉट अपने नाम और पते के साथ मंदिर कार्यालय के आधिकारिक व्हाट्सएप नंबर पर अवश्य भेजें।
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Donation;