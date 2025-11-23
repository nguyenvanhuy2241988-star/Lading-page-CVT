
import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Store, Coffee, Film, Gift, Calculator, ArrowUpRight, CheckCircle2, Download } from 'lucide-react';

const BusinessChannels: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'starter' | 'shop' | 'npp'>('shop');

  const scenarios = {
    starter: {
      id: 'starter',
      name: 'Thử Nghiệm',
      von: '3.000.000 đ',
      loinhuan: '750.000 đ',
      phantram: '25%',
      desc: 'Dành cho cá nhân bán online hoặc mua về mời khách.',
      color: 'bg-gray-600'
    },
    shop: {
      id: 'shop',
      name: 'Tạp Hóa / Cafe',
      von: '10.000.000 đ',
      loinhuan: '3.500.000 đ',
      phantram: '35%',
      desc: 'Dành cho Minimart, Quán Cafe, Rạp phim.',
      color: 'bg-green-600'
    },
    npp: {
      id: 'npp',
      name: 'Nhà Phân Phối',
      von: '50.000.000 đ',
      loinhuan: '20.000.000 đ+',
      phantram: '40%++',
      desc: 'Phân phối độc quyền khu vực, đổ buôn.',
      color: 'bg-yellow-600'
    }
  };

  const current = scenarios[activeScenario];

  const channels = [
    { 
        icon: <Store size={20} />, 
        title: 'Minimart', 
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Gift size={20} />, 
        title: 'Quà tặng', 
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Coffee size={20} />, 
        title: 'Cafe / F&B', 
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    },
    { 
        icon: <Film size={20} />, 
        title: 'Rạp phim', 
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80'
    },
  ];

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="business" className="mb-24">
      <SectionHeading
        title="Kênh Bán & Lợi Nhuận"
        description="Sản phẩm phù hợp trưng bày tại nhiều mô hình kinh doanh khác nhau."
      />
      
      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {channels.map((item, idx) => (
          <div key={idx} className="group relative h-[200px] rounded-2xl overflow-hidden shadow-card cursor-pointer">
            <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                <div className="flex items-center gap-2 mb-1">
                   <div className="p-1.5 bg-white/20 backdrop-blur rounded-lg">{item.icon}</div>
                   <h3 className="font-bold text-base">{item.title}</h3>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calculator - Compact Version */}
      <div className="bg-[#0f172a] rounded-[24px] p-6 lg:p-8 shadow-2xl text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center relative z-10">
            
            {/* Left: Intro */}
            <div>
                <div className="inline-flex items-center gap-2 text-green-400 text-xs font-bold mb-2 uppercase tracking-wider">
                  <Calculator size={14} /> Công cụ tính toán
                </div>
                <h3 className="font-bold text-2xl md:text-3xl leading-tight mb-4">
                    Ước Tính Lợi Nhuận
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                    Chọn mức vốn dự kiến để xem ngay tiền lời bạn sẽ nhận được. Số liệu dựa trên bảng giá sỉ mới nhất.
                </p>
                <Button onClick={scrollToForm} variant="shimmer" size="sm" className="w-full sm:w-auto">
                    <Download size={16} /> Tải bảng giá chi tiết
                </Button>
            </div>

            {/* Right: Interactive Panel */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
                {/* Tabs */}
                <div className="flex bg-black/30 rounded-lg p-1 mb-6 overflow-x-auto">
                    {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveScenario(key)}
                            className={`flex-1 py-2 px-2 text-xs font-bold rounded-md whitespace-nowrap transition-all ${
                                activeScenario === key ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {scenarios[key].name}
                        </button>
                    ))}
                </div>

                {/* Numbers */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-4">
                    <div>
                        <div className="text-gray-400 text-xs mb-1">Vốn nhập hàng</div>
                        <div className="text-xl font-bold text-white">{current.von}</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                    <div>
                         <div className="text-green-400 text-xs mb-1">Lợi nhuận (+{current.phantram})</div>
                         <div className="text-2xl font-extrabold text-green-400">{current.loinhuan}</div>
                    </div>
                </div>
                
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/20 flex gap-2">
                     <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={14} />
                     <p className="text-xs text-blue-100">{current.desc}</p>
                </div>
            </div>

          </div>
      </div>
    </section>
  );
};

export default BusinessChannels;
