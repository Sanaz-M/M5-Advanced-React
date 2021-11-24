import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions'
import { initialState } from '../store'



const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favs: {
          ...state.favs,
          
          content: [...state.favs.content, action.payload], 
        },
      }
    case REMOVE_FROM_FAV:
      return {
        ...state,
        favs: {
          ...state.favs,
          content: state.favs.content.filter((company) => company !== action.payload), 
        },
      }
    default:
      return state
  }
}

export default mainReducer