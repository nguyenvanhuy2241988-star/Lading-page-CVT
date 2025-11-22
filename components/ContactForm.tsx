
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Clock, AlertTriangle, TrendingUp, Loader2, CheckCircle2 } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // LINK ẢNH COMBO/THÙNG HÀNG (Thay ảnh thật của bạn vào đây)
  const COMBO_IMAGE = "https://placehold.co/600x400/f97316/white?text=Anh+Thung+Hang+Mau";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Gửi dữ liệu đến FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/nguyenvanhuy2241988@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "🔥 ĐĂNG KÝ ĐẠI LÝ MỚI - CVT SNACK",
            "Họ và tên": formData.fullName,
            "Số điện thoại": formData.phone,
            "Khu vực": formData.province,
            "Mức vốn/Loại hình": formData.type,
            "Ghi chú": formData.scale || "Không có",
            _template: "table"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', province: '', type: '', scale: '', note: '' });
        // Reset success status after 5 seconds
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert("Có lỗi kết nối, vui lòng thử lại hoặc gọi trực tiếp hotline.");
      }
    } catch (error) {
      alert("Không thể gửi đơn đăng ký. Vui lòng kiểm tra kết nối mạng.");
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Image Representation of the Product Kit */}
        <div className="relative h-[260px] bg-gradient-to-b from-orange-50 to-white rounded-3xl border border-orange-100 p-4 flex items-center justify-center overflow-hidden group mb-8">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Real Image of Combo/Box */}
            <div className="relative z-20 w-full h-full flex items-center justify-center">
                 <img 
                    src={COMBO_IMAGE} 
                    alt="Combo nhập hàng Mua 10 Tặng 1" 
                    className="w-auto h-full max-h-[220px] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform"
                 />
            </div>

            {/* Floating Tags */}
            <div className="absolute top-12 left-4 md:left-8 animate-float z-30">
                <div className="bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg border-2 border-white rotate-[-12deg] flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase">Tặng</span>
                    <span className="text-xl font-extrabold leading-none">1</span>
                    <span className="text-[8px] uppercase">Thùng</span>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 md:right-8 z-40">
                 <div className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-white animate-bounce-slight">
                    + Bộ Mẫu Thử
                 </div>
            </div>
            
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md animate-pulse z-30">
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
        
        {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-pulse-glow rounded-2xl bg-green-50 border border-green-200">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-green-700 mb-2">Đăng ký thành công!</h4>
                <p className="text-text-muted text-sm max-w-[280px]">
                    Cảm ơn quý khách. Bộ phận kinh doanh CVT sẽ liên hệ Zalo/SĐT trong vòng 30 phút.
                </p>
            </div>
        ) : (
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
                    <option value="Đại lý (3-5 triệu)">3 - 5 triệu (Thử nghiệm)</option>
                    <option value="Cửa hàng (10-20 triệu)">10 - 20 triệu (Cửa hàng)</option>
                    <option value="NPP (Trên 50 triệu)">Trên 50 triệu (Nhà Phân Phối)</option>
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
                <Button 
                    type="submit" 
                    variant="shimmer" 
                    disabled={isSubmitting}
                    className="w-full justify-center text-base py-4 shadow-xl shadow-green/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <><Loader2 className="animate-spin" size={20} /> Đang gửi...</>
                    ) : (
                        <><TrendingUp size={20} className="group-hover:animate-bounce" /> Gửi đăng ký & Nhận ưu đãi 10+1</>
                    )}
                </Button>
                <div className="flex items-center justify-center gap-2 mt-3 opacity-70">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-[10px] text-text-muted text-center">
                        Chuyên viên sẽ liên hệ báo giá sỉ ngay lập tức.
                    </p>
                </div>
            </div>
            </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
