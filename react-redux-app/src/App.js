import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import './App.css';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<ProductListing/>}></Route>
          <Route path="/product/:productId" exact element={<ProductDetail/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
