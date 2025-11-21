import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Check, Crown, Shield, Zap } from 'lucide-react';

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
        <div className="bg-gradient-to-b from-[#0b1b2b] to-[#1e293b] rounded-[32px] p-8 shadow-2xl relative transform md:-translate-y-4 text-white border border-gray-700">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                ĐƯỢC ĐĂNG KÝ NHIỀU NHẤT
            </div>
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-500/30">
                    <Crown size={12} /> Chuyên nghiệp
                </div>
                <h3 className="text-3xl font-extrabold text-white">NPP Vàng</h3>
                <div className="mt-2 text-sm text-gray-400">Vốn từ <span className="font-bold text-white text-lg">50 triệu</span></div>
            </div>
            <ul className="space-y-5 mb-10 text-sm text-gray-300">
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
                <li className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={12} className="text-black" /></div>
                    <span>Tặng gói POSM 3 Triệu đồng</span>
                </li>
            </ul>
            <Button variant="shimmer" size="lg" onClick={scrollToForm} className="w-full shadow-yellow-500/20">Nhận báo giá NPP</Button>
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