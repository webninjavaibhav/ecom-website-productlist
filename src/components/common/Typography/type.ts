export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'strong';
  fontWeight?: string | number;
  color?: string;
  lineheight?: string | number;
  className?: string;
}
