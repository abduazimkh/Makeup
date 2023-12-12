import { combineReducers } from "redux"; 
import { productsReducer } from "./product-reducer";
import { cartReducer } from "./cartReducer";
import { likedReducer } from "./likeReducer";
import { categoryReducer } from "./category-reducer";
import { currencyReducer } from "./currency-reducer";
import { searchReducer } from "./search-reducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  like: likedReducer,
  category: categoryReducer,
  currency: currencyReducer,
  search: searchReducer,
  
})

export default rootReducer;