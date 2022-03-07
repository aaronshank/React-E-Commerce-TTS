import React, { createRef, useState } from "react"
import { Component } from "react"
import '../css/productBoard.css'
import prodArray from './productArray'
import { Favorites } from './favorites'
import Reviews from "./reviews"

class ProductBoard extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: this.props.id
    }
  }
  render() {
    return (
      <div className="container productContainer">
        <div className="centerImage">
          <div className="image-container">
            <img className='productImage' src={prodArray[this.state.id].imageUrl} height='200' widith="100" alt={prodArray[this.state.id].imageAlt}></img>
          </div>
          <h1 className="product-title">{prodArray[this.state.id].name}</h1>
        </div>
        <div className="information-container">
          <div className="list">Some Specs:</div>
          <div className="specs">
            <ul>
              <li>Price: ${prodArray[this.state.id].price} </li>
              <li>Manufacturer: Money inc. </li>
              {
                prodArray[this.state.id].description.map( ( indDesc ) => {
                  return <li>{indDesc}</li>
                } )
              }
            </ul>
          </div>
        </div>
        <div className="review-container" height="500" width="400">
          {/* <Favorites /> */}
          <Reviews />
        </div>
      </div>
    )
  }
}
export default ProductBoard;