import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: [],
  reducers: {
    addInterview: (state, action) => action.payload,
    removeInterview: () => null,
  },
});

export default interviewSlice.reducer;
export const { addInterview, removeInterview } = interviewSlice.actions;
