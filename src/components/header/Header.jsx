import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logo-dark.png'
import BurgerMenu from '../burger-menu/BurgerMenu'

const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false)
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <nav className="header__nav">
            <a href="index.html" className="header__logo logo">
              <img src={logo} alt="Logo" className="logo__img" />
            </a>

            <ul className="header__menu nav-menu" id="nav-menu__menu">
              <li className="nav-menu__item">
                <a href="#home" className="nav-menu__link active-link">
                  Home
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#about" className="nav-menu__link">
                  About
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#menu" className="nav-menu__link">
                  Menu
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#services" className="nav-menu__link">
                  Services
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#reservation" className="nav-menu__link">
                  Reservation
                </a>
              </li>
            </ul>

            <a href="#reservation" className="header__reservation-btn button ">
              Reserve A Table
            </a>

            {/* <a href="index.html" className="logo__mobile">
          <img className="logo__mobile-img" src={logoMobile} alt="" />
        </a> */}
          </nav>
        </div>
      </header>
      <button
        className={!burgerIsActive ? 'burger' : 'burger active'}
        onClick={() => setBurgerIsActive(!burgerIsActive)}
      >
        <div className="burger__wrapper">
          <span></span>
        </div>
      </button>
      <BurgerMenu active={burgerIsActive} />
    </>
  )
}

export default Header
