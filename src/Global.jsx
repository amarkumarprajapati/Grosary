import React from "react";
import { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Main, Route, Router, Routes } from "react-router-dom";
import "./Global.css";
import Storeavl from "./Pages/Storeavl";
import Store1 from "./Storeinfo/Store1";
import Cart from "./Storeinfo/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Components/Login";
import Store2 from "./Storeinfo/Store2";
import Newstore from "./AddStore/Newstore";

const Global = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/storeavl" element={<Storeavl />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store2" element={<Store2 />} />
          <Route path="/store1" element={<Store1/>}/>
          <Route path="/cart" component={<Cart />} />
          <Route path="/checkout" component={<Checkout/>} />
          <Route path="/additems" component={<Newstore/>}/>
        </Routes>
      </Main>
    </div>
  );
};

export default Global;
