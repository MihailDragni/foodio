import React from 'react'
import './about.css'
import girl from '../../assets/girl.jpg'
import restaurant1 from '../../assets/restaurant-1.jpg'
import restaurant2 from '../../assets/restaurant-2.jpg'
import restaurant3 from '../../assets/restaurant-3.jpg'

const About = () => {
  return (
    <section className="about container section">
      <div className="section__container grid">
        <div className="section__group">
          <span className="section__subtitle">ABOUT THE FOOD RESTAURANT</span>
          <h2 className="section__title">
            New Ground with Dishes to be Enjoyed
          </h2>
        </div>

        <div className="section__group">
          <p className="section__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            deleniti ullam atque qui odit nemo suscipit aut omnis amet, harum et
            recusandae incidunt fugit. Minima debitis unde deleniti ut rerum!
          </p>

          <div className="about__data">
            <img src={girl} alt="" className="about__img" />

            <div className="">
              <h3 className="about__data-title">Williames James</h3>
              <p className="about__data-description">
                Director and Chief Operations Officer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about__container-content grid">
        <div className="about__item">
          <img src={restaurant1} alt="" className="about__item-img" />

          <div className="about__top">
            <h3 className="about__top-title">Restaurant</h3>
          </div>

          <div className="about__hover">
            <div className="about__hover-data">
              <h3 className="about__hover-title">Restaurant</h3>
              <p className="about__hover-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                ipsam fugiat eius alias deleniti fugit rerum rem id autem quae.
              </p>

              <a href="#reservation" className="button about__btn">
                Reserve A Table
              </a>
            </div>
          </div>
        </div>
        <div className="about__item">
          <img src={restaurant2} alt="" className="about__item-img" />

          <div className="about__top">
            <h3 className="about__top-title">Coctail Bar</h3>
          </div>

          <div className="about__hover">
            <div className="about__hover-data">
              <h3 className="about__hover-title">Coctail Bar</h3>
              <p className="about__hover-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                ipsam fugiat eius alias deleniti fugit rerum rem id autem quae.
              </p>

              <a href="#reservation" className="button about__btn">
                Reserve A Table
              </a>
            </div>
          </div>
        </div>
        <div className="about__item">
          <img src={restaurant3} alt="" className="about__item-img" />

          <div className="about__top">
            <h3 className="about__top-title">Private Dining</h3>
          </div>

          <div className="about__hover">
            <div className="about__hover-data">
              <h3 className="about__hover-title">Private Dining</h3>
              <p className="about__hover-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                ipsam fugiat eius alias deleniti fugit rerum rem id autem quae.
              </p>

              <a href="#reservation" className="button about__btn">
                Reserve A Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
