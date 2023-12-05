import React from 'react';
import Typography from '../Typography';

interface CenterHeadingProps {
    heading: string;
    description?: string;
  }

const CenterHeading: React.FC<CenterHeadingProps> = ({ heading, description }) => {
  return (
    <div className='flex justify-center items-center flex-col text-center gap-[10px] max-w-[1026px] m-auto mb-[60px] sm:mb-[30px]'>
      <Typography variant='h3' lineheight="auto" fontWeight={700}>
        {heading}
      </Typography>
     {description && <Typography variant='p' className='font-roboto color-grey'>
        {description}
      </Typography>}
    </div>
  );
};

export default CenterHeading;
