import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import LibraryLogo from '../assets/Library.svg'

function Nav() {
    return  (
        <nav>
            <div className="nav__container">
                <a href="">
                    <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link"> Home </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link"> Books</a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/" className="nav__link"> 
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length"> 2 </span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <FontAwesomeIcon icon="times" />
                </div>
                <ul className="menu__links">
                    <li className="menu__list">
                        <a href="/" className="menu__link"> Home </a>
                    </li>
                    <li className="menu__list">
                        <a href="/" className="menu__link"> Books </a>
                    </li>
                    <li className="menu__list">
                        <a href="/" className="menu__link"> Cart </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nav;