import React, { useState } from 'react';
import Button from './ui/Button';
import { Send, CheckCircle2, FileText, Download, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: '',
    type: '',
    scale: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nguyenvanhuy2241988@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            _subject: "🚀 KHÁCH TẢI BÁO GIÁ GẤP - CVT",
            "Họ tên": formData.fullName,
            "SĐT": formData.phone,
            "Khu vực": formData.province,
            "Loại hình": formData.type,
            "Ghi chú": formData.scale || "Không có",
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', province: '', type: '', scale: '', note: '' });
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert("Có lỗi kết nối, vui lòng thử lại.");
      }
    } catch (error) {
      alert("Lỗi mạng. Vui lòng kiểm tra lại đường truyền.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start mb-16">
      
      {/* Left Visual */}
      <div className="pt-4">
        <div className="flex items-center gap-2 text-red-600 font-bold mb-3 uppercase tracking-wider text-xs">
            <AlertCircle size={16} />
            <span>Chỉ còn 15 suất ưu đãi tháng này</span>
        </div>
        <h2 className="text-3xl font-extrabold mb-4 text-text-main leading-tight uppercase">
          TẢI BÁO GIÁ SỈ <br/>
          <span className="text-red-600">NHẬP HÀNG NGAY</span>
        </h2>
        <p className="text-text-muted mb-8 text-base leading-relaxed">
            Hoàn tất biểu mẫu bên cạnh để nhận ngay file Báo Giá Sỉ Mới Nhất và Chính sách "Mua 10 Tặng 1" qua Zalo.
        </p>

        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
             <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <FileText size={18} /> Tài liệu bạn sẽ nhận được:
             </h4>
             <ul className="space-y-2 text-sm text-gray-700 mb-4">
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600"/> Bảng giá sỉ 5 mốc số lượng</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600"/> Catalog hình ảnh sản phẩm HD</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600"/> Chứng nhận VSATTP & Công bố</li>
             </ul>
             <div className="text-sm font-bold text-red-600 pt-3 border-t border-orange-200">
                Hotline Ưu Tiên: 0969.15.30.15
             </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
            Đăng ký ngay để giữ ưu đãi
        </div>

        {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-green-50 rounded-2xl border border-green-100">
                <CheckCircle2 size={48} className="text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-green-800 mb-2">Đăng ký thành công!</h4>
                <p className="text-gray-600 text-sm">Bộ phận kinh doanh sẽ gửi báo giá qua Zalo SĐT bạn vừa nhập trong 5 phút nữa.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Họ & tên <span className="text-red-500">*</span></label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Nguyễn Văn A" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Số điện thoại (Zalo) <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="09xxxxxxx" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Khu vực</label>
                    <input type="text" name="province" value={formData.province} onChange={handleChange} required placeholder="Tỉnh/Thành phố" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mô hình</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all">
                        <option value="">Chọn mô hình...</option>
                        <option value="Đại lý / NPP">Nhà Phân Phối / Đại Lý</option>
                        <option value="Tạp hóa / Minimart">Tạp hóa / Minimart</option>
                        <option value="Cafe / F&B">Quán Cafe / Trà sữa / F&B</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center py-4 text-base shadow-lg bg-gradient-to-r from-red-600 to-orange-600 border-none hover:shadow-red-500/40 transform hover:-translate-y-1 uppercase font-extrabold tracking-wide">
                {isSubmitting ? 'Đang xử lý...' : <><Download size={20} /> TẢI BÁO GIÁ NGAY</>}
            </Button>
            <p className="text-xs text-center text-gray-400 mt-2 italic">Cam kết bảo mật thông tin 100%</p>
            </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;