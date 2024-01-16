import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setDrawerWidth, toggleDrawer } from "@/store/slices/cartSlice";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import ShoppingCartDrawer from "./ShoppingCartDrawer";

const ShoppingCart = () => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let width = window.innerWidth;
    if (width <= 768) {
      dispatch(setDrawerWidth(width));
    }
  });

  return (
    <Grid container>
      <IconButton
        id="demo-positioned-button"
        onClick={() => dispatch(toggleDrawer())}
        sx={{ color: "#525252" }}
      >
        <Badge badgeContent={products.length} color="error">
          <ShoppingCartOutlined sx={{ fontSize: 50 }} />
        </Badge>
      </IconButton>
      <ShoppingCartDrawer />
    </Grid>
  );
};

export default ShoppingCart;
