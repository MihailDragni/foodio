import React from 'react'
import './reservation.css'
import mobile from '../../assets/mobile.svg'
import evenlope from '../../assets/envelope.svg'
import location from '../../assets/location.svg'

const Reservation = () => {
  return (
    <section className="reservation section container" id="reservation">
      <span className="section__subtitle">GET IN TOUCH</span>
      <h2 className="section__title">Reservation Table & Enjoy Dining Table</h2>

      <div className="reservation__container grid">
        <div className="reservation__info">
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
        </div>

        <form className="reservation__form">
          <div className="reservation__form-div">
            <input
              className="reservation__form-input"
              type="text"
              name="text"
              placeholder="No of Guest"
            />
          </div>

          <div className="reservation__form-group">
            <div className="reservation__form-div">
              <input
                className="reservation__form-input"
                type="text"
                name="text"
                placeholder="Complete Name"
              />
            </div>
            <div className="reservation__form-div">
              <input
                className="reservation__form-input"
                type="tel"
                name="tel"
                placeholder="Phone No"
              />
            </div>
          </div>
          <div className="reservation__form-group">
            <div className="reservation__form-div">
              <input
                className="reservation__form-input"
                type="text"
                name="text"
                placeholder="mm/dd/yy"
              />
            </div>
            <div className="reservation__form-div">
              <input
                className="reservation__form-input"
                type="tel"
                name="tel"
                placeholder="00:00 AM"
              />
            </div>
          </div>

          <button className="button reservation__button">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Reservation
