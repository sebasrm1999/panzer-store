import { SxProps } from "@mui/material";

const backButton: SxProps = {
  m: 3,
  color: "#525252",
};

const cardStyle = {
  style: {
    base: {
      color: "black",
      fontSize: "14px",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#c4c1d0",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "fa755a",
    },
  },
};

const styles = {
  backButton,
  cardStyle,
};

export default styles;
