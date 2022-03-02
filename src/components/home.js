import React from 'react'
import ProductPreview from './productPreview'
import { Link } from 'react-router-dom'
import '../css/home.css'
import prodArray from './productArray'

class Home extends React.Component {

  render() {
    let randomItem = Math.floor( Math.random() * 5 )
    let randomItemObject = prodArray[randomItem]
    return (
      <div className='formatting-div'>
        <div className='featured-item'>
          <h1>Featured Item</h1>
          <Link to={{ pathname: `/product/${randomItemObject.id}`, state: { randomItemObject } }}>
            <ProductPreview key={randomItemObject.id} id={randomItemObject.id} />
          </Link>
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
                      <Link to={`/product/${prod.id}`} state={{ id: prod.id }}>
                        <ProductPreview key={index} id={prod.id} />
                      </Link>
                    </div>
                  )
                } else {
                  return (
                    <div className="carousel-item">
                      <Link to={{ pathname: `/product/${prod.id}`, state: { prod } }}>
                        <ProductPreview key={index} id={prod.id} />
                      </Link>
                    </div>
                  )
                }
              } )
            }
          </div>
          <br />

          <button className="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Previous</span> */}
          </button>
          <button className="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Next</span> */}
          </button>
        </div>
      </div>
    )
  }
}

export default Home