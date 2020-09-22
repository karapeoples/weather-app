import axios from 'axios'

export const SET_ERROR = 'SET_ERROR'
export const DYNAMIC_WEATHER = 'DYNAMIC_WEATHER'
export const PREPARED_DATA = 'PREPARED_DATA'
export const WEATHER_IMAGE = 'WEATHER_IMAGE'
export const WEATHER_INFO = 'WEATHER_INFO'
export const FORECAST = 'FORECAST'

export const prepareData = () => dispatch => {
  dispatch({ type: PREPARED_DATA });
}

export const getLocalWeather = (zip) => dispatch => {
  axios
			.get(`http://api.weatherapi.com/v1/forecast.json?key=40b2b50c88aa4a44b9a10202202109&q=${zip}&days=10`)
			.then((res) => {
				dispatch({ type: DYNAMIC_WEATHER, payload: res.data.current })
				dispatch({ type: WEATHER_IMAGE, payload: res.data.current.condition })
        dispatch({ type: WEATHER_INFO, payload: res.data.location })
        dispatch({type: FORECAST, payload: res.data.forecast.forecastday})
			})
			.catch((err) => {
				console.log('No GO!!', err.message)
				dispatch({ type: SET_ERROR, payload: err.message })
			})
}

// http://api.weatherapi.com/v1/forecast.json?key=40b2b50c88aa4a44b9a10202202109&q=${zip}&days=10