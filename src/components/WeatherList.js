import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalWeather, prepareData } from '../redux/actions'
import WeatherCard from './WeatherCard'



const WeatherList = () => {
  const data = useSelector((state) => state.isFetching)
  const localWeather = useSelector(state => state.localWeather)
  const dispatch = useDispatch()
  const [zip, setZip] = useState('')
  const [toggle, setToggle] = useState(false)
  const [info, setInfo]=useState([])

useEffect(() => {
    dispatch(prepareData())
    dispatch(getLocalWeather(zip))
    setInfo(localWeather)
// eslint-disable-next-line
  },[dispatch])

  const handleSubmit = (e)  => {
    e.preventDefault()
    setToggle(true)
    /* dispatch(getLocalWeather(zip)) */


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
            {info.map((local, index) => {
              return
              <WeatherCard key={index} temp={local.temp_f}/>
          })
              }
            </section>
      }

        </section>
      }
    </section>
  )
}

export default WeatherList
