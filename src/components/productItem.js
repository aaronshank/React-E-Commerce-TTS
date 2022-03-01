import { render } from '@testing-library/react'
import React from 'react'
import Reviews from './review'
import prodArray from './productArray'

class ProductItem extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      product: this.props.product
    }
  }


  render() {
    return (
      <div>
        <div className='product'>
          <h1>PC: {this.state.product.name}</h1>
          <img src={this.state.product.image} alt='2 plant pots' className='plantImage' />
          <h2>PC: {this.state.product.price}</h2>
          {
            this.state.product.description.map( ( indDesc, index ) => {
              return <li key={index}>PC{indDesc}</li>
            } )
          }
          <p hidden>NOTE: Bottom 3 no-show on Home</p>
          <br />
          <Reviews />
        </div>
      </div>
    )
  }
}

export default ProductItem