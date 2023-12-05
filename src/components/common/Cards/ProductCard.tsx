import React from "react";
import Image from "next/image";
import Typography from "../Typography";
import { ProductsDetailsProps } from "./type";
import PrimaryButton from "../Buttons/index";
import Cart from "@/assets/svg/Cart";

const ProductCard: React.FC<ProductsDetailsProps> = ({
  title,
  description,
  className,
  price,
  thumbnail
}) => {
  return (
    <div
      className={`bg-white duration-300 ease-in-out overflow-hidden rounded-lg cursor-pointer border border-gray-300 hover:shadow-xl card-container ${className}`}
    >
      {thumbnail && (
        <div className="relative">
          <Image width={300} height={300} src={thumbnail} alt={title} className="w-full card-img object-cover" />
          {description && (
          <Typography
            variant="small"
            fontWeight={200}
            className="font-roboto card-description absolute bottom-0 bg-white text-gray-500 p-3 hidden"
          >
            {description}
          </Typography>
        )}

        </div>
      )}

      <div className="flex flex-col gap-[16px] p-[20px_10px] relative z-10 bg-white border-t border-gray-300">
        {title && (
          <Typography variant="h6" fontWeight={600} className="font-roboto card-title">
            {title}
          </Typography>
        )}

        <div className="flex items-center justify-between gap-4 ">
          <Typography variant="p" fontWeight={700} className="font-roboto">
            ${price}
          </Typography>
          <PrimaryButton
            intent="secondary"
            startIcon={<Cart />}
            className="flex text-[14px] p-[12px_23px] m-0 h-auto w-fit rounded-full justify-center"
          >
            Add To Cart
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
