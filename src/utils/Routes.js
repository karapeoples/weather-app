import React from 'react'
import { Route } from 'react-router'
import WeatherDash from '../components/WeatherDash'


const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={WeatherDash} />
    </div>
  )
}

export default Routes
