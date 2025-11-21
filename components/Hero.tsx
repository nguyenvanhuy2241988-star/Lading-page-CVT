import React from 'react';
import Button from './ui/Button';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-green-superlight text-green-dark px-3 py-1.5 rounded-full mb-6 border border-green-200/50 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Lô hàng mới đã cập bến
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-text-main tracking-tight">
          Snack Khoai Môn <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 relative">
            Chuẩn Vị Lipu
            {/* Underline decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 7C69.6836 2.77084 137.225 1.73695 198.001 4.99999" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
          </span>
        </h1>

        <p className="text-base md:text-lg text-text-muted max-w-[520px] mb-8 leading-relaxed">
          Nhập khẩu chính ngạch & phân phối độc quyền bởi <strong>LYHU Co. Ltd</strong>. 
          Cơ hội kinh doanh lợi nhuận cao cho Nhà Phân Phối (NPP) và Cộng Tác Viên (CTV).
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full sm:w-auto shadow-xl shadow-green/20">
            Đăng ký NPP Chính thức <ArrowRight size={18} />
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

      {/* Right Visual - CSS Composition of Snack Packs */}
      <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000">
        
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-70 blur-3xl -z-10"></div>
        
        {/* Floating Chips */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-yellow-200 rounded-[50%] rotate-45 opacity-80 border border-yellow-300 animate-float-delayed z-0 shadow-sm"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-[40%] -rotate-12 opacity-60 border border-purple-300 animate-float z-0 shadow-sm"></div>

        {/* Pack 1: Salted Egg (Back) */}
        <div className="absolute right-6 md:right-16 top-8 md:top-12 w-[200px] md:w-[240px] h-[280px] md:h-[340px] bg-gradient-orange rounded-xl rotate-12 shadow-glow-orange transform transition-transform hover:scale-105 hover:rotate-6 z-10 border-t-[1px] border-white/30 flex flex-col items-center justify-center p-6 animate-float-delayed group cursor-pointer">
             <div className="w-full h-full absolute inset-0 bg-white/5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>
             <div className="w-full h-4 bg-black/10 absolute top-4 rounded-full blur-sm"></div>
             <div className="text-white font-extrabold text-4xl uppercase tracking-tighter mb-1 drop-shadow-md">CVT</div>
             <div className="text-white/90 text-[10px] tracking-[0.3em] uppercase mb-2 font-bold">Premium Snack</div>
             <div className="bg-white text-orange-dark font-bold px-3 py-1 rounded-full text-xs mb-4 shadow-sm z-10">Vị Trứng Muối</div>
             <div className="w-24 h-24 bg-white/20 rounded-full mb-4 backdrop-blur-sm flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform">
                 <div className="absolute w-16 h-16 bg-orange-400 rounded-full blur-md opacity-50"></div>
                <span className="text-4xl relative z-10">🥚</span>
             </div>
             {/* Crimped Top/Bottom Effect */}
             <div className="absolute -top-1 left-0 right-0 h-3 bg-gradient-orange" style={{clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
             <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-orange" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>
        </div>

        {/* Pack 2: Taro (Front) */}
        <div className="absolute left-4 md:left-10 bottom-10 md:bottom-16 w-[220px] md:w-[260px] h-[310px] md:h-[370px] bg-gradient-purple rounded-xl -rotate-6 shadow-glow-purple transform transition-transform hover:scale-105 hover:rotate-0 z-20 border-t-[1px] border-white/30 flex flex-col items-center justify-center p-6 animate-float group cursor-pointer">
             <div className="w-full h-full absolute inset-0 bg-white/5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>
             <div className="absolute top-6 right-4 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse z-20">
               BEST SELLER
             </div>
             <div className="text-white font-extrabold text-5xl uppercase tracking-tighter mb-1 drop-shadow-md mt-2">CVT</div>
             <div className="text-white/90 text-[10px] tracking-[0.3em] uppercase mb-3 font-bold">Premium Snack</div>
             <div className="bg-white text-purple-dark font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg z-10">Khoai Môn Tươi</div>
             <div className="w-28 h-28 bg-white/20 rounded-full mb-6 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform">
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full blur-md opacity-50"></div>
                <span className="text-5xl drop-shadow-lg relative z-10">🍠</span>
             </div>
             {/* Crimped Top/Bottom Effect */}
             <div className="absolute -top-1 left-0 right-0 h-3 bg-gradient-purple" style={{clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
             <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-purple" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -right-4 bottom-20 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-green/20 z-30 max-w-[160px] animate-bounce-slight">
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-100 p-1.5 rounded-full text-green-dark">
                    <TrendingUp size={16} />
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Sức mua</div>
            </div>
            <div className="text-2xl font-bold text-gray-800">10k+</div>
            <div className="text-[11px] text-gray-500 leading-tight">Gói bán ra trong tuần đầu mở bán</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;