import { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  flexDirection: ["column", "row"],
  mt: 2,
  justifyContent: ["center", "flex-start"],
  alignItems: "center",
  width: "100%",
};

const formControl: SxProps = {
  width: ["100%", "300px"],
  mr: [0, 5],
  mt: [1, 0],
};

const selectInput: SxProps = {
  border: "1px solid #525252",
  color: "#525252",
  width: "100%",
};

const clearFiltersButton: SxProps = {
  mt: [1, 0],
};

const styles = { container, formControl, selectInput, clearFiltersButton };

export default styles;
