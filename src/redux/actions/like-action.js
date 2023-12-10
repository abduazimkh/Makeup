import { LIKE_PRODUCT, DISLIKE_PRODUCT } from "./index";

const like_load = (product) => {
  return {
      type: LIKE_PRODUCT,
      payload: {
        product
      }
  }
}

const dislike_load = (product) => {
  return {
      type: DISLIKE_PRODUCT,
      payload: {
        product
      }
  }
}


const likedCart = (arg) => async dispatch => {
  dispatch(like_load(arg))
}

const dislikedCart = (arg) => async dispatch => {
  dispatch(dislike_load(arg))
}

export { likedCart, dislikedCart }