import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  const isWhiteOutline = variant === 'white-outline';

  return (
    <button
      className={`cursor-pointer px-8 py-4 rounded-button font-semibold text-sm tracking-wide uppercase transition-colors duration-300
        ${isPrimary ? 'bg-primary text-white hover:bg-accent' : ''}
        ${isOutline ? 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white' : ''}
        ${isWhiteOutline ? 'bg-transparent text-white border border-white hover:bg-white hover:text-primary' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
