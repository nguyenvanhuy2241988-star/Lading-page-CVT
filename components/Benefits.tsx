import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Star, Cloud, Factory, Gift, ChevronRight, Check } from 'lucide-react';

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

  return (
    <section id="benefits" className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left: Visual Image */}
        <div className="relative order-2 lg:order-1">
           {/* Decorative elements */}
           <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-green/10 rounded-3xl -z-10"></div>
           <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-orange/10 rounded-3xl -z-10"></div>
           
           {/* Main Image Container */}
           <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              {/* Placeholder for appetizing snack image */}
              <img 
                src="https://images.unsplash.com/photo-1621447504864-284c8d3807f6?auto=format&fit=crop&w=800&q=80" 
                alt="Snack khoai môn giòn rụm" 
                className="w-full h-[500px] object-cover object-center"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-700">Điểm mù thử vị</span>
                      <div className="flex text-yellow-500">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                      </div>
                  </div>
                  <p className="text-sm text-gray-700 font-medium italic">
                    "9/10 khách hàng thích độ giòn xốp của CVT hơn các loại snack khoai tây thông thường."
                  </p>
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
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 ${item.color}`}>
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