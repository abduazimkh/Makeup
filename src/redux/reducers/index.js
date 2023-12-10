import { combineReducers } from "redux"; 
import { productsReducer } from "./product-reducer";
import { cartReducer } from "./cartReducer";
import { likedReducer } from "./likeReducer";
import { categoryReducer } from "./category-reducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  like: likedReducer,
  category: categoryReducer,
  
})

export default rootReducer;