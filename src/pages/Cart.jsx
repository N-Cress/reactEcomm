import React, { useState, useEffect } from 'react'


export default function Cart( {cart, changeQuantity, deleteFromCart, checkCart, isCart } ) {
   
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +((item.salePrice  || item.originalPrice) * item.quantity).toFixed(2);
        });
        return price;
    }
    let cartCheck = isCart;
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">
                            Cart
                        </h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__book"> Book </span>
                            <span className="cart__quantity"> Quantity </span>
                            <span className="cart__total"> Price </span>
                        </div>
                        
                            {
                                cartCheck ? (
                                    cart.map((book) => {
                                        return (
                                        <div className="cart__body">
                                            <div className="cart__item"> 
                                                <div className="cart__book">
                                                    <img src={book.url} alt="" className="cart__book--img" />
                                                    <div className="cart__book--info">
                                                        <span className='cart__book--title'>
                                                            {book.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                            ${(book.originalPrice || book.salePrice.toFixed(2))}
                                                        </span>
                                                        <button onClick={() => deleteFromCart(book)} className="cart__book--remove">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input 
                                                    type="number"
                                                    max={99}
                                                    min={0}
                                                    placeholder="0"
                                                    value={book.quantity}
                                                    className="cart__input"
                                                    onChange={(event) => changeQuantity(book, event.target.value)}
                                                    />
                                                </div>
                                                <div className="cart__total">
                                                ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                              <div className="total">
                                              <div className="total__item total__sub-total">
                                                  <span> Subtotal </span>
                                                  <span> ${(total() * 0.9).toFixed(2)} </span>
                                              </div>
                                              <div className="total__item total__tax">
                                                  <span> Tax </span>
                                                  <span> ${(total() * 0.1).toFixed(2)} </span>
                                              </div>
                                              <div className="total__item total__price">
                                                  <span> Total </span>
                                                  <span> ${total()}</span>
                                              </div>
                                              <button className="btn btn__checkout no-cursor"
                                               onClick={() => alert('not implemented')}>
                                                 Checkout
                                              </button>
                                          </div>
                                        </div>
                                        )
                                    })
                                ) : (
                                <div className="cart__body">
                                    <div className="help">
                                        Hello
                                    </div>
                                </div>
                                    
                                )
                            }
                        
                    </div>
                  
                </div>
            </div>
        </main>
    </div>
  );
}
