
import React from 'react';
import Button from './ui/Button';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // CẤU HÌNH ẢNH SẢN PHẨM TẠI ĐÂY
  // Sử dụng link lh3.googleusercontent.com để hiển thị trực tiếp
  const PRODUCT_IMAGES = {
    packBack: "https://lh3.googleusercontent.com/d/1kRCrrZbE_7vFWO7QGVYUTINzEBLvE2OX", // Ảnh gói phía sau
    packFront: "https://lh3.googleusercontent.com/d/1g-nryBiY2wWteKuz3NwRGcAEOD9d765h", // Ảnh gói phía trước
  };

  return (
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-10 items-center mb-24 pt-6 lg:pt-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 order-2 lg:order-1">
        {/* Updated Tag to highlight the Promo */}
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1.5 rounded-full mb-6 border border-red-200 shadow-sm animate-pulse">
          <Zap size={14} fill="currentColor" />
          Hot: Mua 10 Tặng 1 + Free Ship
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-text-main tracking-tight">
          Snack Khoai Môn <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 relative">
            Thơm Bùi Hảo Hạng
            {/* Underline decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 7C69.6836 2.77084 137.225 1.73695 198.001 4.99999" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
          </span>
        </h1>

        <p className="text-base md:text-lg text-text-muted max-w-[520px] mb-8 leading-relaxed">
          Nhập khẩu chính ngạch & phân phối độc quyền bởi <strong>LYHU Co. Ltd</strong>. 
          Chương trình hỗ trợ vốn đặc biệt: <strong>Mua 10 thùng tặng ngay 1 thùng</strong> cho đại lý mới.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full sm:w-auto shadow-xl shadow-green/20">
            Nhập hàng (Mua 10 Tặng 1) <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToForm} className="w-full sm:w-auto group">
            <Users size={18} className="text-green-dark group-hover:scale-110 transition-transform" />
            Đăng ký CTV (Không vốn)
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-text-muted pt-6 border-t border-gray-200">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
            <CheckCircle size={16} className="text-green" />
            <span>100% Chính ngạch</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
            <CheckCircle size={16} className="text-green" />
            <span>Kho lạnh 1.000 tấn</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
             <div className="flex text-orange">
               {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
             </div>
             <span>50+ Đại lý tin dùng</span>
          </div>
        </div>
      </div>

      {/* Right Visual - Product Images */}
      <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center perspective-1000 order-1 lg:order-2">
        
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-70 blur-3xl -z-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-0 md:left-10 w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full opacity-80 animate-float-delayed z-0 blur-sm"></div>
        <div className="absolute bottom-20 right-0 md:right-10 w-10 h-10 md:w-16 md:h-16 bg-green-200 rounded-full opacity-60 animate-float z-0 blur-sm"></div>

        {/* Pack 1: Back Product Image (Smaller, behind) */}
        {/* Adjusted size from w-[220px] to w-[340px] on desktop */}
        <div className="absolute right-0 md:right-8 top-8 md:top-12 w-[220px] md:w-[360px] rotate-12 transform transition-transform hover:scale-105 hover:rotate-6 z-10 animate-float-delayed group cursor-pointer">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack khoai môn vị trứng muối" 
                className="w-full h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Pack 2: Front Product Image (Main Focus, Larger) */}
        {/* Adjusted size from w-[240px] to w-[420px] on desktop */}
        <div className="absolute left-4 md:-left-6 bottom-0 md:-bottom-8 w-[260px] md:w-[440px] -rotate-6 transform transition-transform hover:scale-105 hover:rotate-0 z-20 animate-float group cursor-pointer">
             <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-lg animate-pulse z-30 border-2 border-white/50">
               BEST SELLER
             </div>
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack khoai môn vị truyền thống" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                referrerPolicy="no-referrer"
             />
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -right-2 md:-right-8 bottom-12 md:bottom-24 bg-white/90 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-xl border border-green/20 z-30 max-w-[140px] md:max-w-[180px] animate-bounce-slight">
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-100 p-1.5 rounded-full text-green-dark">
                    <TrendingUp size={16} />
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Khuyến mãi</div>
            </div>
            <div className="text-lg md:text-2xl font-bold text-red-600 leading-none mb-1">Mua 10 Tặng 1</div>
            <div className="text-[10px] md:text-[11px] text-gray-500 leading-tight">Dành cho Đại Lý Mới</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
