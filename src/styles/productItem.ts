import { SxProps } from "@mui/material";

const container: SxProps = {
  gridColumn: "span 1",
};

const cardContainer: SxProps = {
  borderRadius: 3,
  boxShadow: 8,
  width: "100%",
  p: 3,
  display: "flex",
  height: 400,
  justifyContent: "center",
};

const cardContent: SxProps = {
  color: "#2d2d2d",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const imageContainer: SxProps = {
  width: "100%",
  height: "70%",
  position: "relative",
};

const image: SxProps = {
  width: "100%",
  objectFit: "contain",
  position: "relative",
  height: "unset",
};

const textContainer: SxProps = {
  width: "100%",
  height: "15%",
  pt: 3,
};

const title: SxProps = {
  fontWeight: "bold",
  fontSize: 22,
  lineHeight: "22px",
  width: "100%",
  height: "1em",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontFamily: "Montserrat",
};

const priceContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "flex-start",
  pt: 1,
};

const price: SxProps = {
  fontSize: 24,
};

const buttonContainer: SxProps = {
  width: "100%",
  height: "15%",
  justifyContent: "center",
  alignItems: "center",
};

const button: SxProps = {
  width: "100%",
  height: "90%",
  my: 3,
  textAlign: "center",
  borderRadius: "20px",
  fontWeight: "bold",
  bgcolor: "#097969",
  color: "white",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "20px",
  lineHeight: "25px",
  "&:hover": {
    bgcolor: "#AFE1AF",
  },
};

const styles = {
  container,
  cardContainer,
  cardContent,
  imageContainer,
  image,
  textContainer,
  title,
  priceContainer,
  price,
  buttonContainer,
  button,
};

export default styles;
