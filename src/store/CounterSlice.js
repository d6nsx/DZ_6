import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    isRunning: false,
  },
  reducers: {
    startTimer(state) {
      state.isRunning = true;
    },
    stopTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.time = 0;
    },
    tick(state) {
      if (state.isRunning) {
        state.time += 1;
      }
    },
  },
});

export const { startTimer, stopTimer, resetTimer, tick } = timerSlice.actions;
export default timerSlice.reducer;
