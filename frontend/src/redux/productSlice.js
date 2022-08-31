import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../helpers/httpService.js";

export const userSignedIn = (state) => state.user;

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const { data } = await httpService.get(`/products`);

    return data;
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
    return [];
  }
});

const initialState = {
  products: [],
  basket: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addBasket: (state, action) => {
      if (state.basket.filter((e) => e.id == action.payload.id) == 0) {
        state.basket.push(action.payload);
      }
    },
    deleteBasket: (state, action) => {
      console.log("IFFF");
      state.basket = state.basket.filter((e) => e.id != action.payload.id);
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addBasket, deleteBasket } = productSlice.actions;
export default productSlice.reducer;
