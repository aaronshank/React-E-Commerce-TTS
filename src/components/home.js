import React from 'react'
import ProductPreview from './productPreview'
import { Link } from 'react-router-dom'
import '../css/home.css'
import prodArray from './productArray'

class Home extends React.Component {

  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          {
            prodArray.map( ( prod, index ) => {
              return (
                <div className="carousel-item ">
                  {/* <Link to='/product'><Product name={prod.name} image={prod.imageUrl} alt={prod.imageAlt} /></Link> */}
                  <Link to='/product'><ProductPreview name={prod.name} imageUrl={prod.imageUrl} imageAlt={prod.imageAlt} /></Link>
                </div>
              )
            } )
          }
        </div>
        <br />
      </div>
    )
  }
}

export default Home