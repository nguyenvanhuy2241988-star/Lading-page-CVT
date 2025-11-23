
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
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center mb-20 pt-4 lg:pt-10">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1">
        {/* Updated Tag to highlight Target Audience (B2B) */}
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mb-5 border border-blue-200 shadow-sm hover:bg-blue-100 transition-colors cursor-default">
          <ShieldCheck size={14} fill="currentColor" className="opacity-80"/>
          Dành Cho Đại Lý & Nhà Phân Phối
        </div>

        {/* New Headline - Adjusted spacing */}
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight mb-6 text-text-main tracking-tight">
          <span className="block mb-2 lg:mb-3">Tăng Trưởng Doanh Số</span>
          <span className="block">Với <span className="text-green-dark">Snack Khoai Môn LYHU</span></span>
        </h1>
        
        <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-6 bg-orange-50 inline-block px-4 py-2 rounded-lg border-l-4 border-orange-500">
           Độc Quyền Phân Phối & Hỗ Trợ Đặc Biệt
        </h2>

        {/* Bullet Points instead of Paragraph - SCANABLE */}
        <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-700"><Check size={16} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium">Lợi nhuận cao - Vốn khởi điểm thấp</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-700"><Check size={16} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium">Hỗ trợ Marketing & POSM toàn diện</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-700"><Check size={16} strokeWidth={3} /></div>
                <span className="text-gray-600 font-medium">Nhập khẩu chính ngạch - Pháp lý minh bạch</span>
            </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full sm:w-auto shadow-xl shadow-orange/20 !bg-gradient-orange border-none text-white py-3.5 px-6">
            Đăng Ký Đại Lý Ngay <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToForm} className="w-full sm:w-auto border-gray-300 text-gray-600 hover:border-green-600 hover:text-green-700 py-3.5">
            <Users size={18} />
            Tham Gia CTV (Vốn 0đ)
          </Button>
        </div>

        {/* Trust Indicators - Minimalist */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pt-5 border-t border-gray-100">
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-600" /> Sẵn hàng kho HN</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-600" /> Đầy đủ CO/CQ</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-1.5"><div className="flex text-orange-400"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div> 50+ NPP Tin dùng</span>
        </div>
      </div>

      {/* Right Visual - Product Images */}
      <div className="relative h-[400px] md:h-[550px] w-full flex items-center justify-center perspective-1000 order-1 lg:order-2">
        
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-80 blur-3xl -z-10"></div>
        
        {/* Pack 1: Back Product Image */}
        <div className="absolute right-0 md:right-8 top-6 md:top-10 w-[200px] md:w-[320px] rotate-12 transform transition-transform hover:scale-105 hover:rotate-6 z-10 animate-float-delayed group cursor-pointer">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack khoai môn vị trứng muối" 
                className="w-full h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Pack 2: Front Product Image */}
        <div className="absolute left-2 md:-left-4 bottom-0 md:-bottom-4 w-[240px] md:w-[400px] -rotate-6 transform transition-transform hover:scale-105 hover:rotate-0 z-20 animate-float group cursor-pointer">
             <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-lg animate-pulse z-30 border-2 border-white/50">
               BEST SELLER
             </div>
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack khoai môn vị truyền thống" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Floating Stats Card - Simplified */}
        <div className="absolute -right-2 md:-right-4 bottom-8 md:bottom-20 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-green/10 z-30 animate-bounce-slight max-w-[180px]">
            <div className="flex items-center gap-2 mb-1">
                <div className="bg-red-50 p-1 rounded-full text-red-600">
                    <TrendingUp size={14} />
                </div>
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wide">Ưu đãi Hot</div>
            </div>
            <div className="text-xl font-extrabold text-red-600 leading-none mb-0.5">Mua 10 Tặng 1</div>
            <div className="text-[10px] text-gray-400">Dành cho Đại Lý Mới</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
