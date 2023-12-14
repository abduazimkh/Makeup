import { ADD_CATEGORY, SUB_CATEGORY } from "../actions" 

const initialState = {
    category_data: [],
    subcategory: []
}

const categoryReducer = (state = initialState, action) => {
  console.log(action?.payload?.sub);
  switch(action.type){
    case ADD_CATEGORY:
      return {
        categoty_data:  action?.payload?.categoryy
      }
    case SUB_CATEGORY:
      return {
        subcategory: action?.payload?.sub
      }
    default:
      return state
  }
}

export { categoryReducer }