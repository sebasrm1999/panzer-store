import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { deleteFromCart, updateQuantity } from "@/store/slices/cartSlice";
import styles from "@/styles/shoppingCart";
import { CartProductModel } from "@/types/productTypes";
import { Delete, ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { fontSize } from "@mui/system";
import Image from "next/image";
import React from "react";

interface IShoppingCartListItem {
  cartProduct: CartProductModel;
}

function quantityDropdownItems() {
  let items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(
      <MenuItem key={i} value={i}>
        {i < 10 ? i : "10 +"}
      </MenuItem>
    );
  }
  return items;
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
            {cartProduct.quantity < 10 ? (
              <FormControl sx={{ width: "50%" }}>
                <Select
                  id="quantity-select"
                  value={cartProduct.quantity}
                  onChange={(event) =>
                    dispatch(
                      updateQuantity({
                        product: cartProduct.product,
                        quantity: event.target.value as number,
                      })
                    )
                  }
                  sx={{
                    border: "1px solid #525252",
                    color: "#525252",
                  }}
                >
                  {quantityDropdownItems()}
                </Select>
              </FormControl>
            ) : (
              <TextField label="Quantity" variant="outlined" />
            )}
            <ListItemText
              disableTypography
              primary={
                <Typography variant="body2" sx={{ fontWeight: "light" }}>
                  {parseFloat(cartProduct.product.price) !== 0
                    ? parseFloat(cartProduct.product.price) % 1 === 0
                      ? `$ ${cartProduct.product.price}.00 USD per product`
                      : `$ ${cartProduct.product.price} USD per product`
                    : `Free`}
                </Typography>
              }
            />
            <ListItemText
              disableTypography
              primary={
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {parseFloat(cartProduct.product.price) !== 0
                    ? (parseFloat(cartProduct.product.price) *
                        cartProduct.quantity) %
                        1 ===
                      0
                      ? `$ ${
                          parseFloat(cartProduct.product.price) *
                          cartProduct.quantity
                        }.00 USD`
                      : `$ ${
                          parseFloat(cartProduct.product.price) *
                          cartProduct.quantity
                        } USD`
                    : `Free`}
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={2} sx={styles.deleteButtonContainer}>
            <IconButton
              onClick={() => dispatch(deleteFromCart(cartProduct.product))}
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
