import { SEARCH } from "./index";

const serach_load = (search) => {
  return {
      type: SEARCH,
      payload: {
        search
      }
  }
}

const searchData = (value) => dispatch => {
  dispatch(serach_load(value))
}

export { searchData }