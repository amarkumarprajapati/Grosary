import React from 'react'
import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Main, Route, Router, Routes, } from 'react-router-dom'
import './Global.css'
import Storeavl from './Pages/Storeavl'
import Store1 from './Storeinfo/Store1'
import Cart from './Storeinfo/Cart'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'


const Global = () => {

  
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/storeavl' element={<Storeavl />} />
          <Route path='/store1' element={<Store1  />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Main>
    </div>
  )
}

export default Global