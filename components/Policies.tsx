
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
        title="Chính Sách & Lợi Nhuận"
        description="Nhập hàng là có lãi ngay với cơ chế thưởng Mua 10 Tặng 1. Không lo tồn kho."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-10 items-end">
        
        {/* Silver Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Shield size={12} /> Khởi nghiệp
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">Đại Lý Bạc</h3>
                <div className="mt-1 text-sm text-gray-500 font-medium">Vốn: <span className="text-gray-900">3 - 5 triệu</span></div>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Chiết khấu <strong>25%</strong></span>
                </li>
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Tặng <strong>Bộ mẫu thử</strong></span>
                </li>
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Đổi trả trong 30 ngày</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} size="sm" className="w-full">Đăng ký</Button>
        </div>

        {/* Gold Tier (Highlighted) */}
        <div className="bg-gradient-to-b from-[#0b1b2b] to-[#1e293b] rounded-[32px] p-8 shadow-2xl shadow-blue-900/20 relative transform md:-translate-y-4 text-white border border-gray-700 overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-bold px-4 py-1 rounded-b-lg shadow-lg z-20 uppercase tracking-wider">
                Khuyên dùng
            </div>
            
            <div className="text-center mb-5 pt-2">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 border border-yellow-500/30">
                    <Crown size={12} /> Chuyên nghiệp
                </div>
                <h3 className="text-2xl font-extrabold text-white">NPP Vàng</h3>
                <div className="mt-1 text-sm text-gray-400">Vốn từ: <span className="font-bold text-white text-lg">20 triệu</span></div>
            </div>

            {/* Scarcity Bar */}
            <div className="bg-white/5 rounded-lg p-2.5 mb-5 border border-white/10">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide mb-1.5 text-gray-400">
                    <span className="flex items-center gap-1 text-red-400"><Flame size={12} fill="currentColor" /> Sắp hết suất</span>
                    <span>45/50</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[90%] animate-pulse"></div>
                </div>
            </div>

            <ul className="space-y-3 mb-6 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span>Chiết khấu <strong>tới 40%</strong></span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span><strong>Độc quyền</strong> vùng bán</span>
                </li>
                 <li className="flex items-center gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 shrink-0"><Truck size={12} className="text-black" /></div>
                    <span><strong>Free Ship</strong> toàn quốc</span>
                </li>
            </ul>

            {/* Highlighted Gift Box - Clean */}
            <div className="bg-green-900/40 border border-green-500/30 rounded-xl p-3 mb-6 flex items-center gap-3 backdrop-blur-sm">
                <div className="bg-green-600 p-2 rounded-lg text-white shadow-lg shrink-0">
                     <TrendingUp size={20} />
                </div>
                <div>
                     <div className="text-[9px] text-green-400 uppercase font-bold tracking-wider mb-0.5">Gói thưởng nóng</div>
                     <div className="text-sm font-bold text-white">
                        Mua 10 Tặng 1 <span className="font-normal text-gray-300 text-xs">(Lời ngay 10%)</span>
                     </div>
                </div>
            </div>

            <Button variant="shimmer" size="md" onClick={scrollToForm} className="w-full shadow-yellow-500/20 border border-yellow-500/50 text-yellow-50 font-bold tracking-wide">
                Nhập Hàng Ngay
            </Button>
        </div>

        {/* Diamond Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
             <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Zap size={12} /> VIP Partner
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">Tổng Thầu</h3>
                <div className="mt-1 text-sm text-gray-500 font-medium">Cam kết doanh số</div>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Chiết khấu <strong>VVIP</strong></span>
                </li>
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Thưởng quý/năm hấp dẫn</span>
                </li>
                <li className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Hỗ trợ nhân sự Sale</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} size="sm" className="w-full">Liên hệ riêng</Button>
        </div>
      </div>
    </section>
  );
};

export default Policies;
