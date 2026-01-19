import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  textSize?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  textSize,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium tracking-wide uppercase';

  const variantPatterns = {
    default: 'border',
    outline: 'bg-transparent border',
    solid: 'border',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5',
    md: 'px-3 py-1',
    lg: 'px-4 py-1.5',
  };

  const defaultTextSizes = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
  };

  const variantPattern = variantPatterns[variant];
  const paddingClasses = sizeClasses[size];
  const textSizeClass = textSize || defaultTextSizes[size];
  const badgeClasses = `${baseClasses} ${variantPattern} ${paddingClasses} ${textSizeClass} ${className}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;

