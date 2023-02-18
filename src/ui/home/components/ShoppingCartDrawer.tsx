import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { toggleDrawer } from "@/store/slices/cartSlice";
import styles from "@/styles/shoppingCart";
import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartEmpty from "./ShoppingCartEmpty";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCartDrawer() {
  const { drawer, drawerWidth, products } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  return (
    <Drawer
      anchor="right"
      open={drawer}
      onClose={() => dispatch(toggleDrawer())}
    >
      <Box
        sx={{
          width: drawerWidth,
        }}
        role="presentation"
        onKeyDown={() => dispatch(toggleDrawer())}
      >
        <Grid container>
          <Grid sx={styles.drawerContainer}>
            <Grid sx={styles.closeButton}>
              <IconButton
                onClick={() => dispatch(toggleDrawer())}
                sx={{ color: "#525252" }}
              >
                <Close sx={{ fontSize: 30 }} />
              </IconButton>
            </Grid>
            <Grid sx={styles.title}>
              <Typography variant="h5" sx={{ color: "#525252" }}>
                Shopping Cart
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          {products.length > 0 ? <ShoppingCartList /> : <ShoppingCartEmpty />}
        </Grid>
      </Box>
    </Drawer>
  );
}

export default ShoppingCartDrawer;
