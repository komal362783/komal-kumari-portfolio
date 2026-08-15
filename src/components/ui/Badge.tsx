import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'blue' | 'slate' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/35 hover:bg-cyan-500/25',
    emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/35 hover:bg-emerald-500/25',
    blue: 'bg-blue-500/15 text-blue-300 border-blue-500/35 hover:bg-blue-500/25',
    slate: 'bg-[#141C30] text-slate-200 border-slate-700/80 hover:bg-[#1B2640]',
    neutral: 'bg-white/[0.06] text-white border-white/10 hover:bg-white/[0.12]'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5 font-medium',
    md: 'text-xs px-3 py-1 gap-1.5 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
