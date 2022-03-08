import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Footer from './footer'
import Product from './product'
import Checkout from './checkout'
import { Favorites } from './favorites'

class MyRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/0' element={<Product id={0}/>} />
            <Route path='/product/1' element={<Product id={1}/>} />
            <Route path='/product/2' element={<Product id={2}/>} />
            <Route path='/product/3' element={<Product id={3}/>} />
            <Route path='/product/4' element={<Product id={4}/>} />
            <Route path='/cart' element={<Checkout />} />
            <Route path='/favorite' element={<Favorites />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default MyRoutes