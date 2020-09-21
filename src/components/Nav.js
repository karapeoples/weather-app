import React from 'react'
import  Logo from '../images/Logo.png'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="App-header-top">
      <div className="App-header">
      <div className='logo-frame'>
        <img src={Logo} alt='Logo' href='https://pngtree.com/so/weather-icon' width='100%'/>
      </div>
    </div>
      <nav>
       <button><Link to='/'>Home</Link></button>
       <button><Link to='/forecast'>Local Weather</Link></button>
        </nav>
    </div>
  )
}

export default Nav
