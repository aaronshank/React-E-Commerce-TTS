import React from 'react'
import Product from './product'
import { Link } from 'react-router-dom'
import '../css/home.css'

class Home extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to='/product'><Product /></Link>
          </div>
          <div className="carousel-item">
          <Link to='/product'><Product /></Link>
          </div>
          <div className="carousel-item">
          <Link to='/product'><Product /></Link>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Home