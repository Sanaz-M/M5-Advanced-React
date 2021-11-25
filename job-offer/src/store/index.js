import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favsReducer from '../reducers/favs'
import jobsReducer from '../reducers/jobs'
import thunk from 'redux-thunk'

const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  
  favs: {
    content: [],
  },

  jobs: {
    result: [],
    isError: false,
    isLoading: true,
  }
}


const bigReducer = combineReducers({
  favs: favsReducer,
  jobs: jobsReducer,
})

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore