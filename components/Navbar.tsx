
import React, { useState } from 'react';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Trang chủ', id: 'home' },
    { name: 'Sản phẩm', id: 'products' },
    { name: 'Cơ hội kinh doanh', id: 'business' },
    { name: 'Câu chuyện', id: 'journey' },
    { name: 'Hỗ trợ NPP', id: 'policies' },
  ];

  // Link ảnh logo trực tiếp từ Google Drive (Sử dụng domain lh3 để đảm bảo hiển thị ổn định)
  const LOGO_URL = "https://lh3.googleusercontent.com/d/15nhC20zE7ulpESkh_WfjWNrr9Hkrff8A";

  return (
    <header className="bg-white border-b border-[#ecf0f6] sticky top-[52px] sm:top-[44px] z-40 shadow-sm">
      <div className="max-w-[1120px] mx-auto px-5 py-3.5 flex items-center justify-between gap-7">
        {/* Brand */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection('home')}>
          {/* Logo Image */}
          <img 
            src={LOGO_URL} 
            alt="Logo CVT Việt Nam" 
            className="w-[48px] h-[48px] object-contain"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="font-extrabold text-lg tracking-wide leading-none">CVT VIỆT NAM</div>
            <div className="text-[13px] text-text-muted leading-tight mt-0.5">Snack khoai môn nhập khẩu</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-text-muted">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative py-1 hover:text-text-main transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green after:to-accent after:rounded-full hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <Button variant="outline" onClick={() => scrollToSection('business')}>Xem cơ hội</Button>
          <Button onClick={() => scrollToSection('contact')}>Đăng ký NPP</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm font-medium text-text-muted hover:text-text-main py-2"
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <Button variant="outline" onClick={() => scrollToSection('business')} className="w-full">Xem cơ hội</Button>
             <Button onClick={() => scrollToSection('contact')} className="w-full">Đăng ký NPP</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
