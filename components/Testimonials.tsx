
import React from 'react';
import { Quote, Star, Users, Package, Map } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative">
      {/* 1. Stats Section - REAL NUMBERS */}
      <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transform md:-translate-y-12 relative z-20 mx-4 md:mx-0">
          <div className="flex flex-col items-center gap-1">
             <div className="bg-blue-50 text-blue-600 p-2 rounded-full mb-1"><Users size={20} /></div>
             <div className="text-2xl font-black text-gray-900">1.200+</div>
             <div className="text-xs text-gray-500 uppercase font-bold">Đại lý tin dùng</div>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="bg-green-50 text-green-600 p-2 rounded-full mb-1"><Package size={20} /></div>
             <div className="text-2xl font-black text-gray-900">1 Triệu+</div>
             <div className="text-xs text-gray-500 uppercase font-bold">Gói bán ra/Năm</div>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="bg-orange-50 text-orange-600 p-2 rounded-full mb-1"><Map size={20} /></div>
             <div className="text-2xl font-black text-gray-900">63</div>
             <div className="text-xs text-gray-500 uppercase font-bold">Tỉnh thành phủ sóng</div>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="bg-yellow-50 text-yellow-600 p-2 rounded-full mb-1"><Star size={20} /></div>
             <div className="text-2xl font-black text-gray-900">98%</div>
             <div className="text-xs text-gray-500 uppercase font-bold">Khách hàng hài lòng</div>
          </div>
      </div>

      {/* 2. Reviews Section */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[24px] md:rounded-[36px] px-5 py-10 md:px-10 md:py-16 text-gray-200 shadow-soft relative overflow-hidden">
        {/* Background decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Khách Hàng Nói Gì Về CVT?</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Hàng nghìn chủ cửa hàng đã tăng doanh thu nhờ Snack Khoai Môn CVT. Đây là những chia sẻ thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {[
              { 
                quote: "Vị trứng muối ăn lạ, giòn nhưng không quá mặn. Khách mua thử hay quay lại mua thêm. Hàng đi nhanh hơn mình nghĩ.", 
                author: "Chị Hoàng Hà", 
                role: "Chủ Minimart - Hà Nội",
                initials: "HH",
                color: "bg-pink-500",
                img: "https://ui-avatars.com/api/?name=Hoang+Ha&background=ec4899&color=fff"
              },
              { 
                quote: "Bổ sung thêm một lựa chọn snack cao cấp bên cạnh khoai tây chiên, bán tốt vào buổi tối. Biên lợi nhuận khá ổn.", 
                author: "Anh Tuấn", 
                role: "Chủ Quán Cafe - TP.HCM",
                initials: "AT",
                color: "bg-blue-500",
                img: "https://ui-avatars.com/api/?name=Anh+Tuan&background=3b82f6&color=fff"
              },
              { 
                quote: "Bao bì đẹp, dễ trưng bày. Hàng nhập khẩu chính ngạch nên mình yên tâm đưa vào hệ thống cửa hàng quà tặng.", 
                author: "Chị Mai Phương", 
                role: "NPP Quà Tết - Đà Nẵng",
                initials: "MP",
                color: "bg-orange-500",
                img: "https://ui-avatars.com/api/?name=Mai+Phuong&background=f97316&color=fff"
              }
          ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col gap-3 hover:bg-white/10 transition-colors shadow-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <Quote className="text-white/20" size={20} />
                  </div>
                  
                  <p className="text-[13px] leading-relaxed text-gray-300 flex-1 italic">"{item.quote}"</p>
                  
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                     <div className="w-10 h-10 rounded-full border border-white/20 p-0.5">
                       <img src={item.img} alt={item.author} className="w-full h-full rounded-full object-cover" />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-white">{item.author}</div>
                       <div className="text-[10px] text-gray-400 uppercase tracking-wide">{item.role}</div>
                     </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
