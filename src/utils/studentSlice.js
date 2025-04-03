import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    addStudent: (state, action) => action.payload,
    removeStudent: () => null,
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
