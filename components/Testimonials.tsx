import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[36px] px-6 py-10 text-gray-200 shadow-soft relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-2xl font-bold mb-2 text-white">Niềm tin từ Đối tác & Khách hàng</h2>
        <p className="text-sm text-gray-400">Sự hài lòng của khách hàng là cam kết của CVT Việt Nam.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
            { 
              quote: "Vị trứng muối ăn lạ, giòn nhưng không quá mặn. Khách mua thử hay quay lại mua thêm. Hàng đi nhanh hơn mình nghĩ.", 
              author: "Chị Hoàng Hà", 
              role: "Chủ Minimart - Hà Nội",
              initials: "HH",
              color: "bg-pink-500"
            },
            { 
              quote: "Bổ sung thêm một lựa chọn snack cao cấp bên cạnh khoai tây chiên, bán tốt vào buổi tối. Biên lợi nhuận khá ổn.", 
              author: "Anh Tuấn", 
              role: "Cafe & Cinema - TP.HCM",
              initials: "AT",
              color: "bg-blue-500"
            },
            { 
              quote: "Bao bì đẹp, dễ trưng bày. Hàng nhập khẩu chính ngạch nên mình yên tâm đưa vào hệ thống cửa hàng quà tặng.", 
              author: "Chị Mai Phương", 
              role: "NPP Quà Tết - Đà Nẵng",
              initials: "MP",
              color: "bg-orange-500"
            }
        ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 text-yellow-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="relative">
                   <Quote className="absolute -top-2 -left-2 text-white/10 transform -scale-x-100" size={32} />
                   <p className="text-[13px] leading-relaxed italic text-gray-300 relative z-10 pl-2">"{item.quote}"</p>
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                   <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                     {item.initials}
                   </div>
                   <div>
                     <div className="text-sm font-bold text-white">{item.author}</div>
                     <div className="text-[11px] text-gray-400">{item.role}</div>
                   </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;