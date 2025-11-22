
import React from 'react';
import Button from './ui/Button';
import { MapPin, ArrowRight, Plane, Factory, ShieldCheck, Video } from 'lucide-react';

const Journey: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Real Factory Images provided by user
  const FACTORY_IMAGES = {
    main: "https://lh3.googleusercontent.com/d/1pGY4fVPMa05VKnABvUAhyNP4vELPO6c8", // Production Line / Overview
    worker: "https://lh3.googleusercontent.com/d/16sPT6vYB5MAWeiZb3NUWfCvB_jAjvX5b", // Workers
    raw: "https://lh3.googleusercontent.com/d/1UscUs0gj7chRaOKkZjOoiepUU_3Od45G", // Raw Material
  };

  return (
    <section id="journey" className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Visual Area: Factory Collage */}
        <div className="flex flex-col gap-4">
            
            {/* Main Card: Factory Overview */}
            <div className="relative rounded-[32px] overflow-hidden h-[320px] shadow-soft group bg-gray-900">
                <img 
                    src={FACTORY_IMAGES.main} 
                    alt="Dây chuyền sản xuất snack khoai môn"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center animate-float">
                    <Plane className="text-white" size={20} />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-green-600 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg border border-white/20 flex items-center gap-1">
                            <ShieldCheck size={12} /> Chính ngạch 100%
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 leading-tight text-white">Quy mô nhà máy hiện đại, khép kín</h3>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div>
                            <div className="text-xl font-bold text-green-400">100k</div>
                            <div className="text-[10px] text-gray-300 uppercase">Gói / Ngày</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-orange-400">48h</div>
                            <div className="text-[10px] text-gray-300 uppercase">Vận chuyển</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub Images Grid */}
            <div className="grid grid-cols-2 gap-4 h-[180px]">
                <div className="relative rounded-[24px] overflow-hidden group bg-gray-100 shadow-sm border border-gray-100">
                     <img 
                        src={FACTORY_IMAGES.raw} 
                        alt="Nguyên liệu khoai môn tươi"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] text-gray-300 uppercase font-bold mb-0.5">Bước 1</div>
                        <div className="text-sm font-bold text-white leading-tight">Nguyên liệu tuyển chọn</div>
                    </div>
                </div>
                <div className="relative rounded-[24px] overflow-hidden group bg-gray-100 shadow-sm border border-gray-100">
                     <img 
                        src={FACTORY_IMAGES.worker} 
                        alt="Công nhân sản xuất"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                    />
                    {/* Play Icon Overlay suggestion for 'Video' feel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                         <Video size={18} className="text-white ml-1" fill="currentColor" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] text-gray-300 uppercase font-bold mb-0.5">Bước 2</div>
                        <div className="text-sm font-bold text-white leading-tight">Chế biến & Đóng gói</div>
                    </div>
                </div>
            </div>

        </div>

        {/* Steps List */}
        <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-card border border-[#e2e8f0e6] flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-text-main">Quy trình kiểm soát 3 bước</h3>
          <p className="text-sm text-text-muted mb-8 leading-relaxed">
            CVT được Công ty TNHH LYHU nhập khẩu chính ngạch. Chúng tôi không chỉ bán sản phẩm, chúng tôi bán sự an tâm về pháp lý và nguồn gốc.
          </p>

          <div className="space-y-6 relative mb-8">
            {/* Connecting Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-100 -z-10"></div>

            {[
                { 
                    icon: <Factory size={18} />, 
                    title: 'Tuyển chọn & Chế biến', 
                    desc: 'Khoai môn củ to, thơm bùi, ít xơ. Công nghệ chiên chân không giữ 98% dưỡng chất.',
                    color: 'bg-purple-100 text-purple-600' 
                },
                { 
                    icon: <ShieldCheck size={18} />, 
                    title: 'Kiểm định & Pháp lý', 
                    desc: 'Đầy đủ CO, CQ, kiểm định VSATTP. Tem phụ tiếng Việt đầy đủ, xuất hóa đơn VAT 100%.',
                    color: 'bg-blue-100 text-blue-600' 
                },
                { 
                    icon: <MapPin size={18} />, 
                    title: 'Phân phối & Hỗ trợ', 
                    desc: 'Hàng có sẵn tại kho Hà Nội & HCM. Giao hàng toàn quốc, hỗ trợ đổi trả nếu lỗi bao bì.',
                    color: 'bg-green-100 text-green-600' 
                }
            ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm ${step.color} z-10`}>
                        {step.icon}
                    </div>
                    <div className="pt-1">
                        <div className="text-base font-bold text-text-main">{step.title}</div>
                        <div className="text-sm text-text-muted mt-1 leading-relaxed">{step.desc}</div>
                    </div>
                </div>
            ))}
          </div>

          <div className="mt-auto">
            <Button variant="outline" onClick={scrollToForm} className="w-full sm:w-auto group">
              Nhận hồ sơ pháp lý sản phẩm <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
