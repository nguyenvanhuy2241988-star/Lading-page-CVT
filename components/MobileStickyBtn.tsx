import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const MobileStickyBtn: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[40] md:hidden flex gap-3 safe-area-pb">
      <a 
        href="tel:0909000000" 
        className="flex flex-col items-center justify-center w-[60px] h-[50px] bg-green-50 text-green-dark rounded-xl border border-green-200 active:bg-green-100"
      >
        <Phone size={20} />
        <span className="text-[10px] font-bold">Gọi ngay</span>
      </a>
      <button 
        onClick={scrollToForm}
        className="flex-1 bg-gradient-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow active:scale-[0.98] transition-transform animate-pulse-glow"
      >
        Đăng Ký Nhập Hàng <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default MobileStickyBtn;