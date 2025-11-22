
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'fomo' | 'shimmer';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0 cursor-pointer relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-[20px] py-[10px] text-sm",
    lg: "px-8 py-4 text-base sm:text-lg shadow-lg",
  };

  const variants = {
    primary: "bg-green-dark text-white border border-green-dark shadow-glow hover:bg-[#005f2e] hover:shadow-[0_14px_30px_rgba(0,90,43,0.45)]",
    outline: "bg-white text-green-dark border-2 border-green-dark/20 hover:border-green-dark hover:bg-green-50 hover:shadow-md",
    fomo: "bg-[#0b1b2b] text-white border-none shadow-md hover:bg-black hover:shadow-lg px-[18px] py-[8px]",
    shimmer: "bg-gradient-primary text-white border-none shadow-glow animate-pulse-glow hover:animate-none hover:scale-105",
  };

  const shimmerOverlay = (variant === 'shimmer' && !props.disabled) ? (
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-shimmer-gradient" />
  ) : null;

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {shimmerOverlay}
    </button>
  );
};

export default Button;
