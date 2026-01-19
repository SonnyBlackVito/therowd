import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  gradient?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  gradient = 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  style = {},
}) => {
  const baseClasses = 'rounded-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={{
        background: gradient,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;

