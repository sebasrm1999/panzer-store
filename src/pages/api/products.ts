import { ProductModel } from "@/types/productTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333/products/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductModel[], { sort: string | undefined }>(
      {
        query: (arg) => {
          const { sort } = arg;
          console.log("arg: ", arg);
          return {
            url: "all",
            params: { sort },
          };
        },
        providesTags: [{ type: "Products", id: "LIST" }],
      }
    ),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productApi;
