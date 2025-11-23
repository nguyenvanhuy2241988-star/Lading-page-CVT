
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { ShoppingBag, Star, Zap, Flame, Leaf, Beef, Diamond, Package } from 'lucide-react';

interface ProductLine {
  id: string;
  name: string;
  weights: string[];
  image: string;
  color: string;
  bgGradient: string;
  tags?: string[];
  icon: React.ReactNode;
  description: string;
}

const ProductShowcase: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products: ProductLine[] = [
    {
      id: "TM",
      name: "Trứng Muối",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1WyGIymEnZU9VnnZFXAJ2QWtmo0cA9jyc",
      color: "text-orange-600",
      bgGradient: "from-orange-50 to-orange-100/30",
      tags: ["Best Seller"],
      icon: <Star className="text-orange-500" size={16} fill="currentColor" />,
      description: "Vị mặn ngọt béo ngậy của trứng muối hoàng kim kết hợp khoai môn giòn tan."
    },
    {
      id: "TC",
      name: "Trứng Cua",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1yPH38a74fTWDZ208EqR24aU4X5UemMts",
      color: "text-amber-700",
      bgGradient: "from-amber-50 to-amber-100/30",
      tags: ["Hot Trend"],
      icon: <Zap className="text-amber-600" size={16} fill="currentColor" />,
      description: "Hương thơm đậm đà của gạch cua biển. Trải nghiệm ẩm thực cao cấp."
    },
    {
      id: "CA",
      name: "Cay Tứ Xuyên",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1m3vNt2c75Fjs_8FQxBIlkwJDWg1f5UD9",
      color: "text-red-700",
      bgGradient: "from-red-50 to-red-100/40",
      tags: ["Cay nồng"],
      icon: <Flame className="text-red-600" size={16} fill="currentColor" />,
      description: "Vị cay nồng kích thích vị giác. Phù hợp cho tín đồ ăn cay sành điệu."
    },
    {
      id: "HL",
      name: "Hành Lá",
      weights: ["35g", "75g"],
      image: "https://lh3.googleusercontent.com/d/1KTmnzuytC8WcqgGQMMD2Xv_bYgyczYUa",
      color: "text-green-700",
      bgGradient: "from-green-50 to-green-100/40",
      tags: ["Dễ ăn"],
      icon: <Leaf className="text-green-600" size={16} fill="currentColor" />,
      description: "Hương thơm hành lá tươi nhẹ nhàng, vị mặn vừa phải. Bao bì xanh mát."
    },
    {
      id: "BB",
      name: "Bò Bít Tết",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1CgLV_SQen38-WyANRNHCZWNu5dJT-wOn",
      color: "text-gray-900",
      bgGradient: "from-gray-100 to-gray-300/40",
      tags: ["Đậm đà"],
      icon: <Beef className="text-gray-800" size={16} />,
      description: "Vị thịt nướng BBQ thơm lừng, đậm đà. Bao bì đen sang trọng, nam tính."
    },
    {
      id: "TR",
      name: "Nấm Truffle",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1ENTOgvQBDwF3huAwnXihesUfePqCzYWu",
      color: "text-slate-800",
      bgGradient: "from-slate-50 to-slate-200/40",
      tags: ["Gourmet"],
      icon: <Diamond className="text-slate-600" size={16} />,
      description: "Hương nấm Truffle đen quý tộc. Trải nghiệm ăn vặt sang trọng."
    },
  ];

  return (
    <section id="products" className="mb-32 scroll-mt-24">
      <SectionHeading 
        title="Bộ Sưu Tập Hương Vị" 
        description="6 Hương vị độc đáo - 3 Quy cách (35g, 75g, 180g). Đáp ứng mọi nhu cầu kinh doanh và thưởng thức."
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {products.map((product) => (
          <div key={product.id} className={`group relative bg-gradient-to-br ${product.bgGradient} rounded-[36px] overflow-hidden shadow-card hover:shadow-2xl hover:shadow-green/10 transition-all duration-300 hover:-translate-y-2 border border-white/60 flex flex-col`}>
            
            {/* Tags - Minimal */}
            <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 items-start">
               {product.tags?.map((tag, idx) => (
                 <span key={idx} className={`text-[10px] font-extrabold px-3 py-1 rounded-lg bg-white/90 backdrop-blur shadow-sm ${product.color} border border-white/50 uppercase tracking-wider`}>
                    {tag}
                 </span>
               ))}
            </div>

            {/* Image Area */}
            <div className="relative h-[240px] w-full flex items-center justify-center p-6 mt-6">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-500"></div>
                <img 
                    src={product.image} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
            </div>
            
            {/* Content Card */}
            <div className="bg-white/80 backdrop-blur-md p-6 flex flex-col flex-1 relative z-20 border-t border-white/50">
                <div className="mb-2 flex items-center gap-1.5 opacity-60">
                    {product.icon}
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Snack Khoai Môn</span>
                </div>
                <h3 className={`text-2xl font-black ${product.color} mb-2 leading-tight`}>
                    {product.name}
                </h3>
                <p className="text-base text-gray-500 mb-6 line-clamp-2 leading-relaxed font-medium">
                    {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100/50">
                    <div className="flex flex-wrap gap-2 mb-5">
                        {product.weights.map((w) => (
                            <span key={w} className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-[11px] font-bold text-gray-600 shadow-sm">
                                {w}
                            </span>
                        ))}
                    </div>

                    <button 
                        onClick={scrollToForm}
                        className="w-full py-3.5 rounded-2xl bg-gray-900 text-white font-bold text-sm shadow-lg hover:bg-green-600 hover:shadow-green/30 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                    >
                        <ShoppingBag size={16} /> 
                        <span>Nhập hàng ngay</span>
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
