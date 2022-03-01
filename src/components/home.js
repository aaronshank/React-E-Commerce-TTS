import React from 'react'
import ProductPreview from './productPreview'
import { Link } from 'react-router-dom'
import '../css/home.css'
import prodArray from './productArray'

class Home extends React.Component {


  render() {
    let randomItem = Math.floor(Math.random() * 5)
    randomItem = prodArray[randomItem]
    return (
      <div>
        <div className='featured-item'>
          <h1>Featured Item</h1>
          <Link to='/product'><ProductPreview name={randomItem.name} imageUrl={randomItem.imageUrl} imageAlt={randomItem.imageAlt} /></Link>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide cust-carousel" data-bs-ride="carousel">
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
                if ( index === 0 ) {
                  return (
                    <div className="carousel-item active">
                      {/* <Link to='/product'><Product name={prod.name} image={prod.imageUrl} alt={prod.imageAlt} /></Link> */}
                      <Link to='/product'><ProductPreview key={index} name={prod.name} imageUrl={prod.imageUrl} imageAlt={prod.imageAlt} /></Link>
                    </div>
                  )
                } else {
                  return (
                    <div className="carousel-item">
                      {/* <Link to='/product'><Product name={prod.name} image={prod.imageUrl} alt={prod.imageAlt} /></Link> */}
                      <Link to='/product'><ProductPreview key={index} name={prod.name} imageUrl={prod.imageUrl} imageAlt={prod.imageAlt} /></Link>
                    </div>
                  )
                }
              } )
            }
          </div>
          <br />

          <button class="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Previous</span> */}
          </button>
          <button class="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Next</span> */}
          </button>
        </div>
      </div>
    )
  }
}

export default Home