import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_COUNT, DECREMENT_COUNT } from "../actions";

const initialState = {
  cart_products: [],
};

function checkDecrement(count){
  if(count >= 1){
    return count - 1
  }
  return count
}

const cartReducer = (state = initialState, action) => {
  let product_index;
  switch (action.type) {
    case ADD_TO_CART:
      product_index = state.cart_products.findIndex((product) => product.id === action?.payload.product.id);
      let newcart = state.cart_products;
      if (product_index === -1) {
        newcart = [...state.cart_products, action?.payload.product];
      }
      return {
        cart_products: newcart,
      };
    case INCREMENT_COUNT:
    case DECREMENT_COUNT:
      product_index = state.cart_products.findIndex((product) => product.id === action?.payload.product.id);
      let addedcart = state.cart_products.map((product, index) => {
        if (index === product_index) {
          product.count = action.type === INCREMENT_COUNT ? product.count + 1 : checkDecrement(product.count); 
        }
        return product;
      });
      addedcart = state.cart_products.filter(product => product.count > 0)
      return {
        cart_products: addedcart,
      };
    case REMOVE_FROM_CART:
      product_index = state.cart_products.findIndex((product) => product.id === action?.payload.product.id);
      let removeditem = state.cart_products.filter((_, index) => index !== product_index);
      return {
        cart_products: removeditem
      }
    default:
      return state;
  }
};

export { cartReducer };