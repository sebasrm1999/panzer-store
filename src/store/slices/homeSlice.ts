import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  sortBy: string | undefined;
}

const initialState: HomeState = {
  sortBy: undefined,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string | undefined>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = homeSlice.actions;

export default homeSlice.reducer;
