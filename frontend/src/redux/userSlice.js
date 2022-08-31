import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../helpers/httpService.js";

export const userSignedIn = (state) => state.user;

export const userControl = createAsyncThunk(
  "user/getUser",
  async (filterData) => {
    try {
      const { email, password } = filterData;

      const { data } = await httpService.get(
        `/users?email=${email}&password=${password}`
      );
      if (data.length <= 0) {
        throw new Error("Kullanıcı Bilgisi Hatalı");
      }
      return data;
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
      return [];
    }
  }
);

const initialState = {
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.isSignedIn = false;
    },
  },
  extraReducers: {
    [userControl.fulfilled]: (state, action) => {
      state.user = action.payload[0];
      state.isSignedIn = true;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
