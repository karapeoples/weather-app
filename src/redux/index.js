import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { DYNAMIC_WEATHER, SET_ERROR, PREPARED_DATA, WEATHER_IMAGE, WEATHER_INFO } from './actions'


const initialState = {
  isFetching: false,
	localWeather: [],
	image: [],
	localInfo: [],
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
					localWeather: [action.payload],
					isFetching: false,
				}
			case WEATHER_IMAGE:
				return {
					...state,
					image: [action.payload],
					isFetching: false,
				}
			case WEATHER_INFO:
				return {
					...state,
					localInfo: [action.payload],
					isFetching: false,
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