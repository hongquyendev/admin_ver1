import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (dataUser) => {
      state.user = dataUser;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
