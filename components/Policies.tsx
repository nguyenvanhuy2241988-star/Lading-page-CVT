
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Check, Crown, Shield, Zap, Flame, Gift } from 'lucide-react';

const Policies: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="policies" className="mb-24">
      <SectionHeading
        title="Đặc Quyền Đối Tác Chính Thức"
        description="Cơ chế chiết khấu theo cấp bậc – Nhập càng nhiều, lợi nhuận càng khủng."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 items-end">
        
        {/* Silver Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-card relative">
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Shield size={12} /> Khởi nghiệp
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Đại Lý Bạc</h3>
                <div className="mt-2 text-sm text-gray-500">Vốn từ <span className="font-bold text-gray-900">5 - 20 triệu</span></div>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Chiết khấu cơ bản <strong>25%</strong></span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Hỗ trợ hình ảnh, bài đăng FB</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Free ship đơn đầu tiên</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} className="w-full">Đăng ký Đại Lý</Button>
        </div>

        {/* Gold Tier (Highlighted) */}
        <div className="bg-gradient-to-b from-[#0b1b2b] to-[#1e293b] rounded-[32px] p-8 shadow-2xl relative transform md:-translate-y-4 text-white border border-gray-700 overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-6 py-1 rounded-b-lg shadow-lg z-20 uppercase tracking-wider">
                Best Seller
            </div>
            
            <div className="text-center mb-6 pt-4">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-500/30">
                    <Crown size={12} /> Chuyên nghiệp
                </div>
                <h3 className="text-3xl font-extrabold text-white">NPP Vàng</h3>
                <div className="mt-2 text-sm text-gray-400">Vốn từ <span className="font-bold text-white text-lg">50 triệu</span></div>
            </div>

            {/* Scarcity Bar */}
            <div className="bg-white/10 rounded-lg p-3 mb-6 border border-white/10">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wide mb-1.5 text-gray-300">
                    <span className="flex items-center gap-1 text-red-400"><Flame size={12} fill="currentColor" /> Sắp hết suất tháng này</span>
                    <span>14/15</span>
                </div>
                <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[93%] shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-pulse"></div>
                </div>
            </div>

            <ul className="space-y-4 mb-6 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span>Chiết khấu khủng <strong>up to 45%</strong></span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span>Thưởng quý + Du lịch hàng năm</span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span><strong>Bảo hộ vùng bán</strong> độc quyền</span>
                </li>
            </ul>

            {/* Highlighted Gift Box - Visual Emphasis */}
            <div className="bg-gradient-to-r from-red-900/60 to-red-800/40 border border-red-500/40 rounded-xl p-3 mb-8 flex items-center gap-3 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-600/10 animate-pulse"></div>
                <div className="bg-red-600 p-2 rounded-lg text-white shadow-lg shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                     <Gift size={20} className="animate-shake" />
                </div>
                <div className="relative z-10">
                     <div className="text-[10px] text-red-300 uppercase font-bold tracking-wider mb-0.5">Quà tặng giới hạn</div>
                     <div className="text-sm font-bold text-white leading-tight">Gói POSM trị giá <span className="text-yellow-400 text-base block sm:inline">3.000.000đ</span></div>
                </div>
            </div>

            <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full shadow-yellow-500/20 border border-yellow-500/50 text-yellow-50 font-extrabold tracking-wide">
                Đăng Ký Giữ Suất
            </Button>
        </div>

        {/* Diamond Tier */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-card relative">
             <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Zap size={12} /> VIP Partner
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Độc Quyền Tỉnh</h3>
                <div className="mt-2 text-sm text-gray-500">Cam kết doanh số</div>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-purple-500 mt-0.5 shrink-0" />
                    <span>Chiết khấu cao nhất hệ thống</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-purple-500 mt-0.5 shrink-0" />
                    <span>Đội ngũ sales hãng hỗ trợ thị trường</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={16} className="text-purple-500 mt-0.5 shrink-0" />
                    <span>Ngân sách Marketing riêng cho Tỉnh</span>
                </li>
            </ul>
            <Button variant="outline" onClick={scrollToForm} className="w-full">Liên hệ Giám đốc</Button>
        </div>

      </div>
    </section>
  );
};

export default Policies;
