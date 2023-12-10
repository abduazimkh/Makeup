import { CURRECY } from "../actions" 

const initialState = {
    currency_data: "UZS",
}

const currencyReducer = (state = initialState, action) => {
  console.log(action?.payload?.currency);
  switch(action.type){
    case CURRECY:
      return {
        currency_data: action?.payload?.currency
      }
    default:
      return state
  }
}

export { currencyReducer }