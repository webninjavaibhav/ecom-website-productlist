import { ProductsDetailsProps } from "@/components/common/Cards/type";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [productData, setProductData] = useState<ProductsDetailsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   *  Funtions for get all products
   */
  const getAllProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}products`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setProductData(jsonData?.products || []);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
    setLoading(false);
  };

  /**
   * Initial API call. 
   */
  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    loading,
    productData
  };
}
