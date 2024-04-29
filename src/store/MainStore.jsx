import { configureStore } from "@reduxjs/toolkit";
import toggle from './ToggleState'

const store = configureStore({
  reducer: {
    counter: toggle ,
  },
});

export default store;
