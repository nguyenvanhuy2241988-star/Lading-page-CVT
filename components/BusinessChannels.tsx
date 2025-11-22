
import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Store, Coffee, Film, Gift, Calculator, ArrowUpRight, CheckCircle2, DollarSign, Download } from 'lucide-react';

const BusinessChannels: React.FC = () => {
  // State cho bộ tính lợi nhuận
  const [activeScenario, setActiveScenario] = useState<'starter' | 'shop' | 'npp'>('shop');

  const scenarios = {
    starter: {
      id: 'starter',
      name: 'Thử Nghiệm',
      von: '3.000.000 đ',
      loinhuan: '750.000 đ',
      phantram: '25%',
      desc: 'Phù hợp cá nhân bán online, CTV, mua về mời khách.',
      color: 'bg-gray-600'
    },
    shop: {
      id: 'shop',
      name: 'Tạp Hóa / Cafe',
      von: '10.000.000 đ',
      loinhuan: '3.500.000 đ',
      phantram: '35%',
      desc: 'Phù hợp Minimart, Quán Cafe, Rạp phim, Cửa hàng quà tặng.',
      color: 'bg-green-600'
    },
    npp: {
      id: 'npp',
      name: 'Nhà Phân Phối',
      von: '50.000.000 đ',
      loinhuan: '20.000.000 đ+',
      phantram: '40%++',
      desc: 'Phân phối độc quyền khu vực, đổ buôn cho đại lý con.',
      color: 'bg-yellow-600'
    }
  };

  const current = scenarios[activeScenario];

  // Images from Unsplash
  const channels = [
    { 
        icon: <Store size={24} />, 
        title: 'Minimart & Tạp hoá', 
        desc: 'Sản phẩm dễ bán chéo tại quầy thu ngân.', 
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Gift size={24} />, 
        title: 'Shop Quà tặng', 
        desc: 'Phù hợp set quà Tết, combo sinh nhật.', 
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Coffee size={24} />, 
        title: 'F&B / Cafe', 
        desc: 'Ăn kèm đồ uống, tăng giá trị bill 20%.', 
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Film size={24} />, 
        title: 'Rạp phim / Giải trí', 
        desc: 'Lựa chọn cao cấp thay thế bắp rang.', 
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80'
    },
  ];

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="business" className="mb-24">
      <SectionHeading
        title="Đa dạng kênh bán - Tối ưu lợi nhuận"
        description="Dù anh/chị đang kinh doanh mô hình nào, CVT luôn có giải pháp trưng bày và bán hàng phù hợp."
      />
      
      {/* Image Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {channels.map((item, idx) => (
          <div key={idx} className="group relative h-[280px] rounded-[28px] overflow-hidden shadow-card cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white relative z-10">
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/10 text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Element: Profit Calculator */}
      <div className="bg-[#0f172a] rounded-[32px] p-6 lg:p-10 shadow-2xl text-white relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            
            {/* Left: Introduction & CTA */}
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-500/20">
                  <Calculator size={14} /> Dự tính lợi nhuận
                </div>
                <h3 className="font-bold text-3xl md:text-4xl leading-tight">
                    Bạn bỏ ra <span className="text-white">1 đồng vốn</span>,<br/>
                    thu về bao nhiêu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">đồng lời?</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">
                    Chúng tôi minh bạch về con số. Hãy chọn mức vốn bạn dự định đầu tư bên cạnh để xem lợi nhuận ước tính ngay lập tức.
                </p>
                <p className="text-sm text-slate-400 italic border-l-2 border-slate-600 pl-4">
                    *Lưu ý: Số liệu dưới đây là ước tính dựa trên giá bán lẻ đề xuất. Thực tế có thể cao hơn nhờ các chương trình thưởng tháng/quý.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                    <Button onClick={scrollToForm} variant="shimmer" className="w-full sm:w-auto">
                        <Download size={18} /> Tải bảng giá chi tiết (Excel)
                    </Button>
                </div>
            </div>

            {/* Right: The Interactive Calculator */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-inner flex flex-col h-full">
                
                {/* Tabs */}
                <div className="flex p-1 bg-black/20 rounded-xl mb-6">
                    {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveScenario(key)}
                            className={`flex-1 py-2 px-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                                activeScenario === key 
                                ? 'bg-white text-green-900 shadow-lg' 
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {scenarios[key].name}
                        </button>
                    ))}
                </div>

                {/* Result Display */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                    {/* Input: Capital */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="text-gray-400 text-sm">Vốn nhập hàng</div>
                        <div className="text-xl font-bold text-white">{current.von}</div>
                    </div>

                    {/* Output: Profit (Highlighted) */}
                    <div className="relative bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-2xl p-5 border border-green-500/30 animate-pulse-glow">
                        <div className="absolute -top-3 left-4 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                            Lợi nhuận ước tính
                        </div>
                        <div className="flex items-end justify-between mb-1">
                            <span className="text-green-100 text-sm opacity-80">Tiền lời:</span>
                            <span className="text-3xl font-extrabold text-green-400 leading-none">{current.loinhuan}</span>
                        </div>
                        <div className="w-full bg-gray-700/50 h-1.5 rounded-full mt-3 mb-1">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: current.phantram }}></div>
                        </div>
                        <div className="text-right text-[10px] text-green-300 font-bold">
                            Tỷ suất lợi nhuận ~{current.phantram}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex gap-3 items-start bg-blue-900/20 p-3 rounded-xl border border-blue-500/20">
                         <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={16} />
                         <p className="text-xs text-blue-100 leading-relaxed">
                            {current.desc}
                         </p>
                    </div>
                </div>

            </div>

          </div>
      </div>
    </section>
  );
};

export default BusinessChannels;
