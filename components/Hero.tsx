
import React from 'react';
import Button from './ui/Button';
import { CheckCircle, Zap, Box, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const PRODUCT_IMAGES = {
    packBack: "https://lh3.googleusercontent.com/d/1kRCrrZbE_7vFWO7QGVYUTINzEBLvE2OX",
    packFront: "https://lh3.googleusercontent.com/d/1g-nryBiY2wWteKuz3NwRGcAEOD9d765h",
  };

  return (
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-8 lg:gap-12 items-center mb-12 md:mb-32 pt-4 lg:pt-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1 flex flex-col justify-center">
        {/* Top Tag */}
        <div className="inline-flex self-start items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest bg-red-600 text-white px-3 py-1.5 rounded-full mb-4 md:mb-6 shadow-lg animate-pulse">
          <Award size={12} fill="currentColor" />
          Dành Cho Đại Lý & Nhà Phân Phối
        </div>

        {/* Headline */}
        <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] mb-4 text-text-main tracking-tight">
          Bùng Nổ Lợi Nhuận <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a862] via-[#00c16a] to-[#008f53] drop-shadow-sm filter">
            Cùng Snack Khoai Môn CVT
          </span>
        </h1>
        
        {/* Sub-headline / Description */}
        <p className="text-base md:text-xl font-bold text-gray-800 mb-6 max-w-lg leading-snug">
           Cơ Hội Độc Quyền & Hỗ Trợ Toàn Diện Cho Đại Lý, Nhà Phân Phối!
        </p>
        
        {/* Benefits Box */}
        <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-2xl p-4 md:p-6 mb-8 shadow-sm">
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[14px] md:text-base">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Lợi nhuận vượt trội <span className="text-red-600 font-black">(25-40%)</span> - Vốn thấp từ 3 Triệu</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[14px] md:text-base">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Hỗ trợ Marketing 0đ & POSM (Kệ, Banner) tận nơi</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[14px] md:text-base">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Nhập khẩu chính ngạch - Đầy đủ CO/CQ & VAT</span>
                </li>
            </ul>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-4 mb-8">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToForm} 
            className="w-full sm:w-auto shadow-[0_4px_25px_rgba(220,38,38,0.4)] animate-shimmer bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_auto] border-none text-white text-[15px] sm:text-lg uppercase font-black tracking-wide hover:scale-[1.02] transition-transform duration-300 py-4 px-8"
          >
             <span className="whitespace-nowrap flex items-center justify-center gap-2">
                <Zap size={20} fill="currentColor" /> 
                NHẬN ƯU ĐÃI ĐẠI LÝ ĐỘC QUYỀN
             </span>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4 border-t border-gray-200/60">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1.5 text-center md:text-left">
                <Box size={18} className="text-green-600 mb-1 md:mb-0" />
                <span className="text-[11px] md:text-xs font-bold text-gray-600 uppercase leading-tight">Sẵn hàng<br className="md:hidden" /> Kho Hà Nội</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1.5 text-center md:text-left">
                <ShieldCheck size={18} className="text-green-600 mb-1 md:mb-0" />
                <span className="text-[11px] md:text-xs font-bold text-gray-600 uppercase leading-tight">Chứng từ<br className="md:hidden" /> Minh bạch</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1.5 text-center md:text-left">
                <Award size={18} className="text-green-600 mb-1 md:mb-0" />
                <span className="text-[11px] md:text-xs font-bold text-gray-600 uppercase leading-tight">50+ NPP<br className="md:hidden" /> Tin Dùng</span>
            </div>
        </div>
      </div>

      {/* Right Visual - Completely Optimized for Mobile */}
      <div className="relative h-[360px] sm:h-[500px] md:h-[680px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000 mt-0 lg:mt-0 select-none">
        
        {/* Glow Effect behind products */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-orange-200/40 via-green-100/30 to-transparent blur-3xl -z-10"></div>
        
        {/* Back Image (Floating Background) - Snack Trứng Muối */}
        {/* pointer-events-none ensures it doesn't zoom or capture hover */}
        {/* Mobile: Bigger and closer. Desktop: Standard */}
        <div className="absolute top-[20px] right-[-5%] w-[65%] md:top-[-20px] md:right-[-40px] md:w-[80%] max-w-[450px] z-10 animate-float pointer-events-none opacity-80 md:opacity-100">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack Trứng Muối" 
                className="w-full h-auto drop-shadow-xl filter brightness-[0.9] blur-[0.5px] md:blur-0 rotate-[15deg]" 
                referrerPolicy="no-referrer" 
             />
        </div>

        {/* Front Image (Hero Product) - Snack Khoai Môn */}
        {/* Mobile: Slightly smaller width but centered better */}
        <div className="absolute bottom-[40px] left-0 w-[75%] md:bottom-[40px] md:left-[-50px] md:w-[85%] max-w-[540px] z-20 animate-float-delayed group">
             
             {/* Main Image */}
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack Khoai Môn CVT" 
                className="w-full h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] -rotate-[5deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-700 cursor-pointer" 
                referrerPolicy="no-referrer" 
             />
             
             {/* ADJUSTED BEST SELLER BADGE */}
             <div className="absolute top-[-5%] right-[-5%] z-30 pointer-events-none scale-[0.65] md:scale-100 origin-bottom-left">
                <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center">
                    {/* Rotating text ring */}
                    <div className="absolute inset-0 w-full h-full rounded-full border-[3px] border-red-500 border-dashed animate-[spin_10s_linear_infinite] opacity-60"></div>
                    
                    {/* Main Seal Body */}
                    <div className="relative w-[85%] h-[85%] bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-full shadow-[0_10px_20px_rgba(185,28,28,0.5)] flex items-center justify-center border-2 border-white/20 animate-pulse-glow">
                        <div className="absolute inset-1 rounded-full border border-white/30"></div>
                        <div className="text-center text-white transform -rotate-12">
                            <div className="text-[11px] font-bold uppercase tracking-widest text-yellow-200 mb-0.5">Top 1</div>
                            <div className="text-[20px] md:text-[26px] font-black uppercase leading-none drop-shadow-md">BEST<br/>SELLER</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        {/* Floating Sales Badge */}
        <div className="absolute bottom-[0px] md:bottom-[10%] left-0 md:left-auto md:right-[10%] z-40 w-full md:w-auto flex justify-center md:block pointer-events-none">
            <div className="bg-white/95 backdrop-blur-xl pl-4 pr-5 py-2 md:py-2.5 rounded-full shadow-[0_8px_30px_rgba(220,38,38,0.25)] border border-red-100 flex items-center gap-2 md:gap-3 animate-bounce-slight pointer-events-auto cursor-pointer" onClick={scrollToForm}>
                 <div className="bg-red-100 p-1.5 md:p-2 rounded-full text-red-600">
                    <Zap size={16} fill="currentColor" className="md:w-[18px] md:h-[18px]" />
                 </div>
                 <div>
                     <div className="text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wide leading-none mb-0.5">
                         Ưu đãi nhập sỉ
                     </div>
                     <div className="text-base md:text-xl font-black text-gray-900 leading-none">
                         Mua 10 <span className="text-red-600">Tặng 1</span>
                     </div>
                 </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
