import Nav from './components/Nav.jsx';
import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books.jsx';
import BooksPage from './pages/BooksPage.jsx';
import Cart from './pages/Cart.jsx';
import { books } from "./data";

function App() {
  let isCart;
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
}
  function deleteFromCart(book) {
    setCart(cart.filter(item => book.id !== item.id))
  }
  function checkCart(cart) {
    if (cart.length !== 0) {
      isCart = true;
    }
    else {
      isCart = false;
    }
  }
  checkCart(cart)
  console.log(isCart)

function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        if (quantity > 99) {
          return {
            ...item, 
            quantity: 99
          }
        }
        else if (quantity < -1) {
          return {
            ...item,
            quantity: 0
          }
        }
        else {
          return {
            ...item,
            quantity: quantity,
          }
        }
      }
      else {
        return item
      }
    }))
    }
  useEffect(() => {
    console.log(cart);
  }, [cart]);

 


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home books={books}/>} />
        <Route path="/books" element={<Books books={books}/>} />
        <Route path="/books/:id" element={<BooksPage books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element={<Cart deleteFromCart={deleteFromCart} changeQuantity={changeQuantity} books={books} cart={cart} isCart={isCart}/>} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;

// <Landing /> 
//       <Highlights /> 
//       <Featured />
//       <Discounted /> 
//       <Explore />