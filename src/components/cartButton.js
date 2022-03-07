import React, { Component } from 'react'

class CartButton extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='Checkout'>
          {this.props.products?.map( product => (
            <li key={product.id} className='col-xs-12'>
              <div className='product'>
                <img src={product.imageUrl} alt={product.name}></img>
                <p>{product.name}</p>
                <div className='product-price'>
                  <div>
                    ${product.price}
                  </div>
                  <button onClick={() => this.props.addToCart( product )} className='button primary'>
                    Add To Cart
                  </button>
                </div>
              </div>
              <hr />
            </li>
          ) )}
        </ul>
      </div>
    );
  }
}

export default CartButton;