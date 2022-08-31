import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../helpers/httpService.js";
export const getUser = createAsyncThunk("user/getUser", async (filterData) => {
  try {
    const { email, password } = filterData;

    const { data } = await httpService.get(
      `/users?email=${email}&password=${password}`
    );

    return data;
  } catch (error) {
    return [];
  }
});

const initialState = {
  isSignedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export default loginSlice.reducer;
