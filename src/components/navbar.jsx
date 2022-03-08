import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/' className='home'>Home</Link>
        
        <Link to='/cart' className='home'>Checkout</Link>

        <Link to='/favorite' className='home'>Favorites</Link>
      </div>
    )
  }
}

export default Navbar