import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Book({ book }) {
  return (
    <div className="book">
                        <a href="">
                            <figure className="book__img--wrapper">
                                <img src={book.url} alt="" />
                            </figure>
                        </a>
                        <div className="book__title">
                            <a href="" className='book__title--link'> 
                               {book.title}
                            </a>
                        </div>
                        <div className="book__ratings">
                            {
                                new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star"> </FontAwesomeIcon>) 
                            } {
                                Number.isInteger(!book.rating) && <FontAwesomeIcon icon="star-half-alt"></FontAwesomeIcon>
                            }
                        </div>
                        <div className="book__price"> 
                        { book.salePrice ? (
                            <>
                            <span className="book__price--normal"> $ {book.originalPrice}</span>
                           $ {book.salePrice}
                            </>
                        ) : (
                           <>
                           {book.originalPrice}
                           </> 
                        )}
                        </div>
                    </div>
  )
}
