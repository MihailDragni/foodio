import React from 'react'
import './burger-menu.scss'

function BurgerMenu({ active }) {
  return (
    <div className={active ? 'burger-menu' : 'burger-menu active'}>
      <ul className="burger-menu__menu nav-menu" id="burger-menu">
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

      <a href="#reservation" className="burger-menu__reservation-btn button ">
        Reserve
      </a>
    </div>
  )
}

export default BurgerMenu
