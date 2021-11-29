import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favsReducer from '../reducers/favs'
import jobsReducer from '../reducers/jobs'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  
  favs: {
    content: [],
  },

  jobs: {
    result: [],
    isError: false,
    isLoading: true,
    query: 'writing'
  }
}


const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  favs: favsReducer,
  jobs: jobsReducer,
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)

const configureStore = createStore(
  persistedBigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
)


export const persistor = persistStore(configureStore)
export default configureStore