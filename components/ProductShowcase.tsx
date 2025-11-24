
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { ShoppingBag, Star, Zap, Flame, Leaf, Beef, Diamond } from 'lucide-react';

interface ProductLine {
  id: string;
  name: string;
  weights: string[];
  image: string;
  bgClass: string; // Tailwind class for bg color
  textClass: string; // Tailwind class for text color
  tags?: string[];
  icon: React.ReactNode;
  description: string;
}

const ProductShowcase: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Order: Trứng Cua (TC) -> Trứng Muối (TM) -> Cay (CA)
  const products: ProductLine[] = [
    {
      id: "TC",
      name: "Trứng Cua",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1yPH38a74fTWDZ208EqR24aU4X5UemMts",
      textClass: "text-amber-700",
      bgClass: "bg-amber-50",
      tags: ["Best Seller"],
      icon: <Zap size={14} fill="currentColor" />,
      description: "Hương gạch cua đậm đà, lạ miệng, kích thích vị giác. Dòng bán chạy nhất hiện nay."
    },
    {
      id: "TM",
      name: "Trứng Muối",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1WyGIymEnZU9VnnZFXAJ2QWtmo0cA9jyc",
      textClass: "text-orange-600",
      bgClass: "bg-orange-50",
      tags: ["Hot Trend"],
      icon: <Star size={14} fill="currentColor" />,
      description: "Vị mặn ngọt béo ngậy huyền thoại. Phù hợp mọi lứa tuổi."
    },
    {
      id: "CA",
      name: "Cay Tứ Xuyên",
      weights: ["35g", "75g", "180g"],
      image: "https://lh3.googleusercontent.com/d/1m3vNt2c75Fjs_8FQxBIlkwJDWg1f5UD9",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
      tags: ["Cay nồng"],
      icon: <Flame size={14} fill="currentColor" />,
      description: "Cay tê đầu lưỡi chuẩn vị Trung Hoa. Tốn bia, hợp quán nhậu."
    },
    {
      id: "HL",
      name: "Hành Lá",
      weights: ["35g", "75g"],
      image: "https://lh3.googleusercontent.com/d/1KTmnzuytC8WcqgGQMMD2Xv_bYgyczYUa",
      textClass: "text-green-700",
      bgClass: "bg-green-50",
      tags: ["Truyền thống"],
      icon: <Leaf size={14} fill="currentColor" />,
      description: "Thơm nhẹ hành lá, vị mặn vừa phải. Dễ ăn, hợp trẻ em."
    },
    {
      id: "BB",
      name: "Bò Bít Tết",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1CgLV_SQen38-WyANRNHCZWNu5dJT-wOn",
      textClass: "text-gray-800",
      bgClass: "bg-gray-100",
      tags: ["Manly"],
      icon: <Beef size={14} />,
      description: "Vị thịt nướng BBQ thơm lừng. Bao bì đen sang trọng."
    },
    {
      id: "TR",
      name: "Nấm Truffle",
      weights: ["35g"],
      image: "https://lh3.googleusercontent.com/d/1ENTOgvQBDwF3huAwnXihesUfePqCzYWu",
      textClass: "text-slate-800",
      bgClass: "bg-slate-100",
      tags: ["Premium"],
      icon: <Diamond size={14} />,
      description: "Hương nấm Truffle đen quý tộc. Phân khúc khách cao cấp."
    },
  ];

  return (
    <section id="products" className="mb-24 scroll-mt-20">
      <SectionHeading 
        title="6 Hương Vị Độc Bản" 
        description="Đa dạng quy cách (35g, 75g, 180g) phù hợp mọi kênh bán: Tạp hoá, Siêu thị, Quà biếu, Quán Cafe."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className={`group relative rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white flex flex-col`}>
            
            {/* Top Half: Image & Bg - INCREASED HEIGHT */}
            <div className={`h-[240px] md:h-[260px] relative overflow-hidden ${product.bgClass} flex items-center justify-center p-6`}>
               <div className="absolute top-4 left-4 z-10 flex gap-1">
                 {product.tags?.map((tag, idx) => (
                   <span key={idx} className="text-[10px] font-bold px-2.5 py-1 rounded bg-white/90 backdrop-blur uppercase tracking-wider shadow-sm text-gray-800">
                      {tag}
                   </span>
                 ))}
               </div>
               
               <img 
                  src={product.image} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-auto h-full max-h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
               />
            </div>

            {/* Bottom Half: Info */}
            <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`${product.textClass} p-1.5 bg-gray-50 rounded-full`}>{product.icon}</span>
                    <h3 className={`text-lg md:text-xl font-bold ${product.textClass}`}>{product.name}</h3>
                </div>
                
                <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex gap-1.5 flex-wrap">
                        {product.weights.map((w) => (
                            <span key={w} className="px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-[10px] md:text-[11px] font-bold text-gray-600 hover:border-gray-300 transition-colors cursor-default">
                                {w}
                            </span>
                        ))}
                    </div>
                    <button 
                        onClick={scrollToForm}
                        className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 transform hover:scale-105 shrink-0"
                        title="Nhập hàng ngay"
                    >
                        <ShoppingBag size={18} />
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
