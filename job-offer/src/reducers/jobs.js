import { initialState } from '../store'
import {GET_JOBS, TOGGLE_LOADER} from '../actions'


const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        result: action.payload,
      }

    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer