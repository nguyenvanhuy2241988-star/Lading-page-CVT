
import React from 'react';
import Button from './ui/Button';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // CẤU HÌNH ẢNH SẢN PHẨM TẠI ĐÂY
  // Bạn hãy chép ảnh vào thư mục public/images/ và đổi tên file tương ứng
  const PRODUCT_IMAGES = {
    packBack: "https://placehold.co/400x600/f97316/white?text=Goi+Vi+Trung+Muoi", // Ảnh gói phía sau (Ví dụ: Vị trứng muối)
    packFront: "https://placehold.co/400x600/a855f7/white?text=Goi+Vi+Khoai+Mon", // Ảnh gói phía trước (Ví dụ: Vị truyền thống)
  };

  return (
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center mb-24 pt-6 lg:pt-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10">
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
      <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
        
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-70 blur-3xl -z-10"></div>
        
        {/* Floating Chips Elements (Giữ lại làm hiệu ứng nền) */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-yellow-200 rounded-[50%] rotate-45 opacity-80 border border-yellow-300 animate-float-delayed z-0 shadow-sm"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-[40%] -rotate-12 opacity-60 border border-purple-300 animate-float z-0 shadow-sm"></div>

        {/* Pack 1: Back Product Image */}
        <div className="absolute right-8 md:right-24 top-4 md:top-0 w-[160px] md:w-[220px] rotate-12 transform transition-transform hover:scale-105 hover:rotate-6 z-10 animate-float-delayed group cursor-pointer">
             <img 
                src={PRODUCT_IMAGES.packBack} 
                alt="Snack khoai môn vị trứng muối" 
                className="w-full h-auto object-contain drop-shadow-2xl"
             />
        </div>

        {/* Pack 2: Front Product Image (Main Focus) */}
        <div className="absolute left-6 md:left-16 bottom-4 md:bottom-0 w-[180px] md:w-[240px] -rotate-6 transform transition-transform hover:scale-105 hover:rotate-0 z-20 animate-float group cursor-pointer">
             <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[9px] font-bold px-2 py-1 rounded shadow-lg animate-pulse z-30">
               BEST SELLER
             </div>
             <img 
                src={PRODUCT_IMAGES.packFront} 
                alt="Snack khoai môn vị truyền thống" 
                className="w-full h-auto object-contain drop-shadow-2xl"
             />
        </div>

        {/* Floating Stats Card - Updated text */}
        <div className="absolute -right-4 bottom-20 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-green/20 z-30 max-w-[160px] animate-bounce-slight">
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-100 p-1.5 rounded-full text-green-dark">
                    <TrendingUp size={16} />
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Khuyến mãi</div>
            </div>
            <div className="text-xl font-bold text-red-600">Mua 10 Tặng 1</div>
            <div className="text-[11px] text-gray-500 leading-tight">Áp dụng cho đơn hàng đầu tiên</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
