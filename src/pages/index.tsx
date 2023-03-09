import Head from "next/head";
import styles from "@/styles/home";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { ProductModel } from "@/types/productTypes";
import ProductItem from "@/ui/home/components/ProductItem";
import { useGetAllProductsQuery } from "./api/products";
import Header from "@/ui/home/components/Header";
import SortingPanel from "@/ui/home/components/SortingPanel";
import useAppSelector from "@/hooks/useAppSelector";

function Home() {
  const { sortBy } = useAppSelector((state) => state.home);
  const { data: products, isLoading } = useGetAllProductsQuery({
    sort: sortBy,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Panzer Store</title>
        <meta property="og:title" content="Panzer Store" key="title" />
      </Head>
      <Header />
      <SortingPanel />
      {!isLoading ? (
        <Box sx={styles.experiencesContainer}>
          {products!.map((product: ProductModel) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      )}
    </Box>
  );
}

export default Home;
