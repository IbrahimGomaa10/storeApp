import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ibrahim",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
// export const {} = themeSlice.actions;
