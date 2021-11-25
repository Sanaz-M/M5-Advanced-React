import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions'
import { initialState } from '../store'



const favsReducer = (state = initialState.favs, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((company) => company !== action.payload),
      }

    default:
      return state
  }
}

export default favsReducer