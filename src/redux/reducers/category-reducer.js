import { ADD_CATEGORY, ALL_CATEGORY, SINGLE_CATEGORY } from "../actions" 

const initialState = {
    category_data: [],
}

const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CATEGORY:
      return {
        categoty_data:  action?.payload?.categoryy
      }
    default:
      return state
  }
}

export { categoryReducer }