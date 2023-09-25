import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from '../components/ui/Rating.jsx';
import Price from '../components/ui/Price.jsx';

export default function BooksPage({ books }) {
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" /> 
                        </Link>
                        <Link to="/books"> 
                            <h2 className='book__selected--title--top'> Books </h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src="https://covers.openlibrary.org/b/id/10958382-L.jpg" alt="" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title"> </h2>
                            <Rating rating="4.5" />
                            <div className="book__selected--price">
                                <Price originalPrice={10} salePrice={null} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
