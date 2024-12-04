import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
// export const {} = themeSlice.actions;
