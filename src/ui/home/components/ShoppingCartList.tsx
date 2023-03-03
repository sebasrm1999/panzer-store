import useAppSelector from "@/hooks/useAppSelector";
import styles from "@/styles/shoppingCart";
import {
  Button,
  Grid,
  List,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartListItem from "./ShoppingCartListItem";

function ShoppingCartList() {
  const { products, total, drawerWidth } = useAppSelector(
    (state) => state.cart
  );

  return (
    <>
      <List sx={styles.cartList}>
        {products.map((cartProduct) => (
          <ShoppingCartListItem
            key={cartProduct.product.id}
            cartProduct={cartProduct}
          />
        ))}
      </List>
      <Paper elevation={6}>
        <Grid
          container
          sx={[styles.cartFooterContainer, { width: `${drawerWidth}px` }]}
        >
          <Grid sx={styles.totalContainer}>
            <ListItemText
              disableTypography
              primary={<Typography variant="h5">Total: </Typography>}
            />
            <ListItemText
              disableTypography
              primary={
                <Typography variant="h5" sx={{ textAlign: "end" }}>
                  {total! !== 0
                    ? total % 1 === 0
                      ? `$ ${total}.00 USD`
                      : `$ ${total} USD`
                    : `Free`}
                </Typography>
              }
            />
          </Grid>
          <Grid sx={styles.checkoutButtonContainer}>
            <Button sx={styles.checkoutButton} onClick={() => {}}>
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ShoppingCartList;
