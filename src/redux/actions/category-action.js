import axios from "../../services/api";
import { ADD_CATEGORY, SUB_CATEGORY } from "./index";

const caregory_load = (categoryy) => {
  return {
      type: ADD_CATEGORY,
      payload: {
        categoryy
      }
  }
}

const subcategory = (sub) => {
  return {
      type: SUB_CATEGORY,
      payload: {
        sub
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

const subCategory = (data) => dispatch => {
  dispatch(subcategory(data))
}


export { categoryData, subCategory }