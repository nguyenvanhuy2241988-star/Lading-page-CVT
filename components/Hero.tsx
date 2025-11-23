
import React from 'react';
import Button from './ui/Button';
import { CheckCircle, ArrowRight, Zap, TrendingUp, Users, Award, Star } from 'lucide-react';

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
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-8 lg:gap-12 items-center mb-20 md:mb-32 pt-6 lg:pt-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1 flex flex-col justify-center">
        {/* Top Tag */}
        <div className="inline-flex self-start items-center gap-2 text-[11px] md:text-xs font-black uppercase tracking-widest bg-red-600 text-white px-4 py-1.5 rounded-full mb-5 shadow-lg animate-pulse">
          <Star size={12} fill="currentColor" />
          Dành Cho Đại Lý & Nhà Phân Phối
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] mb-4 text-text-main tracking-tight">
          Bùng Nổ Lợi Nhuận <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a862] via-[#00c16a] to-[#008f53] drop-shadow-sm filter">
            Cùng Snack Khoai Môn CVT
          </span>
        </h1>
        
        {/* Description Box */}
        <div className="bg-white/60 backdrop-blur-sm border border-green-100 rounded-2xl p-5 mb-8 shadow-sm">
            <p className="text-base md:text-lg text-gray-800 font-bold mb-3 uppercase tracking-tight">
               Cơ Hội Độc Quyền & Hỗ Trợ Toàn Diện Cho Đại Lý, Nhà Phân Phối!
            </p>
            <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-gray-700 font-medium">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Lợi nhuận vượt trội <span className="text-red-600 font-black">(25-40%)</span> - Vốn thấp từ 3 Triệu</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-700 font-medium">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Hỗ trợ Marketing 0đ & POSM (Kệ, Banner) tận nơi</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-700 font-medium">
                    <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} fill="currentColor" stroke="white" />
                    <span>Nhập khẩu chính ngạch - Đầy đủ CO/CQ & VAT</span>
                </li>
            </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-8">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToForm} 
            className="w-full shadow-[0_4px_25px_rgba(220,38,38,0.4)] animate-shimmer bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_auto] border-none text-white text-[15px] sm:text-lg uppercase font-black tracking-wide hover:scale-[1.02] transition-transform duration-300 py-4 px-6"
          >
             <span className="whitespace-nowrap flex items-center gap-2">
                <Zap size={20} fill="currentColor" className="hidden sm:block" /> 
                NHẬN ƯU ĐÃI & CHÍNH SÁCH ĐẠI LÝ ĐỘC QUYỀN!
             </span>
          </Button>
          
          <div className="flex justify-center sm:justify-start">
            <button 
                onClick={scrollToForm} 
                className="group flex items-center gap-2 text-gray-600 font-bold hover:text-green-600 transition-colors px-4 py-2 rounded-full hover:bg-green-50"
            >
                <Users size={18} /> Tham Gia CTV (Vốn 0đ) <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-3 md:gap-6 mt-2 pt-4 border-t border-gray-200/60">
            <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs font-bold text-gray-600 uppercase">Sẵn hàng kho HN</span>
            </div>
            <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs font-bold text-gray-600 uppercase">Chứng từ minh bạch</span>
            </div>
            <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs font-bold text-gray-600 uppercase">50+ NPP Tin dùng</span>
            </div>
        </div>
      </div>

      {/* Right Visual - REARRANGED & ANIMATED */}
      <div className="relative h-[500px] md:h-[680px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000 mt-8 lg:mt-0">
        
        {/* Glow Effect behind products */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-yellow-200/60 to-transparent blur-3xl -z-10"></div>
        
        {/* Back Image (Floating Background) - Moved Up & Right */}
        <div className="absolute top-[-20px] right-[-10px] md:right-[-40px] w-[65%] md:w-[80%] max-w-[500px] z-10 animate-float transition-all duration-500">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack Trứng Muối" 
                className="w-full h-auto drop-shadow-2xl filter brightness-[0.95] rotate-[12deg]" 
                referrerPolicy="no-referrer" 
             />
        </div>

        {/* Front Image (Hero Product) - Moved Down & Left */}
        <div className="absolute bottom-[20px] left-[-10px] md:left-[-50px] w-[70%] md:w-[85%] max-w-[540px] z-20 animate-float-delayed group">
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack Khoai Môn CVT" 
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] -rotate-[6deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
             />
             
             {/* Best Seller Badge - GOLD MEDAL STYLE - Attached to Product */}
             <div className="absolute top-[5%] right-[10%] z-30 animate-pulse-glow">
                 <div className="relative w-24 h-24 md:w-32 md:h-32">
                    {/* Ribbons */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-16 h-16 bg-red-600 rotate-45 transform origin-center -z-10 skew-x-12 shadow-md"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-16 h-16 bg-red-700 -rotate-45 transform origin-center -z-10 -skew-x-12 shadow-md"></div>
                    
                    {/* Medal Circle */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 p-1 shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-2 border-white/50">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-200 flex flex-col items-center justify-center border-2 border-yellow-800/20">
                            <Award size={32} className="text-red-700 drop-shadow-sm mb-1" fill="currentColor" />
                            <span className="text-[12px] md:text-[15px] font-black uppercase leading-none text-red-800 drop-shadow-sm text-center">
                                Best<br/>Seller
                            </span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Floating Sales Badge - Positioned Closer to Product Cluster */}
        <div className="absolute bottom-[10%] right-[5%] md:right-[10%] z-40 animate-bounce-slight">
            <div className="bg-white/95 backdrop-blur-xl pl-4 pr-6 py-3 rounded-xl shadow-[0_8px_30px_rgba(220,38,38,0.25)] border-2 border-red-100 border-l-[6px] border-l-red-600 max-w-[200px] md:max-w-[240px] transform rotate-2 hover:rotate-0 transition-transform">
                 <div className="flex items-center gap-2 mb-1">
                     <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                     <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">Khuyến mãi nhập sỉ</span>
                 </div>
                 <div className="text-2xl md:text-3xl font-black text-gray-900 leading-none">
                     Mua 10 <span className="text-red-600">Tặng 1</span>
                 </div>
                 <div className="text-[10px] text-gray-500 mt-1.5 font-medium italic">
                     *Áp dụng cho đơn hàng đầu tiên
                 </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
