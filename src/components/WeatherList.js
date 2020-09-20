import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalWeather } from '../redux/actions'
import WeatherCard from './WeatherCard'
import {history} from '../'

const WeatherList = () => {
  const localWeather = useSelector(state => state.localWeather)
  const dispatch = useDispatch()
  const [zip, setZip] = useState('')



  const handleClick = e => {
    e.preventDefault()
    dispatch(getLocalWeather(zip))
    history.push('/forecast')
  }
  const handleChange = e => {
   setZip(e.target.value)
  }


  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={zip} name='zip' placeholder='Find Your Weather by Zip Code' onChange={handleChange}/>
        <button>Forecast Now</button>
      </form>

      <div>
        {Object.keys(localWeather).map(local => {
          return <WeatherCard rh={local.rh} />})}
      </div>
    </div>
  )
}

export default WeatherList
