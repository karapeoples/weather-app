import React from 'react'
import { Route } from 'react-router'
import Landing from '../components/Landing'
import WeatherDash from '../components/WeatherDash'
import WeatherList from '../components/WeatherList'

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/forecast' component={WeatherDash} />
      <Route path='/search' component={WeatherList} />
    </div>
  )
}

export default Routes
