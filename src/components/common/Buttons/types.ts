import { StaticImageData } from 'next/image';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  intent?: 'primary' | 'secondary' | 'warning' | 'primaryoutline';
  variant?: 'rounded' | 'outline' | 'outlineRounded';
  bgColor?: string;
  hoverBgColor?: string;
  disable?: boolean;
  isLoading?: boolean;
  endIcon?: any;
  startIcon?: any
}
