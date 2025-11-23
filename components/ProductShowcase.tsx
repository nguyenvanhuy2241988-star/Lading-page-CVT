
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

  // Cấu hình danh sách sản phẩm
  // Đã cập nhật: 
  // - Ảnh vị Cay mới
  // - Bỏ tên tiếng Anh
  // - Tag Best Seller cho: Trứng Muối, Trứng Cua, Cay
  const products: ProductLine[] = [
    {
      id: "TM",
      name: "Vị Trứng Muối",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1WyGIymEnZU9VnnZFXAJ2QWtmo0cA9jyc",
      color: "text-orange-600",
      bgGradient: "from-orange-50 to-orange-100/30",
      tags: ["Best Seller", "Bán chạy nhất"],
      icon: <Star className="text-orange-500" size={16} fill="currentColor" />,
      description: "Vị mặn ngọt béo ngậy của trứng muối hoàng kim kết hợp khoai môn giòn tan."
    },
    {
      id: "TC",
      name: "Vị Trứng Cua",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1yPH38a74fTWDZ208EqR24aU4X5UemMts",
      color: "text-amber-700",
      bgGradient: "from-amber-50 to-amber-100/30",
      tags: ["Best Seller", "Hot Trend"],
      icon: <Zap className="text-amber-600" size={16} fill="currentColor" />,
      description: "Hương thơm đậm đà của gạch cua biển. Trải nghiệm ẩm thực cao cấp trong từng miếng snack."
    },
    {
      id: "CA",
      name: "Vị Cay Tứ Xuyên",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1m3vNt2c75Fjs_8FQxBIlkwJDWg1f5UD9",
      color: "text-red-700",
      bgGradient: "from-red-50 to-red-100/40",
      tags: ["Best Seller", "Cay nồng"],
      icon: <Flame className="text-red-600" size={16} fill="currentColor" />,
      description: "Vị cay nồng kích thích vị giác. Phù hợp cho tín đồ ăn cay sành điệu. Bao bì đỏ nổi bật."
    },
    {
      id: "HL",
      name: "Vị Hành Lá",
      weights: ["35g", "75g"],
      image: "https://lh3.googleusercontent.com/d/1KTmnzuytC8WcqgGQMMD2Xv_bYgyczYUa",
      color: "text-green-700",
      bgGradient: "from-green-50 to-green-100/40",
      tags: ["Truyền thống", "Dễ ăn"],
      icon: <Leaf className="text-green-600" size={16} fill="currentColor" />,
      description: "Hương thơm hành lá tươi nhẹ nhàng, vị mặn vừa phải. Bao bì xanh mát, hương vị quen thuộc."
    },
    {
      id: "BB",
      name: "Vị Bò Bít Tết",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1CgLV_SQen38-WyANRNHCZWNu5dJT-wOn",
      color: "text-gray-900",
      bgGradient: "from-gray-100 to-gray-300/40",
      tags: ["Đậm đà", "Snack mặn"],
      icon: <Beef className="text-gray-800" size={16} />,
      description: "Vị thịt nướng BBQ thơm lừng, đậm đà gia vị bò bít tết. Bao bì đen sang trọng, nam tính."
    },
    {
      id: "TR",
      name: "Vị Nấm Truffle",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1ENTOgvQBDwF3huAwnXihesUfePqCzYWu",
      color: "text-slate-800",
      bgGradient: "from-slate-50 to-slate-200/40",
      tags: ["Cao cấp", "Gourmet"],
      icon: <Diamond className="text-slate-600" size={16} />,
      description: "Hương nấm Truffle đen quý tộc. Mang lại trải nghiệm ăn vặt sang trọng và đầy tinh tế."
    },
  ];

  return (
    <section id="products" className="mb-24 scroll-mt-20">
      <SectionHeading 
        title="Bộ Sưu Tập Hương Vị" 
        description="6 Hương vị độc đáo - 3 Quy cách đóng gói tiêu chuẩn (35g, 75g, 180g). Đáp ứng mọi nhu cầu từ ăn vặt đến quà biếu."
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <div key={product.id} className={`group relative bg-gradient-to-br ${product.bgGradient} rounded-[32px] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 flex flex-col`}>
            
            {/* Tags */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 items-start">
               {product.tags?.map((tag, idx) => (
                 <span key={idx} className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur shadow-sm ${product.color} border border-white/50 uppercase tracking-wide`}>
                    {tag}
                 </span>
               ))}
            </div>

            {/* Image Area */}
            <div className="relative h-[280px] w-full flex items-center justify-center p-6 mt-4">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-500"></div>
                
                {/* Product Image */}
                <img 
                    src={product.image} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
            </div>
            
            {/* Content Card */}
            <div className="bg-white/80 backdrop-blur-md p-6 pt-6 flex flex-col flex-1 relative z-20 border-t border-white/50 h-full">
                <div className="mb-1 flex items-center gap-2 opacity-50">
                    {product.icon}
                </div>
                <h3 className={`text-2xl font-extrabold ${product.color} mb-2 leading-tight`}>
                    {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <Package size={14} className="text-gray-400" />
                        <span className="text-xs font-bold text-gray-500 uppercase">Quy cách có sẵn:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {product.weights.map((w) => (
                            <span key={w} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-700 shadow-sm group-hover:border-green-300 transition-colors">
                                {w}
                            </span>
                        ))}
                    </div>

                    <button 
                        onClick={scrollToForm}
                        className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold text-sm shadow-lg hover:bg-green-600 hover:shadow-green/30 transition-all flex items-center justify-center gap-2 group/btn"
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
