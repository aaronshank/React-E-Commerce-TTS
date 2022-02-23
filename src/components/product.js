import React from 'react'
import '../css/product.css'
import Reviews from './review'

const GENERIC_PRODUCT_NAME = 'Product Name'
const GENERIC_PRODUCT_DESCRIPTION = 'Product Description'
const GENERIC_PRODUCT_PRICE = '$29.99'
const GENERIC_PRODUCT_IMAGE = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png'

class Product extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: GENERIC_PRODUCT_NAME,
      description: GENERIC_PRODUCT_DESCRIPTION,
      price: GENERIC_PRODUCT_PRICE,
      image: GENERIC_PRODUCT_IMAGE
    }
    // Product Name
    // Product Description
    // Product Price
    // Product Image
    // Product Reviews
  }

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