import { SxProps } from "@mui/material";

const toolbarContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  padding: 2,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};

const pagesContainer: SxProps = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};

const styles = {
  toolbarContainer,
  pagesContainer,
};

export default styles;
