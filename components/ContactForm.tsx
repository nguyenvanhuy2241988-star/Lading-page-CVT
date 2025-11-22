
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Clock, Gift, AlertTriangle, Check, Package, TrendingUp } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: '',
    type: '',
    scale: '',
    note: ''
  });

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn ${formData.fullName} đã đăng ký. Chúng tôi sẽ liên hệ tư vấn CTKM Mua 10 Tặng 1 qua SĐT ${formData.phone} ngay!`);
    setFormData({ fullName: '', phone: '', province: '', type: '', scale: '', note: '' });
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start mb-16">
      {/* Left Visual - The Starter Kit */}
      <div className="pt-4">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 animate-pulse">
            <AlertTriangle size={14} />
            Ưu đãi áp dụng cho đơn hàng đầu tiên
        </div>
        <h2 className="text-3xl font-extrabold mb-4 text-text-main leading-tight">
          Đăng ký ngay hôm nay <br/>
          <span className="text-green-dark">Nhận Vốn Hàng Hóa</span>
        </h2>
        <p className="text-sm text-text-muted mb-8">
            Chúng tôi hiểu khó khăn của bạn. Thay vì tặng kệ (phải chờ sản xuất), CVT tặng thẳng sản phẩm Mua 10 Tặng 1 để bạn bán lấy lời ngay.
        </p>

        {/* CSS Composition of the Product Kit - EASIER TO IMPLEMENT */}
        <div className="relative h-[260px] bg-gradient-to-b from-orange-50 to-white rounded-3xl border border-orange-100 p-6 flex items-center justify-center overflow-hidden group mb-8">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Main Box (Thùng hàng) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-32 bg-[#d97706] rounded-lg z-20 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform border-t border-[#f59e0b]">
                 {/* Box Details */}
                 <div className="absolute inset-2 border-2 border-dashed border-black/10 rounded"></div>
                 <div className="text-center text-white">
                    <Package size={32} className="mx-auto mb-1 opacity-80" />
                    <div className="font-black text-lg leading-none tracking-tight">MUA 10</div>
                    <div className="text-[10px] font-medium opacity-90 uppercase mt-0.5">Thùng tiêu chuẩn</div>
                 </div>
                 
                 {/* Side shading */}
                 <div className="absolute -right-4 top-2 bottom-0 w-4 bg-[#b45309] origin-left skew-y-[45deg] rounded-r-sm"></div>
                 <div className="absolute -top-4 left-2 right-0 h-4 bg-[#f59e0b] origin-bottom skew-x-[45deg] rounded-t-sm"></div>
            </div>

            {/* Free Item (Tặng 1) */}
            <div className="absolute top-12 left-12 md:left-24 animate-float z-30">
                <div className="bg-green-600 text-white px-3 py-4 rounded-lg shadow-lg border-2 border-white rotate-[-12deg] flex flex-col items-center">
                    <span className="text-xs font-bold uppercase">Tặng</span>
                    <span className="text-2xl font-extrabold leading-none">1</span>
                    <span className="text-[8px] uppercase">Thùng</span>
                </div>
            </div>

            {/* Samples (Gói dùng thử) */}
            <div className="absolute bottom-4 right-4 md:right-16 z-40">
                 <div className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-white animate-bounce-slight">
                    + Bộ Mẫu Thử
                 </div>
            </div>
            
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md animate-pulse">
                FREE SHIP
            </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm flex items-center justify-between">
           <div>
               <div className="text-xs text-gray-500 font-medium mb-1">Đã đăng ký hôm nay</div>
               <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                       </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-700">
                       +24
                   </div>
               </div>
           </div>
           <div className="text-right">
               <div className="text-xs text-gray-500 font-medium mb-1">Suất ưu đãi còn lại</div>
               <div className="text-2xl font-extrabold text-red-600">03</div>
           </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Timer Badge */}
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-2">
            <Clock size={14} className="animate-spin-slow" />
            Ưu đãi kết thúc: {formatTime(timeLeft)}
        </div>

        <h3 className="text-xl font-bold mb-6 mt-2">Form Đăng Ký Nhanh</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-main">Họ & tên <span className="text-danger">*</span></label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange}
                required 
                placeholder="Nhập họ tên" 
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-main">Số điện thoại <span className="text-danger">*</span></label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone} 
                onChange={handleChange}
                required 
                placeholder="0909 xxx xxx" 
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-main">Tỉnh / Thành phố <span className="text-danger">*</span></label>
              <input 
                type="text" 
                name="province"
                value={formData.province} 
                onChange={handleChange}
                required 
                placeholder="VD: Hà Nội" 
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-main">Vốn dự kiến <span className="text-danger">*</span></label>
              <select 
                name="type"
                value={formData.type} 
                onChange={handleChange}
                required 
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all appearance-none"
              >
                <option value="">Chọn mức vốn...</option>
                <option value="daily">3 - 5 triệu (Thử nghiệm)</option>
                <option value="daily_plus">10 - 20 triệu (Cửa hàng)</option>
                <option value="npp">Trên 50 triệu (Nhà Phân Phối)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-main">Ghi chú thêm</label>
            <textarea 
              name="scale"
              value={formData.scale} 
              onChange={handleChange}
              placeholder="VD: Tôi muốn nhập thử 1 thùng vị Trứng muối về bán thử..." 
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all min-h-[80px] resize-y"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="shimmer" className="w-full justify-center text-base py-4 shadow-xl shadow-green/20 group">
                <TrendingUp size={20} className="group-hover:animate-bounce" /> Gửi đăng ký & Nhận ưu đãi 10+1
            </Button>
            <div className="flex items-center justify-center gap-2 mt-3 opacity-70">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] text-text-muted text-center">
                    Chuyên viên sẽ liên hệ báo giá sỉ ngay lập tức.
                </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
