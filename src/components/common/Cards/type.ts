import { Url } from 'next/dist/shared/lib/router/router';
import { StaticImageData } from 'next/image';


export interface ProductsDetailsProps {
  title: string;
  description: string;
  thumbnail: StaticImageData ;
  price: string;
  buttonText?: string;
  onButtonClick?: Function;
  button?: string | React.ReactNode;
  className?: string;
  link?: Url;
  }