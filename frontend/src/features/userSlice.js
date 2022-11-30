import { createSlice } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState: {
    loggedInUser: {},
  },
  reducers: {
    setLoggedInUser: (state, action) => {
        console.log(action.payload , "action.payload ...")
      state.loggedInUser = action.payload;
    }
  },
});

export const loggedInUserData = (state) => state.loggedInUser.loggedInUser;
export const { setLoggedInUser } = loggedInUserSlice.actions;
export const loggedInUserReducer = loggedInUserSlice.reducer;