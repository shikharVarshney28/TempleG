import React from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';
import { Home, RefreshCcw, AlertTriangle, FileQuestion, ServerCrash } from 'lucide-react';

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  // Determine the type of error to show different icons/messages
  const is404 = err.status === 404;
  
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6 font-sans overflow-hidden relative">
      
      {/* Background Decorative Element */}
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
            {is404 ? 'Path Not Found' : 'Divine Interruption'}
          </span>
          
          <h1 className="text-6xl md:text-7xl font-black text-red-800 tracking-tighter leading-none">
            {err.status || "Error"}
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
            {err.statusText || "Something went wrong"}
          </h2>

          <div className="h-1 w-16 bg-red-700 mx-auto rounded-full my-6"></div>

          <p className="text-gray-500 font-medium leading-relaxed max-w-sm mx-auto">
            {err.data || "The sacred path you seek is currently unavailable or does not exist in this realm."}
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-800 shadow-xl shadow-red-200 transition-all active:scale-95"
          >
            <Home size={16} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => navigate(-1)} // Takes them back to the last page they were on
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all"
          >
            <RefreshCcw size={16} />
            Go Back
          </button>
        </div>

        {/* --- BRAND FOOTER --- */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-30">
          <div className="h-px w-8 bg-gray-400"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Tri-Sakti Jyoti Hanuman Temple
          </span>
          <div className="h-px w-8 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;