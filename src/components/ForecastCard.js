import React from 'react'

const ForecastCard = ({forecast, localInfo}) => {
  return (
			<div >
				{forecast.map((info, index) => {
					return (
						<div key={index} className='weather-card'>
							<h1>{info.date}</h1>
							<div>
								<img src={info.day.condition.icon} alt='nope' />
								<h5>{info.day.condition.text}</h5>
							</div>
							<h3>High: {info.day.maxtemp_f}</h3>
							<h3>Low: {info.day.mintemp_f}</h3>
							<h3>Average: {info.day.avgtemp_f}</h3>
							<p>Chance of Rain: {info.day.daily_chance_of_rain}%</p>
							<p>Chance of Snow: {info.day.daily_chance_of_snow}%</p>

							<div>
								<h4>Sunrise: {info.astro.sunrise}</h4>
								<h4>Sunset: {info.astro.sunset}</h4>
								<h4>MoonRise: {info.astro.moonrise}</h4>
								<h4>MoonSet: {info.astro.moonset}</h4>
							</div>
						</div>
					)
				})}
			</div>
		)
}

export default ForecastCard
