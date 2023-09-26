import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import LibraryLogo from '../assets/Library.svg'
import { Link} from 'react-router-dom';

function Nav() {
    function openMenu() {
        document.body.classList += " menu--open";
    }
    function removeMenu() {
        document.body.classList.remove("menu--open");
    }

    return  (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link"> Home </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link"> Books</Link>
                    </li>
                    <button onClick={openMenu} className="btn__menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link"> 
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length"> 2 </span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button onClick={removeMenu} className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link"> Home </a>
                        </li>
                        <li className="menu__list">
                            <a href="/books" className="menu__link"> Books </a>
                        </li>
                        <li className="menu__list">
                            <a href="/cart" className="menu__link"> Cart </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav;