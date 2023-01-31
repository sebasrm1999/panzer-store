import { api } from "@/pages/api/products";
import { ProductModel } from "@/types/productTypes";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
    const {isLoading, data, error, isError} = useQuery<ProductModel[]>(
        ['allProducts'], 
        async () => await api.getProducts(), 
      );
      return {isLoading, data, error, isError};
};