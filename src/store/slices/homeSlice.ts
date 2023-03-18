import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  sortBy: string;
}

const initialState: HomeState = {
  sortBy: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = homeSlice.actions;

export default homeSlice.reducer;
