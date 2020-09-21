import React from 'react'


const WeatherCard = ({ weather, image, localInfo }) => {

	return (
		
		<section className='weather-card'>

 		{localInfo.map((info, index)=>{
			return(
				<div key={index} >
					<h1>{info.name}, {info.region}, {info.country}</h1>
					<h5>{info.localtime}</h5>
				</div>
				)})
			}

				{image.map((info, index) => {
										return (
											<div key={index} className='weather-image-frame'>
										<img src={info.icon} alt="weather-icon" />
												<h5>Condition: {info.text}</h5>
											</div>

										)
									})
							}

				{weather.map((info, index) => {
					return (
						<div key={index}>
							<h3>Temp: {info.temp_f}</h3>
							<h4>Feels: {info.feelslike_f}</h4>
						</div>
					)
				})
			}



</section>


	)
}

export default WeatherCard
