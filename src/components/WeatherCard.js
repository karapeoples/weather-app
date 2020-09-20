import React from 'react'

const WeatherCard = ({ rh }) => {
	return (
		<div className='weather-card'>
			<h1>{rh}</h1>
		</div>
	)
}

export default WeatherCard
