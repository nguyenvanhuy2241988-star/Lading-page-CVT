
import React from 'react';
import Button from './ui/Button';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users, ShieldCheck, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // CẤU HÌNH ẢNH SẢN PHẨM TẠI ĐÂY
  const PRODUCT_IMAGES = {
    packBack: "https://lh3.googleusercontent.com/d/1kRCrrZbE_7vFWO7QGVYUTINzEBLvE2OX", // Ảnh gói phía sau
    packFront: "https://lh3.googleusercontent.com/d/1g-nryBiY2wWteKuz3NwRGcAEOD9d765h", // Ảnh gói phía trước
  };

  return (
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center mb-24 md:mb-32 pt-8 lg:pt-16">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1">
        {/* Updated Tag to highlight Target Audience (B2B) */}
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mb-6 border border-blue-200 shadow-sm hover:bg-blue-100 transition-colors cursor-default">
          <ShieldCheck size={14} fill="currentColor" className="opacity-80"/>
          Dành Cho Đại Lý & Nhà Phân Phối
        </div>

        {/* New Headline - Powerful & Consistent */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.15] mb-8 text-text-main tracking-tight">
          <span className="block mb-2">Bùng Nổ Lợi Nhuận</span>
          <span className="block">Cùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Snack Khoai Môn CVT</span></span>
        </h1>
        
        {/* Strong Sub-headline - Cleaner Typography */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-8 max-w-2xl leading-relaxed">
           Cơ Hội Độc Quyền & Hỗ Trợ Toàn Diện Cho <br className="hidden md:block"/> Đại Lý, Nhà Phân Phối!
        </h2>

        {/* Bullet Points - Specific Numbers & Benefits - More spacing */}
        <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-4 group">
                <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5 group-hover:scale-110 transition-transform"><Check size={18} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium text-lg">Lợi nhuận vượt trội <span className="font-bold text-text-main">(25-40%)</span> - Vốn thấp từ 3 Triệu</span>
            </li>
            <li className="flex items-start gap-4 group">
                <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5 group-hover:scale-110 transition-transform"><Check size={18} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium text-lg">Hỗ trợ Marketing 0đ & POSM (Kệ, Banner) tận nơi</span>
            </li>
            <li className="flex items-start gap-4 group">
                <div className="bg-green-100 p-1.5 rounded-full text-green-700 mt-0.5 group-hover:scale-110 transition-transform"><Check size={18} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium text-lg">Nhập khẩu chính ngạch - Đầy đủ CO/CQ & VAT</span>
            </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full sm:w-auto shadow-xl shadow-orange/20 !bg-gradient-orange border-none text-white py-4 px-8 text-base font-extrabold uppercase tracking-wide transform hover:-translate-y-1">
             NHẬN ƯU ĐÃI & CHÍNH SÁCH <br className="hidden sm:block lg:hidden"/> ĐẠI LÝ ĐỘC QUYỀN!
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToForm} className="w-full sm:w-auto border-gray-300 text-gray-600 hover:border-green-600 hover:text-green-700 py-4 font-bold">
            <Users size={20} />
            Tham Gia CTV (Vốn 0đ)
          </Button>
        </div>

        {/* Trust Indicators - Minimalist */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500 pt-6 border-t border-gray-200/60">
          <span className="flex items-center gap-2 hover:text-green-600 transition-colors cursor-default"><CheckCircle size={16} className="text-green-600" /> Sẵn hàng kho HN</span>
          <span className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-2 hover:text-green-600 transition-colors cursor-default"><CheckCircle size={16} className="text-green-600" /> Chứng từ minh bạch</span>
          <span className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-default"><div className="flex text-orange-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div> 50+ NPP Tin dùng</span>
        </div>
      </div>

      {/* Right Visual - Product Images */}
      <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center perspective-1000 order-1 lg:order-2">
        
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-80 blur-3xl -z-10"></div>
        
        {/* Pack 1: Back Product Image */}
        <div className="absolute right-0 md:right-8 top-6 md:top-10 w-[220px] md:w-[340px] rotate-12 transform transition-transform hover:scale-105 hover:rotate-6 z-10 animate-float-delayed group cursor-pointer">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack khoai môn vị trứng muối" 
                className="w-full h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Pack 2: Front Product Image */}
        <div className="absolute left-2 md:-left-4 bottom-0 md:-bottom-4 w-[260px] md:w-[440px] -rotate-6 transform transition-transform hover:scale-105 hover:rotate-0 z-20 animate-float group cursor-pointer">
             <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-lg animate-pulse z-30 border-2 border-white/50">
               BEST SELLER
             </div>
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack khoai môn vị truyền thống" 
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Floating Stats Card - Simplified */}
        <div className="absolute -right-2 md:-right-4 bottom-8 md:bottom-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-green/10 z-30 animate-bounce-slight max-w-[200px]">
            <div className="flex items-center gap-2 mb-1.5">
                <div className="bg-red-50 p-1.5 rounded-full text-red-600">
                    <TrendingUp size={16} />
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Ưu đãi Hot</div>
            </div>
            <div className="text-2xl font-black text-red-600 leading-none mb-1">Mua 10 Tặng 1</div>
            <div className="text-xs text-gray-500 font-medium">Dành cho Đại Lý Mới</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
