import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/' className='home'>Home</Link>
      </div>
    )
  }
}

export default Navbar