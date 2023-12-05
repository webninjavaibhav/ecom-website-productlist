import { VARIANT_INFO } from './constants';

export function calculateVariantStyles(variant: string, intent: string) {
  const variantStyle =
    VARIANT_INFO[variant as keyof typeof VARIANT_INFO] || '';
  const intentStyle =
    VARIANT_INFO[intent as keyof typeof VARIANT_INFO] || '';

  return `${variantStyle} ${intentStyle}`;
}
