import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { ArrowRight, Clock } from 'lucide-react';

const FomoBar: React.FC = () => {
  const [slots, setSlots] = useState(18);
  const [timeLeft, setTimeLeft] = useState({ h: 11, m: 45, s: 0 });

  const scrollToForm = () => {
    const form = document.getElementById('contact');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Slowly decrease slots
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setSlots(prev => Math.max(3, prev - 1));
      }
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-[100] bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 shadow-lg border-b border-yellow-400 text-[#0b1b2b]">
      <div className="max-w-[1120px] mx-auto px-4 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
        
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="bg-red-600 text-white font-bold px-2 py-0.5 rounded text-[10px] animate-pulse uppercase tracking-wider">
            Flash Deal
          </div>
          <span>
            Tặng gói POSM <strong>3.000.000đ</strong> cho 50 NPP đầu tiên. 
            <span className="hidden md:inline mx-1">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">
                Chỉ còn <strong className="text-red-700 text-base">{slots}</strong> suất.
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
           <div className="flex items-center gap-1 font-mono bg-white/30 px-2 py-1 rounded text-red-800 font-bold">
             <Clock size={14} />
             <span>{formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}</span>
           </div>
           <Button variant="fomo" onClick={scrollToForm} size="sm" className="whitespace-nowrap shadow-none border border-black/10">
             Đăng ký ngay <ArrowRight size={14} />
           </Button>
        </div>

      </div>
    </div>
  );
};

export default FomoBar;