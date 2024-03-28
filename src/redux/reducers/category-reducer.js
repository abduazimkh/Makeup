import { ADD_CATEGORY, SUB_CATEGORY } from "../actions" 

const initialState = {
    category_data: [],
    subcategory: []
}

const categoryReducer = (state = initialState, action) => {
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