import React from 'react'
import './services.css'
import service1 from '../../assets/service-1.svg'
import services2 from '../../assets/services-2.svg'
import services3 from '../../assets/services-3.svg'
import services4 from '../../assets/services-4.svg'

const Services = () => {
  return (
    <section className="services container section" id="services">
      <div className="section__container grid">
        <div className="section__group">
          <span className="section__subtitle">BEST SOLUTIONS</span>
          <h2 className="section__title">We Provide Best Services</h2>
        </div>

        <div className="section__group">
          <p className="section__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            deleniti ullam atque qui odit nemo suscipit aut omnis amet, harum et
            recusandae incidunt fugit. Minima debitis unde deleniti ut rerum!
          </p>
        </div>
      </div>
      <div className="services__container grid">
        <div className="services__item">
          <div className="services__img-wrapper">
            <img src={service1} alt="" className="services__img" />
          </div>

          <h3 className="services__title">Afternoon Tea</h3>

          <p className="services__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="services__item">
          <div className="services__img-wrapper">
            <img src={services2} alt="" className="services__img" />
          </div>

          <h3 className="services__title">Takeaway & Delivery</h3>

          <p className="services__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="services__item">
          <div className="services__img-wrapper">
            <img src={services3} alt="" className="services__img" />
          </div>

          <h3 className="services__title">Wine & Coctails</h3>

          <p className="services__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="services__item">
          <div className="services__img-wrapper">
            <img src={services4} alt="" className="services__img" />
          </div>

          <h3 className="services__title">Alfresco Dining</h3>

          <p className="services__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
