import React from 'react'
import '../css/product.css'
import Reviews from './review'
import prodArray from './productArray'


class Product extends React.Component {
  constructor( props ) {
    super( props )
    console.log(props.toString())
    this.state = {
      id: this.props.id
    }
  }



  render() {
    return (
      <div className='product'>
        <h1>PC: {prodArray[this.state.id].name}</h1>
        <img src={prodArray[this.state.id].imageUrl} alt={prodArray[this.state.id].imageAlt} className='plantImage' />
        <h2>PC: {prodArray[this.state.id].price}</h2>
        {/* {
          this.state.product.description.map( ( indDesc ) => {
            return <li>PC{indDesc}</li>
          } )
        } */}
        <p>PC: {prodArray[this.state.id].description}</p>
        {/* button to change isInCart -> True */}
        <p hidden>NOTE: Bottom 3 no-show on Home</p>
        <br />
        <Reviews />
      </div>
    )
  }
}

export default Product