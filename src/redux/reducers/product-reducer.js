import { PRODUCTS } from "../actions" 

const initialState = {
    products_data: [],
}

const productsReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case PRODUCTS:
      return {
        products_data: payload?.products,
      }
    default:
      return state
  }
}

export { productsReducer }