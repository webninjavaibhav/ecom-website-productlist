import { useState } from 'react';

export function useButtonLogic() {
  const [variant1, setVariant1] = useState('primary');
  const [variant2, setVariant2] = useState('primary');

  const setVariants = (v1: string, v2: string) => {
    setVariant1(v1);
    setVariant2(v2);
  };

  return {
    variant1,
    variant2,
    setVariants,
  };
}
