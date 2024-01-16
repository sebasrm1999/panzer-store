import { ProductModel } from "@/types/productTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333/checkout/" }),
  tagTypes: ["Checkout"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductModel[], { sort: string | undefined }>(
      {
        query: (arg) => {
          const { sort } = arg;
          return {
            url: "all",
            params: { sort },
          };
        },
        providesTags: [{ type: "Checkout", id: "MAP" }],
      }
    ),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = checkoutApi;
