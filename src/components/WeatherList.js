import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalWeather, prepareData } from '../redux/actions'
import WeatherCard from './WeatherCard'



const WeatherList = () => {
  const data = useSelector((state) => state.isFetching)
  const weather = useSelector(state => state.localWeather)
  const localInfo = useSelector(state => state.localInfo)
  const image = useSelector(state => state.image)
  const dispatch = useDispatch()
  const [zip, setZip] = useState('')
  const [toggle, setToggle] = useState(false)


  const handleSubmit = (e)  => {
    e.preventDefault()
    setToggle(true)
    dispatch(getLocalWeather(zip))
    dispatch(prepareData())

  }
  const handleChange = e => {
   setZip(e.target.value)
  }


  return (
    <section>
      {toggle === false ?
        <section>
        <form>
        <input type="text" value={zip} name='zip' placeholder='Find Your Weather by Zip Code' onChange={handleChange}/>
        <button onClick={handleSubmit}>Forecast Now</button>
          </form>
        </section>
      :
      <section>
        {data  ? <div> **The INFO is Coming** </div>
            :
            <section>
              <br/>
              <WeatherCard weather={weather} image={image} localInfo={localInfo}/>
          </section>
      }

        </section>
      }
    </section>
  )
}

export default WeatherList
