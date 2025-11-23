
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Check, Crown, Shield, Zap, Flame, TrendingUp, Truck } from 'lucide-react';

const Policies: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="policies" className="mb-24">
      <SectionHeading
        title="Chính Sách Nhập Hàng & Lợi Nhuận"
        description="Không lo chi phí làm kệ trưng bày. Nhập hàng là có lãi ngay với cơ chế thưởng hàng trực tiếp Mua 10 Tặng 1."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 items-end">
        
        {/* Silver Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-card relative">
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Shield size={12} /> Khởi nghiệp
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Đại Lý Bạc</h3>
                <div className="mt-2 text-sm text-gray-500">Vốn từ <span className="font-bold text-gray-900">3 - 5 triệu</span></div>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Chiết khấu cơ bản <strong>25%</strong></span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Tặng <strong>Bộ mẫu thử</strong> (mời khách)</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Hỗ trợ đổi trả trong 30 ngày</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} className="w-full">Đăng ký Đại Lý</Button>
        </div>

        {/* Gold Tier (Highlighted) */}
        <div className="bg-gradient-to-b from-[#0b1b2b] to-[#1e293b] rounded-[32px] p-8 shadow-2xl relative transform md:-translate-y-4 text-white border border-gray-700 overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-6 py-1 rounded-b-lg shadow-lg z-20 uppercase tracking-wider">
                Lợi nhuận cao
            </div>
            
            <div className="text-center mb-6 pt-4">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-500/30">
                    <Crown size={12} /> Chuyên nghiệp
                </div>
                <h3 className="text-3xl font-extrabold text-white">NPP Vàng</h3>
                <div className="mt-2 text-sm text-gray-400">Vốn từ <span className="font-bold text-white text-lg">20 triệu</span></div>
            </div>

            {/* Scarcity Bar */}
            <div className="bg-white/10 rounded-lg p-3 mb-6 border border-white/10">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wide mb-1.5 text-gray-300">
                    <span className="flex items-center gap-1 text-red-400"><Flame size={12} fill="currentColor" /> Sắp hết suất Mua 10 Tặng 1</span>
                    <span>45/50</span>
                </div>
                <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[90%] shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-pulse"></div>
                </div>
            </div>

            <ul className="space-y-4 mb-6 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span>Chiết khấu nhập hàng <strong>up to 40%</strong></span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span><strong>Bảo hộ vùng bán</strong> độc quyền</span>
                </li>
                 <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Truck size={12} className="text-black" /></div>
                    <span><strong>Free Ship</strong> toàn quốc</span>
                </li>
            </ul>

            {/* Highlighted Gift Box - Visual Emphasis - CONCRETE ITEMS */}
            <div className="bg-gradient-to-r from-green-900/60 to-green-800/40 border border-green-500/40 rounded-xl p-4 mb-8 flex items-start gap-3 backdrop-blur-sm relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-green-600/10 animate-pulse"></div>
                <div className="bg-green-600 p-2.5 rounded-lg text-white shadow-lg shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                     <TrendingUp size={24} />
                </div>
                <div className="relative z-10">
                     <div className="text-[10px] text-green-300 uppercase font-bold tracking-wider mb-1">Gói kích cầu doanh số</div>
                     <div className="text-sm font-bold text-white leading-tight space-y-1">
                        <div className="flex items-center gap-1.5"><Check size={12} className="text-yellow-400"/> Mua 10 Tặng 1 (Lời ngay 10%)</div>
                        <div className="flex items-center gap-1.5"><Check size={12} className="text-yellow-400"/> Tặng Bộ Mẫu Thử (Mời khách)</div>
                     </div>
                </div>
            </div>

            <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full shadow-yellow-500/20 border border-yellow-500/50 text-yellow-50 font-extrabold tracking-wide">
                Nhập Hàng Ngay
            </Button>
        </div>

        {/* Diamond Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-card relative">
             <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Zap size={12} /> VIP Partner
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Tổng Thầu</h3>
                <div className="mt-2 text-sm text-gray-500">Cam kết doanh số</div>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Chiết khấu <strong>VVIP</strong> (Thỏa thuận)</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Thưởng quý, thưởng năm hấp dẫn</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Hỗ trợ Marketing & Sale tại điểm bán</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} className="w-full">Liên hệ hợp tác</Button>
        </div>
      </div>
    </section>
  );
};

export default Policies;
