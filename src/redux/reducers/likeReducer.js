
import { LIKE_PRODUCT, DISLIKE_PRODUCT } from "../actions";

const initialState = {
    liked_products: []
};

const likedReducer = (state = initialState, action) => {
    let product_index;
    switch (action.type) {
        case LIKE_PRODUCT:
            product_index = state.liked_products.findIndex((product) => product.id === action?.payload.product.id)
            let newliked = state.liked_products;
            if (product_index === -1) {
                newliked = [...state.liked_products, action?.payload.product];
            }
            return {
                liked_products: newliked,
            };
        case DISLIKE_PRODUCT:
            product_index = state.liked_products.findIndex((product) => product.id === action?.payload.product.id)
            let removeditem = state.liked_products.filter((_, index) => index !== product_index);
            return {
              liked_products: removeditem
            }
        default:
            return state;
    }
};

export {likedReducer}