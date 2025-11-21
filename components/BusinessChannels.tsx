import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts';
import { Store, Coffee, Film, Gift, Calculator, TrendingUp, ArrowUpRight } from 'lucide-react';

const BusinessChannels: React.FC = () => {
  const data = [
    { name: 'T1', profit: 4 },
    { name: 'T2', profit: 7 },
    { name: 'T3', profit: 12 },
    { name: 'T4', profit: 18 },
    { name: 'T5', profit: 25 },
    { name: 'T6', profit: 35 },
  ];

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

      {/* Interactive Element: Profit Projection Chart */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#0b1b2b] rounded-[32px] p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden group">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-green/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                  <TrendingUp size={12} /> Case Study
              </div>
              <h3 className="font-bold text-2xl md:text-3xl leading-tight">
                  Tiềm năng lợi nhuận <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 text-4xl">tăng trưởng x3</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Dữ liệu thực tế: Tỷ lệ khách quay lại mua lần 2 đạt <strong>65%</strong>. 
                  Biên độ lợi nhuận ổn định nhờ chính sách bảo hộ giá từ LYHU.
              </p>
              <Button onClick={scrollToForm} variant="shimmer" className="mt-2 w-full sm:w-auto">
                 <Calculator size={18} /> Nhận bảng tính lợi nhuận
              </Button>
          </div>
          
          <div className="h-[260px] w-full bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-inner relative">
              <div className="absolute top-4 right-4 flex gap-4 text-[10px] text-gray-400">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Lợi nhuận</div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                    <YAxis hide />
                    <Tooltip 
                        cursor={{stroke: 'rgba(255,255,255,0.1)'}} 
                        contentStyle={{backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px'}}
                        itemStyle={{color: '#4ade80'}}
                        formatter={(value) => [`${value} triệu`, 'Lợi nhuận']}
                    />
                    <Area type="monotone" dataKey="profit" stroke="#4ade80" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
          </div>
      </div>
    </section>
  );
};

export default BusinessChannels;