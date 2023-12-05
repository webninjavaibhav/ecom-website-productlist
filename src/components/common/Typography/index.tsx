import clsx from 'clsx';
import React from 'react';
import { TypographyProps } from './type';

const Typography = ({
  variant = 'p',
  fontWeight,
  color,
  lineheight,
  ...props
}: TypographyProps) => {
  const selectColor = clsx(
    props.className,
    color && `color-${color}`,
    lineheight && `line-height-${lineheight}`,
    fontWeight && `font-Weight-${fontWeight}`
  );
  return (
    <>{React.createElement(variant, { ...props, className: selectColor })}</>
  );
};

export default Typography;
