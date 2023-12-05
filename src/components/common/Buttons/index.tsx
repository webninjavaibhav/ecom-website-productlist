'use client';

import React from 'react';
import { ButtonProps } from './types';
import { calculateVariantStyles } from './variant';

const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  className = '',
  intent = 'primary',
  variant,
  isLoading,
  disabled,
  startIcon,
  endIcon, // New prop for the end icon
  ...buttonProps
}: ButtonProps) => {
  // Use type assertion to inform TypeScript that variant1 and variant2 are valid keys of VARIANT_INFO
  const variantStyles = calculateVariantStyles(intent, variant ?? '');
  const loadingStyles = isLoading
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';
  const disabledStyles = disabled
    ? 'cursor-not-allowed !opacity-75 select-none'
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`primary-Button flex items-center gap-[7px] uppercase transition relative duration-300 ease-in-out rounded-[6px] ${loadingStyles} ${disabledStyles} 
      ${className}    
      ${variantStyles} 
      `}
      {...buttonProps}
    >
       {startIcon && <span> {startIcon} </span>}
      { children}
      {/* Add the end icon here */}
      {endIcon && <span className='ml-2'> {endIcon} </span>}
    </button>
  );
};

export default PrimaryButton;
