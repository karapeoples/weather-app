import React from 'react'
import  Logo from '../images/Logo.png'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
			<div className='App-header-top'>
				<div className='App-header'>
					<div className='logo-frame' href='https://www.weatherapi.com/'>
						<img src={Logo} alt='https://pngtree.com/so/weather-icon' width='100%' />
					</div>
				</div>
				<nav>
					<button>
						<Link to='/'>Your Home for Local Weather</Link>
					</button>
				</nav>
			</div>
		)
}

export default Nav
