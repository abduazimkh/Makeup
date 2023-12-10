import axios from "../../services/api";
import { ADD_CATEGORY, ALL_CATEGORY, SINGLE_CATEGORY } from "./index";

const caregory_load = (categoryy) => {
  return {
      type: ADD_CATEGORY,
      payload: {
        categoryy
      }
  }
}

const categoryData = (type) => async dispatch => {
  axios(`products.json?product_type=${type}`)
    .then(response => {
      dispatch(caregory_load(response.data))
    })
    .catch(error => console.log(error))
}


export { categoryData }