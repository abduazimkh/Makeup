import { ADD_TO_CART, INCREMENT_COUNT, DECREMENT_COUNT, REMOVE_FROM_CART } from "./index";

const add_product_load = (product) => {
  return {
      type: ADD_TO_CART,
      payload: {
        product
      }
  }
}

const inc_count_load = (product) => {
  return {
      type: INCREMENT_COUNT,
      payload: {
        product
      }
  }
}

const dec_count_load = (product) => {
  return {
      type: DECREMENT_COUNT,
      payload: {
        product
      }
  }
}

const remuve_count_load = (product) => {
  return {
      type: REMOVE_FROM_CART,
      payload: {
        product
      }
  }
}


const addToCart = (arg) => async dispatch => {
  dispatch(add_product_load(arg))
}

const incCart = (arg) => async dispatch => {
  dispatch(inc_count_load(arg))
}

const decCart = (arg) => async dispatch => {
  dispatch(dec_count_load(arg))
}

const remuveCart = (arg) => async dispatch => {
  dispatch(remuve_count_load(arg))
}

export { addToCart, incCart, decCart, remuveCart }