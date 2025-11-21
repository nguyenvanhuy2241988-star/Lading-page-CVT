import React from 'react';
import Button from './ui/Button';
import { MapPin, ArrowRight, Plane, Factory, ShieldCheck } from 'lucide-react';

const Journey: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="journey" className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Visual Area: Image + Stats */}
        <div className="relative rounded-[32px] overflow-hidden min-h-[400px] shadow-soft group">
            {/* Background Image */}
            <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                alt="Kho vận logistic"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-500 text-xs font-bold rounded-full uppercase tracking-wider">Chính ngạch 100%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Từ Nông Trại Lipu Đến Kho Hàng Việt Nam</h3>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                    <div>
                        <div className="text-2xl font-bold text-green-400">100k</div>
                        <div className="text-xs text-gray-300">Gói / Ngày</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-orange-400">48h</div>
                        <div className="text-xs text-gray-300">Xử lý đơn hàng</div>
                    </div>
                </div>
            </div>

            {/* Floating Plane Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center animate-float">
                <Plane className="text-white" size={20} />
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
                    desc: 'Khoai môn Lipu chính gốc, củ to, ít xơ. Công nghệ chiên chân không giữ 98% dưỡng chất.',
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