import React from 'react'
import '../css/product.css'
import Reviews from './review'

class Product extends React.Component {
  // constructor( props ) {
  //   super( props )
  //   // Product Name
  //   // Product Description
  //   // Product Price
  //   // Product Image
  //   // Product Reviews
  // }

  render() {
    return (
      <div className='product'>
        <h1>PC: Here be Product Name</h1>
        <h2>PC: Here be Product Image</h2>
        <p>NOTE: Bottom 3 no-show on Home</p>
        <h3>PC: Here be Product Price</h3>
        <h4>PC: Here be Product Image</h4>
        <br />
        <Reviews />
      </div>
    )
  }
}

export default Product