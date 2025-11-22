
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Plus } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // CẤU HÌNH DANH SÁCH SẢN PHẨM VÀ ẢNH
  const flavors = [
    {
      name: "Vị Trứng Muối",
      color: "from-orange-400 to-red-500",
      bgChip: "bg-orange-200",
      // Thay link ảnh bên dưới bằng link ảnh thật của bạn
      image: "https://placehold.co/300x400/f97316/white?text=Trung+Muoi", 
      desc: "Vị mặn ngọt hài hòa, lớp phủ trứng muối thật 100%, béo ngậy mà không ngấy.",
      tags: ["Best Seller", "35g/75g"]
    },
    {
      name: "Vị Truffle & Jambon",
      color: "from-gray-700 to-gray-900",
      bgChip: "bg-gray-300",
      // Thay link ảnh bên dưới bằng link ảnh thật của bạn
      image: "https://placehold.co/300x400/334155/white?text=Truffle",
      desc: "Hương thơm nấm Truffle sang trọng kết hợp vị mặn của Jambon.",
      tags: ["Premium", "35g"]
    },
    {
      name: "Vị Steak Bò",
      color: "from-red-700 to-red-900",
      bgChip: "bg-red-200",
      // Thay link ảnh bên dưới bằng link ảnh thật của bạn
      image: "https://placehold.co/300x400/991b1b/white?text=Steak+Bo",
      desc: "Đậm đà hương vị bò nướng tiêu đen, mạnh mẽ và kích thích vị giác.",
      tags: ["Mới", "75g"]
    },
    {
      name: "Vị Truyền Thống",
      color: "from-purple-500 to-indigo-600",
      bgChip: "bg-purple-200",
      // Thay link ảnh bên dưới bằng link ảnh thật của bạn
      image: "https://placehold.co/300x400/a855f7/white?text=Khoai+Mon",
      desc: "Giữ nguyên vị ngọt bùi tự nhiên của khoai môn tươi nguyên bản với chút muối biển.",
      tags: ["Classic", "All Sizes"]
    }
  ];

  return (
    <section id="products" className="mb-24 scroll-mt-20">
      <SectionHeading 
        title="Bộ Sưu Tập Hương Vị Đột Phá" 
        description="Không chỉ là snack, CVT mang đến trải nghiệm ẩm thực tinh tế trong từng lát khoai."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flavors.map((flavor, idx) => (
          <div key={idx} className="group relative bg-white rounded-[24px] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
            {/* Product Image Header */}
            <div className={`h-48 bg-gradient-to-br ${flavor.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -right-10 blur-xl"></div>
                {/* Abstract Floating Chips CSS */}
                <div className={`absolute top-4 left-4 w-6 h-6 ${flavor.bgChip} rounded-full opacity-50 animate-float`}></div>
                <div className={`absolute bottom-4 right-8 w-4 h-4 ${flavor.bgChip} rounded-full opacity-40 animate-float-delayed`}></div>

                {/* Real Image Container */}
                <div className="relative w-32 h-40 transform group-hover:scale-110 transition-transform duration-500 z-10 mt-4">
                    <img 
                        src={flavor.image} 
                        alt={flavor.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                    />
                </div>
            </div>
            
            <div className="p-6 relative flex-1 flex flex-col">
                {/* Floating Pill */}
                <div className="absolute -top-4 left-6 bg-white border border-gray-100 shadow-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-gray-600 z-10">
                    {flavor.tags[0]}
                </div>

                <h3 className="text-lg font-bold text-text-main mb-2 mt-2">{flavor.name}</h3>
                <p className="text-sm text-text-muted mb-4 line-clamp-3">{flavor.desc}</p>
                
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                        {flavor.tags.slice(1).map((t, i) => (
                            <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium border border-gray-200">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    {/* CVT Button */}
                    <button 
                        onClick={scrollToForm}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-100 text-sm font-bold text-text-main hover:border-green hover:text-green hover:bg-green-50 transition-all active:scale-95"
                    >
                        <Plus size={16} /> Nhập hàng
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
