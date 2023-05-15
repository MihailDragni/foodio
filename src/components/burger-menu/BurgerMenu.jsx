import React from 'react'
import './burger-menu.scss'

function BurgerMenu({ active }) {
  return (
    <div className={active ? 'burger-menu' : 'burger-menu active'}>
      <ul className="burger-menu__menu menu" id="menu__menu">
        <li className="menu__item">
          <a href="#home" className="menu__link active-link">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a href="#about" className="menu__link">
            About
          </a>
        </li>
        <li className="menu__item">
          <a href="#menu" className="menu__link">
            Menu
          </a>
        </li>
        <li className="menu__item">
          <a href="#services" className="menu__link">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a href="#reservation" className="menu__link">
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
