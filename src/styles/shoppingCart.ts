import { SxProps } from "@mui/material";

const cartList: SxProps = {
  pt: "100px",
  mb: "100px",
  backgroundColor: "#fff",
  color: "#525252",
};

const cartListItem: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyItems: "space-around",
  width: 400,
};

const itemImageContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const itemDescriptionContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
};

const deleteButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
};

const cartFooterContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  color: "#525252",
  position: "fixed",
  bottom: 0,
  right: 0,
};

const totalContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  mx: "20px",
};

const checkoutButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
};

const checkoutButton: SxProps = {
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
    bgcolor: "#AFE1AF",
  },
};

const emptyCartContainer: SxProps = {
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
};
const emptyCart: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const drawerContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  zIndex: 1,
  backgroundColor: "#fff",
  width: "100%",
  paddingBottom: 1,
};

const closeButton: SxProps = {
  display: "flex",
  flexDirection: "row",
};

const title: SxProps = {
  display: "flex",
  flexDirection: "row",
  ml: "25px",
};

const quantitySelect: SxProps = {
  border: "1px solid #525252",
  color: "#525252",
};

const styles = {
  cartList,
  cartListItem,
  itemImageContainer,
  itemDescriptionContainer,
  deleteButtonContainer,
  cartFooterContainer,
  totalContainer,
  checkoutButtonContainer,
  checkoutButton,
  emptyCartContainer,
  emptyCart,
  drawerContainer,
  closeButton,
  title,
  quantitySelect,
};

export default styles;
