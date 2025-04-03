import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: [],
  reducers: {
    setInterview: (state, action) => {
      return action.payload;
    },
    addInterview: (state, action) => {
      state.push(action.payload);
    },
    removeInterview: () => [],
  },
});

export default interviewSlice.reducer;
export const { setInterview, addInterview, removeInterview } =
  interviewSlice.actions;
