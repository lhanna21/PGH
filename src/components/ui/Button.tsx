import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({ variant = 'primary', children, icon = false, ...props }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        className="group relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full overflow-hidden shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:shadow-[0_0_25px_rgba(219,39,119,0.7)] transition-all duration-300"
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {icon && <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    );
  }

  return (
    <button
      className="px-8 py-3 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
      {...props}
    >
      {children}
    </button>
  );
}