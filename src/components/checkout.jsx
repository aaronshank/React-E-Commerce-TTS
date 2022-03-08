import React from 'react';
import productArray from './productArray'
import CartButton from './cartButton'
import Cart from './cart'
import '../css/checkout.css'

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: productArray,
      cartItems: JSON.parse( localStorage.getItem( 'cartItems' ) ) ? JSON.parse( localStorage.getItem( 'cartItems' ) ) : [],
    };
  }

  createOrder = ( order ) => {
    alert( "Need to save order for " + order.name )
  }

  removeFromCart = ( product ) => {
    const cartItems = this.state.cartItems;
    this.setState( { cartItems: cartItems.filter( x => x.id !== product.id ) } )
    localStorage.setItem( 'cartItems', JSON.stringify( this.state.cartItems ) );
  }

  addToCart = ( product ) => {
    const cartItems = this.state.cartItems;
    let isInCart = false;
    cartItems.forEach( item => {
      if ( item.id === product.id ) {
        item.count++;
        isInCart = true;
      }
    } );
    if ( !isInCart ) {
      cartItems.push( { ...product, count: 1 } )
    }
    this.setState( { cartItems } );
    localStorage.setItem( 'cartItems', JSON.stringify( cartItems ) );
  }

  render() {
    return (
      <div className='grid-container checkoutContainer'>
        <h1 style={{ textAlign: 'center', paddingTop: '10px', fontSize: '32px' }}>Checkout</h1>
        <main>
          <div className='content'>
            <div className='main'>
              <CartButton products={this.state.products} addToCart={this.addToCart}></CartButton>
            </div>
            <div className='sidebar'>
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Checkout;