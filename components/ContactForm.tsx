import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Clock, Gift, AlertTriangle, ArrowRight } from 'lucide-react';

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
    alert(`Cảm ơn ${formData.fullName} đã đăng ký. Chúng tôi sẽ liên hệ qua SĐT ${formData.phone} sớm nhất!`);
    setFormData({ fullName: '', phone: '', province: '', type: '', scale: '', note: '' });
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start mb-16">
      {/* Left Visual - The Starter Kit */}
      <div className="pt-4">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 animate-pulse">
            <AlertTriangle size={14} />
            Sắp kết thúc đợt đăng ký tháng này
        </div>
        <h2 className="text-3xl font-extrabold mb-4 text-text-main leading-tight">
          Đăng ký hôm nay <br/>
          <span className="text-green-dark">Nhận ngay Bộ "Khởi Nghiệp"</span>
        </h2>
        <p className="text-sm text-text-muted mb-8">
            Để hỗ trợ NPP bán hàng thần tốc, LYHU tặng kèm bộ công cụ bán hàng chuyên nghiệp trị giá <strong>3.000.000đ</strong>.
        </p>

        {/* CSS Composition of the Gift Set */}
        <div className="relative h-[260px] bg-gradient-to-b from-blue-50 to-white rounded-3xl border border-blue-100 p-6 flex items-end justify-center overflow-hidden group mb-8">
            {/* Background Confetti */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Gift Box */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-28 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl z-20 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                 <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.2)_50%,transparent_55%)]"></div>
                 <div className="text-white font-bold text-4xl drop-shadow-md">🎁</div>
                 {/* Ribbon */}
                 <div className="absolute w-8 h-full bg-yellow-400/80 left-1/2 -translate-x-1/2 top-0 shadow-sm"></div>
                 <div className="absolute h-8 w-full bg-yellow-400/80 top-1/2 -translate-y-1/2 left-0 shadow-sm"></div>
            </div>

            {/* Standee (Left) */}
            <div className="absolute bottom-8 left-8 md:left-16 w-16 h-40 bg-white border-2 border-green-500 rounded-md transform -rotate-6 shadow-lg z-10 flex flex-col items-center p-1">
                <div className="w-full h-1/2 bg-green-500 rounded-sm mb-1"></div>
                <div className="w-full h-full bg-gray-100 text-[6px] text-center p-1 leading-tight text-gray-400">Standee Design</div>
            </div>

            {/* Catalog (Right) */}
            <div className="absolute bottom-6 right-8 md:right-16 w-24 h-32 bg-white border border-gray-200 rounded-md transform rotate-12 shadow-lg z-10 p-2 flex flex-col">
                 <div className="w-full h-16 bg-purple-100 rounded-sm mb-2"></div>
                 <div className="w-3/4 h-2 bg-gray-200 rounded-full mb-1"></div>
                 <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
            </div>
            
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md animate-bounce">
                FREE 100%
            </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-green-100 shadow-sm flex items-center justify-between">
           <div>
               <div className="text-xs text-gray-500 font-medium mb-1">Đã đăng ký hôm nay</div>
               <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                       </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-700">
                       +18
                   </div>
               </div>
           </div>
           <div className="text-right">
               <div className="text-xs text-gray-500 font-medium mb-1">Suất ưu đãi còn lại</div>
               <div className="text-2xl font-extrabold text-red-600">05</div>
           </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Timer Badge */}
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-2">
            <Clock size={14} className="animate-spin-slow" />
            Đóng đơn sau: {formatTime(timeLeft)}
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
              <label className="text-sm font-semibold text-text-main">Bạn là <span className="text-danger">*</span></label>
              <select 
                name="type"
                value={formData.type} 
                onChange={handleChange}
                required 
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all appearance-none"
              >
                <option value="">Chọn mô hình...</option>
                <option value="npp">Nhà phân phối (Vốn {'>'} 50tr)</option>
                <option value="daily">Đại lý / Cửa hàng (Vốn 5-20tr)</option>
                <option value="ctv">Cộng tác viên (Không vốn)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-main">Quy mô hiện tại</label>
            <textarea 
              name="scale"
              value={formData.scale} 
              onChange={handleChange}
              placeholder="VD: Đang phân phối bánh kẹo cho 500 tạp hóa tại Hưng Yên..." 
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all min-h-[80px] resize-y"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="shimmer" className="w-full justify-center text-base py-4 shadow-xl shadow-green/20 group">
                <Gift size={20} className="group-hover:animate-bounce" /> Gửi đăng ký & Nhận quà ngay
            </Button>
            <div className="flex items-center justify-center gap-2 mt-3 opacity-70">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] text-text-muted text-center">
                    Chuyên viên sẽ liên hệ lại sau 5 phút.
                </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;