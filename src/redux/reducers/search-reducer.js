import { SEARCH } from "../actions" 

const initialState = {
    search_value: "",
}

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH:
      return {
        search_value:  action?.payload?.search
      }
    default:
      return state
  }
}

export { searchReducer }