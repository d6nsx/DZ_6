import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./CounterSlice";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    data: dataReducer,
  },
});

export default store;
