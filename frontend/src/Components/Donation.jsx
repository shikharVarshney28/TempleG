import React, { useState, useEffect } from 'react'
import { Landmark, Smartphone, Copy, Check, Info, Heart, ShieldCheck, Loader2 } from 'lucide-react'
import { client } from '../sanityClient' // Adjust path to your sanity client

const Donation = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        // Fetches the first document of type "donation"
        const query = `*[_type == "donation"][0]{
          ...,
          "qrCodeUrl": qrCode.asset->url
        }`;
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDonationData();
  }, []);

  const handleCopy = (text, field) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffcf9]">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  // Fallback if no data is found in Sanity
  if (!data) return <div className="text-center py-40">No donation details found.</div>;

  return (
    <main className="pt-32 pb-20 bg-[#fffcf9] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PAGE HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Heart className="text-red-700 fill-red-700" size={20} />
             <span className="text-red-800 font-black tracking-[0.4em] text-xs uppercase">Seva & Contribution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-red-950 tracking-tighter uppercase leading-none">
            {data.title.split(' ')[0]} <span className="text-orange-600">{data.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg italic">
            "Your contribution fuels the sacred traditions, temple development, and our mission to serve the community."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: DEVOTIONAL MESSAGE --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
              <img 
                src="/donation-ganesha.jpg" 
                alt="Temple Seva" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-orange-400 font-black tracking-widest text-xs uppercase mb-2">Temple Trust</p>
                <h3 className="text-white text-3xl font-bold leading-tight uppercase">Every Contribution is a Sacred Blessing</h3>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-orange-100 flex gap-4">
               <ShieldCheck className="text-green-600 shrink-0" size={28} />
               <div>
                 <h4 className="font-black text-gray-900 uppercase text-sm mb-1 tracking-tight">100% Secure & Direct</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">All donations go directly to the Temple Trust account for temple maintenance and Bhandara services.</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: PAYMENT METHODS --- */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. UPI Payment Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2.5rem] p-8 md:p-12 border border-orange-200">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                   <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Smartphone className="text-orange-600" size={18} />
                      <span className="text-orange-700 font-bold uppercase tracking-widest text-xs">Fast & Digital</span>
                   </div>
                   <h2 className="text-3xl font-black text-red-950 uppercase tracking-tighter">Scan to Pay</h2>
                   <p className="text-gray-600 text-sm">Scan this QR code with any UPI app to make an instant contribution.</p>
                   
                   <div className="pt-4">
                     <button 
                       onClick={() => handleCopy(data.upiId, 'upi')}
                       className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                     >
                       <span className="text-xs font-black text-gray-800 tracking-wider uppercase">{data.upiId}</span>
                       {copiedField === 'upi' ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-orange-400 group-hover:text-orange-600" />}
                     </button>
                   </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-orange-200">
                      {data.qrCodeUrl ? (
                        <img src={data.qrCodeUrl} alt="Temple QR Code" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
                      ) : (
                        <div className="w-48 h-48 flex items-center justify-center text-gray-300 italic">No QR Uploaded</div>
                      )}
                   </div>
                </div>
              </div>
            </div>

            {/* 2. Bank Details Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50">
               <div className="flex items-center gap-3 mb-8">
                  <Landmark className="text-red-800" size={24} />
                  <h2 className="text-3xl font-black text-red-950 uppercase tracking-tighter">Bank Transfer</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "Account Name", value: data.accountName, key: 'name' },
                    { label: "Bank Name", value: data.bankName, key: 'bank' },
                    { label: "Account Number", value: data.accountNumber, key: 'acc' },
                    { label: "IFSC Code", value: data.ifscCode, key: 'ifsc' },
                    { label: "Branch", value: data.branch, key: 'branch' },
                  ].map((item) => (
                    <div key={item.key} className="group flex justify-between items-end border-b border-gray-50 pb-2">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-gray-800 uppercase leading-tight">{item.value || 'N/A'}</p>
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
                  <p className="text-[11px] md:text-xs text-red-900/70 font-medium leading-relaxed">
                    <strong>Note:</strong> After making a transfer, please send the transaction screenshot along with your name and address to our office WhatsApp to receive your donation receipt.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Donation