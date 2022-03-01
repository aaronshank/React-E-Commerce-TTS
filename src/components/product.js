import React from 'react'
import '../css/product.css'
import Reviews from './review'


class Product extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      product: {
        name: this.props.name,
        description: this.props.description,
        price: this.props.price,
        imageUrl: this.props.url,
        imageAlt: this.props.imageAlt,
        isInCart: this.props.isInCart
      }
    }
  }



  render() {
    return (
      <div className='product'>
        <h1>PC: {this.state.product.name}</h1>
        <img src={this.state.product.imageUrl} alt={this.state.product.imageAlt} className='plantImage' />
        <h2>PC: {this.state.product.price}</h2>
        {/* {
          this.state.product.description.map( ( indDesc, index ) => {
            return <li key={index}>PC{indDesc}</li>
          } )
        } */}
        {/* button to change isInCart -> True */}
        <p hidden>NOTE: Bottom 3 no-show on Home</p>
        <br />
        <Reviews />
      </div>
    )
  }
}

export default Product