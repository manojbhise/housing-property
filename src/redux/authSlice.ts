import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "./AuthSlice-Interface";

const initialState: AuthInitialState = {
  user: {
    dob: "",
    city: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    mobileNum: "",
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;

export const { login, signUp, logout, updateUser } = authSlice.actions;
