import React from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';
import { Home, RefreshCcw, FileQuestion, ServerCrash, Sun } from 'lucide-react';

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  // एरर का प्रकार निर्धारित करें ताकि सही आइकॉन/मैसेज दिखाया जा सके
  const is404 = err.status === 404;
  
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6 font-sans overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-700"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-xl w-full text-center relative z-10">
        
        {/* --- DYNAMIC ICON BOX --- */}
        <div className="mb-10 relative inline-block">
          <div className="absolute inset-0 bg-red-100 rounded-3xl rotate-6 scale-110 opacity-50"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-red-50">
            {is404 ? (
              <FileQuestion size={64} className="text-orange-500" strokeWidth={1.5} />
            ) : (
              <ServerCrash size={64} className="text-red-700" strokeWidth={1.5} />
            )}
          </div>
        </div>

        {/* --- ERROR DETAILS --- */}
        <div className="space-y-4">
          <span className="text-orange-600 font-black tracking-[0.4em] text-[10px] uppercase block">
            {is404 ? 'मार्ग नहीं मिला' : 'अस्थायी बाधा'}
          </span>
          
          <h1 className="text-6xl md:text-7xl font-black text-red-800 tracking-tighter leading-none">
            {err.status || "त्रुटि"}
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
            {is404 ? "पृष्ठ नहीं मिला (Page Not Found)" : (err.statusText || "कुछ त्रुटि हुई है")}
          </h2>

          <div className="h-1 w-16 bg-red-700 mx-auto rounded-full my-6"></div>

          <p className="text-gray-500 font-medium leading-relaxed max-w-sm mx-auto">
            {err.data || "जिस पवित्र मार्ग की आप खोज कर रहे हैं, वह इस समय उपलब्ध नहीं है या अस्तित्व में नहीं है।"}
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-800 shadow-xl shadow-red-200 transition-all active:scale-95"
          >
            <Home size={16} />
            मुख्य पृष्ठ पर जाएं
          </Link>
          
          <button 
            onClick={() => navigate(-1)} // उपयोगकर्ता को पिछले पृष्ठ पर वापस ले जाता है
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all"
          >
            <RefreshCcw size={16} />
            पीछे जाएं
          </button>
        </div>

        {/* --- BRAND FOOTER --- */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-30">
          <div className="h-px w-8 bg-gray-400"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            त्रिशक्ति ज्योति हनुमान मंदिर
          </span>
          <div className="h-px w-8 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;