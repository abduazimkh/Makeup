import axios from "../../services/api";
import { CURRECY } from "./index";

const currency_load = (currency) => {
  return {
      type: CURRECY,
      payload: {
        currency
      }
  }
}

const currencyData = () => async dispatch => {
  axios(`products.json`)
    .then(response => {
      dispatch(currency_load(response.data))
    })
    .catch(error => console.log(error))
}


export { currencyData }