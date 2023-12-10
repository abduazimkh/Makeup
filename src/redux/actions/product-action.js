import axios from "../../services/api";
import { PRODUCTS } from "./index";

const products_load = (products) => {
  return {
      type: PRODUCTS,
      payload: {
        products
      }
  }
}

const productsData = () => async dispatch => {
  axios("products.json")
    .then(response => {
      dispatch(products_load(response.data))
    })
    .catch(error => console.log(error))
}


export { productsData }