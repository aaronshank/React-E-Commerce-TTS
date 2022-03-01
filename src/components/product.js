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

  productOne = {
    name: 'Plant Pots',
    description: [
      'Indoor & Outdoor Use: A simple modern aesthetic and clean matte finish planters indoor plants will perfectly match any home or office décor. it can bear extreme temperature environment and is suitable for indoor and outdoor . With better breathabiity and water absorption, it\'s beneficial to the healthy growth of plants.',
      'Practical Set of 2:This set features 2 pieces, 8 inch in diameter each.Planters are lightweight and easy-to-handle.The indoor & outdoor planters sizes fit nearly all small to medium-sized indoor house plants and herb spice gardens. Works well with orchid, cactus, succulents, aloe vera, basil, flowers, Peace Lily, air plants, snake plant.',
      'Easy draim holses Movable tray:Excess water flows out the dual drainage holes to prevent overwatering and flooding. Plates capture overflow water for easy cleanup. It is recommended to shop a layer of filler in the bottom of the flower pot.',
      'Environmental Material:Made of durable recyclable plastic,solid plastic plant pots protect plants and soil. Premium polypropylene planters feel sturdy in hand but not too heavy. Thick sidewalls from 2mm to 3mm in size keep everything in place.',
      'Perfect shopping experience:We aim to improve planting experience. Guarantee the quality of the product is our responsibility. If you have any questions, please feel free to contact us.'
    ],
    price: '$19.99',
    image: 'https://m.media-amazon.com/images/I/71smkmbWsgL._AC_SL1500_.jpg',
    alt: '2 plant pots',
    isInCart: false
  }

  render() {
    return (
      <div className='product'>
        <h1>PC: {this.productOne.name}</h1>
        <img src={this.productOne.image} alt={this.productOne.alt} className='plantImage' />
        <h2>PC: {this.productOne.price}</h2>
        {
          this.productOne.description.map( ( indDesc, index ) => {
            return <li key={index}>PC{indDesc}</li>
          } )
        }
        {/* button to change isInCart -> True */}
        <p hidden>NOTE: Bottom 3 no-show on Home</p>
        <br />
        <Reviews />
      </div>
    )
  }
}

export default Product