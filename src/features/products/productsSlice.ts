import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../../types";

interface ProductsState {
  productsList: Product[];
}

const initialState: ProductsState = {
  productsList: []
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productsList = action.payload
    }
  }
})

export default productsSlice.reducer;
export const { addProducts } = productsSlice.actions