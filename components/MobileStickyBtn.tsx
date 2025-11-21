
import React from 'react';
import { Phone, ArrowRight, Gift } from 'lucide-react';

const MobileStickyBtn: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-[40] md:hidden flex gap-3 safe-area-pb items-end">
      <a 
        href="tel:0909000000" 
        className="flex flex-col items-center justify-center w-[64px] h-[50px] bg-white text-green-dark rounded-xl border border-gray-200 active:bg-gray-50 shadow-sm shrink-0"
      >
        <Phone size={20} strokeWidth={2.5} />
        <span className="text-[10px] font-bold mt-0.5">Gọi ngay</span>
      </a>
      
      <div className="flex-1 relative">
        {/* Floating Tag - FOMO Trigger */}
        <div className="absolute -top-5 right-1 animate-bounce z-10">
           <div className="relative bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 border border-white/30 ring-2 ring-red-500/50 ring-offset-1">
              <Gift size={12} fill="currentColor" className="animate-pulse" /> TẶNG 3 TRIỆU
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-red-600"></span>
           </div>
        </div>

        <button 
          onClick={scrollToForm}
          className="w-full h-[50px] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow-green active:scale-[0.98] transition-transform relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <span className="relative z-10 text-base uppercase tracking-wide">Đăng Ký Ngay</span> 
          <div className="relative z-10 bg-white/20 rounded-full p-1">
            <ArrowRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyBtn;
