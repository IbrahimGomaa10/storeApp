import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ibrahim",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
// export const {} = userSlice.actions;
