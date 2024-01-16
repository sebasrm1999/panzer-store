import useAppSelector from "@/hooks/useAppSelector";
import styles from "@/styles/shoppingCart";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function ShoppingCartEmpty() {
  const { drawerWidth } = useAppSelector((state) => state.cart);
  return (
    <Grid
      sx={[
        styles.emptyCartContainer,
        {
          width: `${drawerWidth}px`,
          height: `${window.innerHeight}px`,
        },
      ]}
    >
      <Grid sx={styles.emptyCart}>
        <ShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Typography variant="h4">Your cart is empty.</Typography>
      </Grid>
    </Grid>
  );
}

export default ShoppingCartEmpty;
