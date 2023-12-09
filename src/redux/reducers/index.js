import { combineReducers } from "redux"; 
import { productsReducer } from "./product-reducer";

const rootReducer = combineReducers({
  product: productsReducer,

})

export default rootReducer;