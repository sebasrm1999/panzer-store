import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setSortBy } from "@/store/slices/homeSlice";
import styles from "@/styles/sortingPanel";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

function SortingPanel() {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.home);
  return (
    <Box sx={styles.container}>
      <FormControl sx={styles.formControl}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort By"
          onChange={(event) =>
            dispatch(setSortBy(event.target.value as string))
          }
          sx={styles.selectInput}
          value={sortBy}
        >
          <MenuItem value="asc">Low Price</MenuItem>
          <MenuItem value="desc">High Price</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => dispatch(setSortBy(""))}
        sx={styles.clearFiltersButton}
      >
        Clear filters
      </Button>
    </Box>
  );
}

export default SortingPanel;
