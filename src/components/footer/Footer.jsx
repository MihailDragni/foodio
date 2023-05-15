import React from 'react'
import logo from '../../assets/logo.png'
import mobile from '../../assets/mobile.svg'
import location from '../../assets/location.svg'
import evenlope from '../../assets/envelope.svg'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container section grid container">
        <div className="footer__content">
          <a href="index.html" className="footer__logo logo">
            <img src={logo} alt="" className="logo__img" />
          </a>
          <p className="footer__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit
            nisi fuga, cupiditate atque voluptatem quibusdam voluptatum saepe
            fugit veniam distinctio dolores molestiae! Aut, vero error voluptas
            adipisci nesciunt accusantium!
          </p>
          <h3 className="footer__title">Newsletter</h3>
          <p className="newsletter__description">
            Subscribe and Get Recent News and Update
          </p>
          <div className="footer__subscribe">
            <input
              type="text"
              placeholder="Enter Your Email Adress...."
              className="footer__input"
            />
            <button className="button">Subscribe</button>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact Info</h3>
          <dl className="footer__list">
            <dt>Mon - Thu:</dt>
            <dd>5:00 p.m. - 11:00 p.m.</dd>
            <dt>Friday:</dt>
            <dd>4:00 p.m. - 12:00 p.m.</dd>
            <dt>Festivals:</dt>
            <dd>Open Full Day</dd>

            <div className="reservation__card">
              <span className="reservation__icon-wrapper">
                <img src={mobile} alt="" className="reservation__icon" />
              </span>
              <div>
                <h3 className="reservation__card-title">For Booking</h3>
                <span className="reservation__card-data">01 123 456 789</span>
              </div>
            </div>
            <div className="reservation__card">
              <span className="reservation__icon-wrapper">
                <img src={evenlope} alt="" className="reservation__icon" />
              </span>
              <div>
                <h3 className="reservation__card-title">For Private Dining</h3>
                <span className="reservation__card-data">Info@Domain.com</span>
              </div>
            </div>
            <div className="reservation__card">
              <span className="reservation__icon-wrapper">
                <img src={location} alt="" className="reservation__icon" />
              </span>
              <div>
                <h3 className="reservation__card-title">Location</h3>
                <span className="reservation__card-data">
                  Comrat, str Pobeda 14/2
                </span>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <p className="footer__copy">
        <span>&copy; 2023 Foodio</span> Restaurant and BBQ
      </p>
    </footer>
  )
}

export default Footer
