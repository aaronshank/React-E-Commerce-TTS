import React from 'react'
import '../css/productPreview.css'
import prodArray from './productArray'

class ProductPreview extends React.Component {
  constructor( props ) {
    super( props )
    // console.log(props)
    this.state = {
      id: this.props.id
    }
  }

  render() {
    return (
      <div>
        <img src={prodArray[this.state.id].imageUrl} alt={prodArray[this.state.id].imageAlt} className='custImage' />
        <h1>PC: {prodArray[this.state.id].name}</h1>
      </div>
    )
  }
}

export default ProductPreview