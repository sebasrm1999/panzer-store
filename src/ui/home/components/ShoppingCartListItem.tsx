import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { deleteFromCart } from "@/store/slices/cartSlice";
import styles from "@/styles/shoppingCart";
import { CartProductModel } from "@/types/productTypes";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface IShoppingCartListItem {
  cartProduct: CartProductModel;
}

function ShoppingCartListItem(props: IShoppingCartListItem) {
  const { cartProduct } = props;
  const { drawerWidth } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ width: `${drawerWidth}px` }}>
      <ListItem>
        <Grid sx={styles.cartListItem}>
          <Grid item xs={4} sx={styles.itemImageContainer}>
            <Image
              alt="Product banner"
              width={75}
              height={100}
              src={cartProduct.product.image}
            />
          </Grid>
          <Grid item xs={6} sx={styles.itemDescriptionContainer}>
            <ListItemText primary={cartProduct.product.title} />
            <ListItemText
              primary={
                parseFloat(cartProduct.product.price) !== 0
                  ? parseFloat(cartProduct.product.price) % 1 === 0
                    ? `$ ${cartProduct.product.price}.00 USD`
                    : `$ ${cartProduct.product.price} USD`
                  : `Free`
              }
            />
          </Grid>
          <Grid item xs={2} sx={styles.deleteButtonContainer}>
            <IconButton
              onClick={() => dispatch(deleteFromCart(cartProduct.product.id))}
              sx={{ color: "#000" }}
            >
              <Delete sx={{ fontSize: 30 }} />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </Box>
  );
}

export default ShoppingCartListItem;
