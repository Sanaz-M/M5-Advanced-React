import { initialState } from '../store'
import { GET_JOBS, TOGGLE_LOADER, SEARCH_QUERY } from '../actions'


const jobsReducer = (state = initialState.jobs, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                result: action.payload,
            }
        case SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
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