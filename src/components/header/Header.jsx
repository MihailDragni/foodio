import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logo-dark.png'
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#menu" className="nav__link">
                Menu
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#reservation" className="nav__link">
                Reservation
              </a>
            </li>
          </ul>
        </div>
        <a href="#reservation" className="button reservation__btn">
          Reserve A Table
        </a>

				
        {/* <div className="nav__toggle">
            <AiOutlineMenu className="menu-line" />
          </div> */}
        {/* <div className="nav__close" id="nav__close">
          <AiOutlineCloseCircle className="close-circle" />
        </div> */}
        {/* <a href="index.html" className="logo__mobile">
          <img className="logo__mobile-img" src={logoMobile} alt="" />
        </a> */}
      </nav>
    </header>
  )
}

export default Header
