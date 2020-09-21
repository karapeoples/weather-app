import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { DYNAMIC_WEATHER, SET_ERROR, PREPARED_DATA } from './actions'


const initialState = {
  isFetching: false,
  localWeather: [],
  error: ''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
			case PREPARED_DATA:
				return {
					...state,
					isFetching: true,
					localWeather: [],
				}

			case DYNAMIC_WEATHER:
				return {
					...state,
          localWeather: action.payload,
          isFetching: false
				}
			case SET_ERROR:
				return {
          ...state,
          isFetching: false,
					error: action.payload,
				}
			default:
				return state
		}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()))
export default store