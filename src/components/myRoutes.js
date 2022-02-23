import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Footer from './footer'
import Product from './product'

class MyRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default MyRoutes