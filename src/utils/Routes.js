import React from 'react'
import { Route } from 'react-router'
import Landing from '../components/Landing'
import WeatherDash from '../components/WeatherDash'


const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/forecast' component={WeatherDash} />
    </div>
  )
}

export default Routes
