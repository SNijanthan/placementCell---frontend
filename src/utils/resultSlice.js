import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: [],
  reducers: {
    addResult: (state, action) => action.payload,
    removeResult: () => null,
  },
});

export default resultSlice.reducer;
export const { addResult, removeResult } = resultSlice.actions;
