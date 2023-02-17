import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { deleteFromCart } from "@/store/slices/cartSlice";
import { Close, Delete, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Anchor = "top" | "left" | "bottom" | "right";

const ShoppingCart = () => {
  const { products, total } = useAppSelector((state) => state.cart); //Here we get some props from the brewery state of redux
  const dispatch = useAppDispatch();

  const [drawerWidth, setDrawerWidth] = useState<Number>(400);
  const [anchorState, setAnchorState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setAnchorState({ ...anchorState, [anchor]: open });
    };

  useEffect(() => {
    let width = window.innerWidth;
    if (width <= 768) {
      setDrawerWidth(width);
    }
  }, []);

  const CheckEmpty = () => {
    if (products.length > 0) {
      return (
        <>
          <List
            sx={{
              pb: "200px",
              pt: "100px",
              bgColor: "#2d2d2d",
              color: "#525252",
            }}
          >
            {products.map((cartProduct, index) => (
              <Box
                key={cartProduct.product.id}
                sx={{ width: `${drawerWidth}px` }}
              >
                <ListItem key={`item-${index}`}>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyItems: "space-around",
                      width: 400,
                    }}
                  >
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        alt="Product banner"
                        width={75}
                        height={100}
                        src={cartProduct.product.image}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
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
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                      }}
                    >
                      <IconButton
                        onClick={() =>
                          dispatch(deleteFromCart(cartProduct.product.id))
                        }
                        sx={{ color: "#000" }}
                      >
                        <Delete sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
          <Paper elevation={6} className="shopping-footer">
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                width: `${drawerWidth}px`,
                bgColor: "#2d2d2d",
                color: "#525252",
              }}
            >
              <Grid sx={{ display: "flex", flexDirection: "row", mx: "20px" }}>
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
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "20px",
                    bgcolor: "#097969",
                    color: "white",
                    px: 5,
                    width: 250,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: "20px",
                    lineHeight: "25px",
                    fontWeight: "bold",
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#d6627e",
                    },
                  }}
                  onClick={() => {}}
                >
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </>
      );
    } else {
      return (
        <Grid
          sx={{
            display: "flex",
            height: `${window.innerHeight}px`,
            justifyContent: "center",
            alignItems: "center",
            width: `${drawerWidth}px`,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Typography variant="h4">Your cart is empty.</Typography>
          </Grid>
        </Grid>
      );
    }
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom" ? "auto" : `${drawerWidth}px`,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: 1,
            bgColor: "#2d2d2d",
            width: `${drawerWidth}px`,
            paddingBottom: 1,
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <IconButton
              onClick={toggleDrawer("right", false)}
              sx={{ color: "#525252" }}
            >
              <Close sx={{ fontSize: 30 }} />
            </IconButton>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "row", ml: "25px" }}>
            <Typography variant="h5" sx={{ color: "#525252" }}>
              Shopping Cart
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <CheckEmpty />
      </Grid>
    </Box>
  );

  return (
    <Grid container>
      <IconButton
        id="demo-positioned-button"
        onClick={toggleDrawer("right", true)}
        sx={{ color: "#525252" }}
      >
        <Badge badgeContent={products.length} color="error">
          <ShoppingCartOutlined sx={{ fontSize: 50 }} />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={anchorState["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </Grid>
  );
};

function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed" sx={{ bgColor: "#2d2d2d" }}>
        <Toolbar>
          <div className="container">
            <Grid item>
              <Box
                className="logo"
                component="img"
                src="https://playeatlas.com/wp-content/themes/eatlas/assets/images/footer/logo-black-text.png"
              ></Box>
            </Grid>
            <Grid item>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/*pages.map((page) => {
                      if (page === currentPage) {
                        return (
                          <Button
                          key={`a-${page}`}
                            sx={{
                              my: 2,
                              mx: 4,
                              color: 'gray',
                              display: 'block',
                              borderBottom: `4px solid ${selectedTheme.colors.primary}`,
                              paddingBottom: '3px',
                              fontFamily: selectedTheme.font,
                              boxShadow: 'none',
                              textTransform: 'none',
                              fontSize: "20px",
                              fontWeight: "bold"
                            }}
                          >
                            {page}
                          </Button>
                        );
                      } else {
                        return (
                          <Button
                            key={page}
                            className={'inactive'}
                            onClick={() => changeView(page)}
                            sx={{
                              my: 2,
                              mx: 4,
                              color: 'gray',
                              display: 'block',
                              fontFamily: selectedTheme.font,
                              boxShadow: 'none',
                              textTransform: 'none',
                              fontSize: "20px",
                              fontWeight: "bold"
                            }}
                          >
                            {page}
                          </Button>
                        );
                      }
                    })*/}
              </Box>
            </Grid>
            <Grid>
              <Box>
                <ShoppingCart />
              </Box>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mt: "30px" }} />
    </Box>
  );
}

export default Header;
