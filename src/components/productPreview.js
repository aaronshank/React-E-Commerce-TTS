import React from 'react'
import '../css/productPreview.css'

class ProductPreview extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: this.props.name,
      imageUrl: this.props.imageUrl,
      imageAlt: this.props.imageAlt
    }
  }


  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt={this.state.imageAlt} className='custImage' />
        <h1>PC: {this.state.name}</h1>
      </div>
    )
  }
}

export default ProductPreview