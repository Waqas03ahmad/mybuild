import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  mode: true,
};

const toggle = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = true;
    },
    toggleclose: (state) => {
      state.open = false;
    },
    modechanger: (state) => {
      state.mode = !state.mode;
    },
    tableButttonClosed: (state) => {
      state.tableButton = false;
    },
  },
});

export const { toggleDrawer, toggleclose, modechanger, tableButttonClosed } =
  toggle.actions;

export default toggle.reducer;
