import { CURRECY } from "./index";

const currency_load = (currency) => {
  return {
      type: CURRECY,
      payload: {
        currency
      }
  }
}

const currencyData = (select) => async dispatch => {
  console.log(select);
    dispatch(currency_load(select))
}


export { currencyData }