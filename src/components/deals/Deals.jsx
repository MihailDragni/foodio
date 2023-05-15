import React, { useState } from 'react'
import './deals.css'
import check from '../../assets/check.png'
import { deals, items } from '../../data'

const Deals = () => {
  const [isActive, setIsActive] = useState(0)
  return (
    <section className="deals section container">
      <span className="section__subtitle">WEEKLY SPECIAL</span>
      <h2 className="section__title">Best Seller Deals</h2>

      <div className="deals__container grid">
        <div className="tab__btns">
          {deals.map((item, index) => (
            <span
              onClick={() => setIsActive(item.id)}
              key={item.id}
              className={
                isActive === index ? 'tab__btn active-tab' : 'tab__btn'
              }
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="tab__items">
          {items.map((item, index) => {
            return (
              <div
                className={
                  isActive === index ? 'tab__item active-tab' : 'tab__item'
                }
              >
                <h3 className="deals__title">{item.title}</h3>
                <ul className="quality__list">
                  <li className="list__item">
                    <img src={check} alt="" className="item__img" />
                    <h4 className="list__title">Fresh & Tasty</h4>
                  </li>
                  <li className="list__item">
                    <img src={check} alt="" className="item__img" />
                    <h4 className="list__title">Best in organic food</h4>
                  </li>
                  <li className="list__item">
                    <img src={check} alt="" className="item__img" />
                    <h4 className="list__title">100 Fresh Ingridients</h4>
                  </li>
                  <li className="list__item">
                    <img src={check} alt="" className="item__img" />
                    <h4 className="list__title">Better for you Health</h4>
                  </li>
                </ul>

                <div className="deals__price">
                  <p>
                    <span>$</span>
                    {item.price}
                  </p>
                  <del>${item.del}</del>
                </div>

                <a href="#" className="button">
                  Add to Cart
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Deals
