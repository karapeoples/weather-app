import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { DYNAMIC_WEATHER, SET_ERROR } from './actions'


const initialState = {
  localWeather: [],
  error: ''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_WEATHER:
      return {
        ...state,
        localWeather: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()))
export default store