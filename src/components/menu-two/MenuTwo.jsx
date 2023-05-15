import React from 'react'
import './menutwo.css'
import coffe1 from '../../assets/coof-img-1.png'
import coffe2 from '../../assets/coof-img-2.png'
import coffe3 from '../../assets/coof-img-3.png'
import coffe4 from '../../assets/coof-img-4.png'
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const MenuTwo = () => {
  return (
    <section className="menu menu-two section">
      <h2 className="section__title title__center">
        A complimentery Cocktail, Coffee, Ice Tea For You.
      </h2>
      <div className="menu__container container grid">
        <div className="menu__item">
          <div className="menu__img-wrapper">
            <img src={coffe1} alt="" className="menu__img" />
          </div>

          <div className="menu__data">
            <span className="menu__grams">100 grams</span>
            <h3 className="menu__title">Rainbow Paradise Cocktail</h3>
            <span className="menu__price">$24.00</span>
            <ul className="menu__rating">
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
            </ul>

            <a href="#" className="menu__btn">
              <HiOutlineShoppingBag className="shopping-bag" />
            </a>
          </div>
        </div>

        <div className="menu__item">
          <div className="menu__img-wrapper">
            <img src={coffe2} alt="" className="menu__img" />
          </div>

          <div className="menu__data">
            <span className="menu__grams">100 grams</span>
            <h3 className="menu__title">Rainbow Paradise Cocktail</h3>
            <span className="menu__price">$24.00</span>
            <ul className="menu__rating">
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
            </ul>

            <a href="#" className="menu__btn">
              <HiOutlineShoppingBag className="shopping-bag" />
            </a>
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__img-wrapper">
            <img src={coffe3} alt="" className="menu__img" />
          </div>

          <div className="menu__data">
            <span className="menu__grams">100 grams</span>
            <h3 className="menu__title">Rainbow Paradise Cocktail</h3>
            <span className="menu__price">$24.00</span>
            <ul className="menu__rating">
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
            </ul>

            <a href="#" className="menu__btn">
              <HiOutlineShoppingBag className="shopping-bag" />
            </a>
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__img-wrapper">
            <img src={coffe4} alt="" className="menu__img" />
          </div>

          <div className="menu__data">
            <span className="menu__grams">100 grams</span>
            <h3 className="menu__title">Rainbow Paradise Cocktail</h3>
            <span className="menu__price">$24.00</span>
            <ul className="menu__rating">
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
              <li>
                <AiFillStar className="star__icon" />
              </li>
            </ul>

            <a href="#" className="menu__btn">
              <HiOutlineShoppingBag className="shopping-bag" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuTwo
