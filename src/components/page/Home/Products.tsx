"use client";
import ProductCard from "@/components/common/Cards/ProductCard";
import { ProductsDetailsProps } from "@/components/common/Cards/type";
import CenterHeading from "@/components/common/Heading/CenterHeading";
import Spinner from "@/components/common/Loader/Spinner";
import useProducts from "./useProductsHook";

const LatestProducts: React.FC = () => {
  /**
   * Get data from custom hooks
   */
  const { loading, productData } = useProducts();

  return (
    <div className="section">
      <CenterHeading heading={"Product List"} />
      <div>
        {loading ? (
          <div className="">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[48px]">
            {productData.map((data: ProductsDetailsProps, index: number) => (
              <ProductCard key={index} {...data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestProducts;
