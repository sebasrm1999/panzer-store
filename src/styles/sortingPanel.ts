import { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
};

const formControl: SxProps = {
  width: ["100%", "300px"],
  mr: 5,
  mt: [1, 0],
};

const selectInput: SxProps = {
  border: "1px solid #525252",
  color: "#525252",
};

const styles = { container, formControl, selectInput };

export default styles;
