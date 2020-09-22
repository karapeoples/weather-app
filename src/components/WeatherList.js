import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalWeather, prepareData } from '../redux/actions'
import WeatherCard from './WeatherCard'
import ForecastCard from './ForecastCard'
import{Progress} from 'reactstrap'



const WeatherList = () => {
  const data = useSelector((state) => state.isFetching)
  const weather = useSelector(state => state.localWeather)
  const localInfo = useSelector(state => state.localInfo)
  const forecast = useSelector(state => state.forecast)
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
				{toggle === false ? (
					<section>
						<form>
							<input type='text' value={zip} name='zip' placeholder='Find Your Weather by Zip Code' onChange={handleChange} />
							<button onClick={handleSubmit}>Get Forecast Now</button>
						</form>
					</section>
				) : (
					<section>
						{data ? (
							<div>
								<Progress multi>
									<Progress striped bar value='10' />
									<Progress striped bar color='success' value='30' />
									<Progress striped bar color='warning' value='20' />
									<Progress striped bar color='danger' value='20' />
								</Progress>
							</div>
						) : (
							<section>
								<br />
								{localInfo.map((info, index) => {
									return (
										<div key={index} className='weather-card'>
											<h1>
												{info.name}, {info.region}
											</h1>
											<h5>{info.localtime}</h5>
											<WeatherCard weather={weather} image={image} localInfo={localInfo} />
										</div>
									)
								})}

								<br />
								<ForecastCard forecast={forecast} localInfo={localInfo} />
							</section>
						)}
					</section>
				)}
			</section>
		)
}

export default WeatherList
