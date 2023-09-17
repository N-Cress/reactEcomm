import React from 'react';
import { books } from '../data';
import Book from "./ui/Book";

export default function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Discount <span className='purple'> Books </span>
                </h2>
                <div className='books'>
                    {books
                    .filter(book => book.salePrice > 0)
                    .slice(0, 8)
                    .map((book) => {
                        return <Book book={book}
                        key={book.id}
                        title={book.title}
                        originalPrice={book.originalPrice}
                        salePrice={book.salePrice}
                        rating={book.rating}
                        />
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}
