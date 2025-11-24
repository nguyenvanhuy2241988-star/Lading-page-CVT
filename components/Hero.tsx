
import React from 'react';
import Button from './ui/Button';
import { CheckCircle, Zap, Box, ShieldCheck, Award, Gift, ArrowRight } from 'lucide-react';

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
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-6 lg:gap-12 items-center mb-12 md:mb-32 pt-2 lg:pt-10">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1 flex flex-col justify-center">
        {/* Top Tag */}
        <div className="inline-flex self-start items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest bg-red-600 text-white px-3 py-1.5 rounded-full mb-4 md:mb-6 shadow-lg animate-pulse ring-2 ring-red-200">
          <Award size={12} fill="currentColor" />
          Dành Cho Đại Lý & Nhà Phân Phối
        </div>

        {/* Headline - REBALANCED & PREMIUM EFFECT */}
        <div className="flex flex-col mb-6 md:mb-8 select-none relative group cursor-default">
            <h1 className="font-black tracking-tighter flex flex-col items-start w-full">
                
                {/* Line 1: Lợi Nhuận - Black, Compact Size */}
                <span className="block text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] text-gray-900 uppercase drop-shadow-sm">
                    BÙNG NỔ LỢI NHUẬN
                </span>
                
                {/* Line 2: Brand - Premium Gradient, No Underline */}
                <span className="block text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] uppercase drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-800">
                    CÙNG SNACK KHOAI MÔN CVT
                </span>
            </h1>
        </div>
        
        {/* Sub-headline */}
        <p className="text-[14px] md:text-[16px] font-bold text-gray-600 mb-6 max-w-lg leading-relaxed border-l-4 border-green-500 pl-4 py-1 bg-green-50/50 rounded-r-lg">
           Cơ Hội Độc Quyền: Lợi nhuận cao, Vốn khởi điểm thấp, Hỗ trợ Marketing toàn diện!
        </p>
        
        {/* Benefits Box - Clean & Professional */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 md:p-5 mb-8 shadow-card hover:shadow-lg transition-all duration-300">
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[13px] md:text-[14px]">
                    <div className="mt-0.5 p-0.5 bg-green-100 rounded-full text-green-600"><CheckCircle size={14} fill="#e6f7ef" /></div>
                    <span>Lợi nhuận <span className="text-red-600 font-black">25-40%</span> - Vốn từ 3 Triệu</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[13px] md:text-[14px]">
                    <div className="mt-0.5 p-0.5 bg-green-100 rounded-full text-green-600"><CheckCircle size={14} fill="#e6f7ef" /></div>
                    <span>Hỗ trợ Marketing, Kệ trưng bày & Banner</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800 font-medium text-[13px] md:text-[14px]">
                    <div className="mt-0.5 p-0.5 bg-green-100 rounded-full text-green-600"><CheckCircle size={14} fill="#e6f7ef" /></div>
                    <span>Hàng chính ngạch - Đầy đủ CO/CQ & VAT</span>
                </li>
            </ul>
        </div>

        {/* CTA Button - REDESIGNED: Premium, Attractive, Clean */}
        <div className="flex flex-col gap-4 mb-8 relative z-20 group/btn">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToForm} 
            className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-red-600 via-[#ea580c] to-red-600 bg-[length:200%_auto] animate-shimmer border-none text-white shadow-[0_6px_20px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_8px_25px_-5px_rgba(220,38,38,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-full py-4 px-6 md:px-8 ring-2 ring-white/50 ring-offset-2 ring-offset-orange-50"
          >
             <div className="relative z-10 flex flex-col items-center leading-none gap-1">
                 <span className="text-[13px] sm:text-[15px] font-black uppercase tracking-wide flex items-center gap-2 text-center">
                    <Zap size={18} fill="currentColor" className="text-yellow-300 shrink-0" /> 
                    NHẬN ƯU ĐÃI & CHÍNH SÁCH ĐẠI LÝ ĐỘC QUYỀN!
                 </span>
             </div>
             {/* Glossy effect overlay */}
             <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none"></div>
          </Button>
        </div>

        {/* Trust Indicators - Fixed Alignment */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 pt-5 border-t border-gray-200/80">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 text-center md:text-left group cursor-default h-full">
                <div className="p-2 bg-gray-50 rounded-lg text-green-600 group-hover:bg-green-50 transition-colors shrink-0"><Box size={18} /></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-700 uppercase leading-tight">Kho hàng<br className="md:hidden" /> Hà Nội</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 text-center md:text-left group cursor-default h-full">
                <div className="p-2 bg-gray-50 rounded-lg text-green-600 group-hover:bg-green-50 transition-colors shrink-0"><ShieldCheck size={18} /></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-700 uppercase leading-tight">Pháp lý<br className="md:hidden" /> Minh bạch</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 text-center md:text-left group cursor-default h-full">
                <div className="p-2 bg-gray-50 rounded-lg text-green-600 group-hover:bg-green-50 transition-colors shrink-0"><Award size={18} /></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-700 uppercase leading-tight">Đại lý<br className="md:hidden" /> Toàn quốc</span>
            </div>
        </div>
      </div>

      {/* Right Visual Area */}
      <div className="relative h-[420px] sm:h-[500px] md:h-[650px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000 mt-0 lg:mt-0 select-none">
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-orange-200/40 via-green-100/30 to-transparent blur-3xl -z-10"></div>
        
        {/* Back Image (Floating Background) */}
        <div className="absolute top-[20px] right-[0px] w-[60%] md:top-[-20px] md:right-[-20px] md:w-[75%] max-w-[420px] z-10 animate-float pointer-events-none opacity-90 md:opacity-100">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack Trứng Muối" 
                className="w-full h-auto drop-shadow-xl filter brightness-[0.9] blur-[0.5px] md:blur-0 rotate-[15deg]" 
                referrerPolicy="no-referrer" 
             />
        </div>

        {/* Front Image (Hero Product) */}
        <div className="absolute bottom-[80px] left-10 w-[70%] md:bottom-[40px] md:left-[-30px] md:w-[80%] max-w-[500px] z-20 animate-float-delayed group transition-all duration-500">
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack Khoai Môn CVT" 
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] -rotate-[5deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-700 cursor-pointer" 
                referrerPolicy="no-referrer" 
             />
             
             {/* Best Seller Badge */}
             <div className="absolute top-[-5%] right-[-5%] z-30 pointer-events-none scale-[0.6] md:scale-90 origin-bottom-left">
                <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full rounded-full border-[3px] border-red-500 border-dashed animate-[spin_10s_linear_infinite] opacity-60"></div>
                    <div className="relative w-[85%] h-[85%] bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-full shadow-[0_10px_20px_rgba(185,28,28,0.5)] flex items-center justify-center border-2 border-white animate-pulse-glow">
                        <div className="text-center text-white transform -rotate-12">
                            <div className="text-[11px] font-bold uppercase tracking-widest text-yellow-300 mb-0.5">Top 1</div>
                            <div className="text-[20px] md:text-[26px] font-black uppercase leading-none drop-shadow-md">BEST<br/>SELLER</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        {/* PROMOTION CARD - COMPACT, GLASSMORPHISM & STIMULATING */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:bottom-[60px] z-50 w-auto">
             <div 
                className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" 
                onClick={scrollToForm}
             >
                {/* Floating Gift Icon */}
                <div className="absolute -top-4 -right-4 z-30 pointer-events-none drop-shadow-xl animate-bounce-slight">
                    <div className="relative">
                        <Gift size={40} className="text-red-600 fill-yellow-400 stroke-[1.5px]" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </div>
                </div>

                {/* Compact Glass Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_40px_-10px_rgba(220,38,38,0.4)] border-2 border-red-100 p-3 min-w-[260px] md:min-w-[300px] text-center ring-4 ring-white/40">
                    
                    {/* Header Tag */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap border border-white">
                        Khuyến mãi nhập sỉ
                    </div>

                    {/* Main Content */}
                    <div className="mt-2 flex flex-col items-center">
                        <div className="flex items-baseline justify-center gap-1.5 leading-none mb-1.5">
                             <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 tracking-tighter drop-shadow-sm font-sans">
                                MUA 10
                             </span>
                             <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter drop-shadow-sm font-sans">
                                TẶNG 1
                             </span>
                        </div>
                        
                        {/* Subtext */}
                        <div className="bg-red-50/80 rounded-lg py-1 px-3 w-full border border-red-100">
                             <div className="text-[10px] md:text-[11px] font-bold text-red-600 flex items-center justify-center gap-1">
                                <CheckCircle size={10} fill="currentColor" className="text-white" /> *Áp dụng cho đơn hàng đầu tiên
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
