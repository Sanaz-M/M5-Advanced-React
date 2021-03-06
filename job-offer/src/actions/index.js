export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const GET_JOBS = 'GET_BOOKS'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const SEARCH_QUERY = 'SEARCH_QUERY'

export const addToFavAction = (addCompany) => ({
    type: ADD_TO_FAV,
    payload: addCompany, 
  })
  
  export const removeFromFavAction = (indexToRemove) => ({
    type: REMOVE_FROM_FAV,
    payload: indexToRemove,
  })

  export const getJobsAction = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`)
        if (response.ok) {
          const {data} = await response.json()
          dispatch({
            type: GET_JOBS,
            payload: data,
          })
          dispatch({
            type: SEARCH_QUERY,
            payload: query
          })
          setTimeout(() => {
            dispatch({
              type: TOGGLE_LOADER,
              payload: false,
            })
          }, 1000)
        } else {
          console.log('error in fetching')
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        })
      }
    }
  }