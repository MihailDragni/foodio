import React from 'react'
import './menu.css'
import food1 from '../../assets/food-img-1.png'
import food2 from '../../assets/food-img-2.png'
import food3 from '../../assets/food-img-3.png'
import food4 from '../../assets/food-img-4.png'
import food5 from '../../assets/food-img-5.png'
import food6 from '../../assets/food-img-6.png'
import food7 from '../../assets/food-img-7.png'
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Menu = () => {
  return (
    <section className="menu menu-one section" id="menu">
      <h2 className="section__title title__center"> Fast Food Menus</h2>
      <div className="menu__container container grid">
        <div className="menu__group grid">
          <div className="menu__item">
            <div className="menu__img-wrapper">
              <img src={food1} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">ShroomBacon Burger</h3>
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
              <img src={food2} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">Zinger Double Burger</h3>
              <span className="menu__price">$22.00</span>
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
              <img src={food3} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">Black Pepper Burger</h3>
              <span className="menu__price">$26.00</span>
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

        <div className="menu__group grid">
          <div className="menu__item">
            <div className="menu__img-wrapper">
              <img src={food4} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">Margherita Pizza</h3>
              <span className="menu__price">$23.00</span>
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
          <div className="opening">
            <h3 className="opening__title">OPENING TIMES</h3>
            <dl className="opening__list">
              <dt>Mon</dt>
              <dd>17:00 to 23:00</dd>
              <dt>Tue</dt>
              <dd>17:00 to 23:00</dd>
              <dt>Wed</dt>
              <dd>17:00 to 23:00</dd>
              <dt>Thu</dt>
              <dd>17:00 to 23:00</dd>
              <dt>Fri</dt>
              <dd>16:00 to 23:00</dd>
              <dt className="close">Sat-Sun</dt>
              <dd className="close">Closed</dd>
            </dl>

            <div className="opening__data">
              <a href="callto: +1234567891">
                <h3>+1 234 567 891</h3>
              </a>
              <h4 className="opening__description">
                Avenue New Town 124 United States
              </h4>
            </div>
          </div>
        </div>

        <div className="menu__group grid">
          <div className="menu__item">
            <div className="menu__img-wrapper">
              <img src={food5} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">Crispy Chicken Burger</h3>
              <span className="menu__price">$18.00</span>
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
              <img src={food6} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">BBQ Chicken Pizza</h3>
              <span className="menu__price">$21.00</span>
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
              <img src={food7} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <h3 className="menu__title">Pepperoni Classic Pizza</h3>
              <span className="menu__price">$19.00</span>
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
      </div>
    </section>
  )
}

export default Menu
