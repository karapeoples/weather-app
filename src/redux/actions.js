import axios from 'axios'

export const SET_ERROR = 'SET_ERROR'
export const DYNAMIC_WEATHER = 'DYNAMIC_WEATHER'


export const getLocalWeather = (zip) => dispatch => {
  axios.get(`http://api.weatherbit.io/v2.0/current?postal_code=${zip}&units=I&key=ff93c9c024664ab2b04d2eb8e5a16d0b`)
    .then(res => {
      dispatch({ type: DYNAMIC_WEATHER, payload: res.data.data[0]})
    })
    .catch(err => {
      console.log('No GO!!', err.message)
      dispatch({ type: SET_ERROR, payload: err.message})
  })
}