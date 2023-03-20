import { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  flexDirection: ["column", "row"],
  mt: 3,
  justifyContent: ["center", "flex-start"],
  alignItems: "center",
  width: "100%",
  height: [100, 60],
};

const formControl: SxProps = {
  width: ["100%", "25%"],
  mr: [0, 5],
  mt: [1, 0],
};

const selectInput: SxProps = {
  border: "1px solid #525252",
  color: "#525252",
  height: "100%",
};

const clearFiltersButton: SxProps = {
  mt: [1, 0],
  color: "#525252",
  fontWeight: "bold",
  height: "100%",
  width: ["100%", "10%"],
  "&:hover": {
    backgroundColor: "lightgray",
  },
};

const styles = { container, formControl, selectInput, clearFiltersButton };

export default styles;
