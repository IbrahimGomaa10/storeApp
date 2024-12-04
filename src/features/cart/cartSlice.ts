import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ibrahim",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
// export const {} = cartSlice.actions;
