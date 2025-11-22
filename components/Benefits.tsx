
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Star, Cloud, Factory, Gift, ChevronRight, Check, ThumbsUp, Utensils } from 'lucide-react';

const Benefits: React.FC = () => {
  const scrollToForm = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Star size={18} />,
      title: 'Vị cao cấp khác biệt',
      desc: 'Trứng muối, Truffle & Jambon, Steak bò… profile vị mặn ngọt hài hòa, sang trọng.',
      color: 'text-blue-600'
    },
    {
      icon: <Cloud size={18} />,
      title: 'Giòn bùi, ít ngấy',
      desc: 'Công nghệ chiên chân không giúp giữ độ giòn xốp, không bị cứng, không hôi dầu.',
      color: 'text-green-600'
    },
    {
      icon: <Factory size={18} />,
      title: 'Nguồn hàng ổn định',
      desc: 'Nhà máy công suất 100k gói/ngày. Đảm bảo không đứt hàng dịp Tết.',
      color: 'text-purple-600'
    },
    {
      icon: <Gift size={18} />,
      title: 'Bao bì đẹp, dễ bán',
      desc: 'Thiết kế matte (nhám) cao cấp, nổi bật trên quầy kệ và set quà tặng.',
      color: 'text-orange-600'
    },
  ];

  // Link ảnh cận cảnh mới từ khách hàng
  const CLOSE_UP_IMAGE = "https://lh3.googleusercontent.com/d/14Hv9mWPrn6ERrrJmEp7rtSVY0QVOo9kT";

  return (
    <section id="benefits" className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left: Visual Image Gallery (Collage Style) */}
        <div className="relative order-2 lg:order-1">
           {/* Decorative Blobs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
           
           <div className="relative grid grid-cols-2 gap-4">
              {/* Image 1: Product Close-up (Tall) */}
              <div className="col-span-1 pt-12">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 group border-4 border-white">
                    <img 
                        src={CLOSE_UP_IMAGE}
                        alt="Cận cảnh độ giòn xốp snack khoai môn" 
                        className="w-full h-[320px] object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Cấu trúc giòn xốp</p>
                    </div>
                  </div>
              </div>

              {/* Image 2: Lifestyle (Short) */}
              <div className="col-span-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 group border-4 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1566478919030-41cb5275715c?auto=format&fit=crop&w=600&q=80" 
                        alt="Khách hàng thưởng thức" 
                        className="w-full h-[240px] object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Stat Card - Updated Content */}
                  <div className="mt-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg relative z-20">
                      <div className="flex items-center gap-2 mb-2">
                          <div className="bg-orange-100 p-1.5 rounded-full text-orange-600">
                             <Utensils size={14} />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-800">Thử thách Vị giác (Blind Test)</span>
                      </div>
                      <div className="flex items-start gap-2">
                          <div className="text-2xl font-extrabold text-green-600 leading-none">9/10</div>
                          <p className="text-xs text-gray-600 font-medium leading-tight">
                            Khách hàng chọn CVT khi che tên thương hiệu vì độ giòn xốp tự nhiên, không bị cứng.
                          </p>
                      </div>
                  </div>
              </div>
           </div>

           {/* Interactive Tag */}
           <div className="absolute top-6 right-6 z-30 animate-bounce-slight hidden md:block">
               <div className="bg-yellow-400 text-yellow-900 text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                   <ThumbsUp size={12} fill="currentColor" /> Ngon Khó Cưỡng
               </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-text-main leading-tight">
                    Vì sao khách hàng <br/>
                    <span className="text-green">mê mẩn Snack CVT?</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                    Không chỉ là món ăn vặt, CVT là trải nghiệm ẩm thực với sự kết hợp giữa nguyên liệu tự nhiên và gia vị thượng hạng.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
                {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group hover:border-green-200">
                    <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-base text-text-main mb-1">{item.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            
            <Button variant="shimmer" onClick={scrollToForm} size="lg" className="w-full sm:w-auto shadow-green/30">
                Đăng ký nhận mẫu thử miễn phí <ChevronRight size={18} />
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
