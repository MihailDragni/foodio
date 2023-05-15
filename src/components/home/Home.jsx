import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import slide1 from '../../assets/slide-1.png'
import slide2 from '../../assets/slide-2.png'
import slide3 from '../../assets/slide-3.png'
import slide4 from '../../assets/slide-4.png'
import './home.scss'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <Swiper
          className="home-swiper"
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          loop={true}
        >
          <SwiperSlide className="swiper-slide home-swiper__item item-home-swiper grid">
            <div className="item-home-swiper__data">
              <h3 className="item-home-swiper__subtitle">
                Fastest Delivery & Easy Pickup
              </h3>
              <h1 className="item-home-swiper__title">Kings Burger</h1>
              <p className="item-home-swiper__description">
                Good food starts with good ingridients. We only bring you the
                best.
              </p>

              <a href="#menu" className="button">
                View Our Menu
              </a>
            </div>

            <img src={slide1} alt="" className="home__img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide home-swiper__item grid">
            <div className="item-home-swiper__data">
              <h3 className="item-home-swiper__subtitle">
                Fastest Delivery & Easy Pickup
              </h3>
              <h1 className="item-home-swiper__title">Delicious Food</h1>
              <p className="item-home-swiper__description">
                Good food starts with good ingridients. We only bring you the
                best.
              </p>

              <a href="#menu" className="button">
                View Our Menu
              </a>
            </div>

            <img src={slide2} alt="" className="home__img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide home-swiper__item grid">
            <div className="item-home-swiper__data">
              <h3 className="item-home-swiper__subtitle">
                Fastest Delivery & Easy Pickup
              </h3>
              <h1 className="item-home-swiper__title">Food Platter</h1>
              <p className="item-home-swiper__description">
                Good food starts with good ingridients. We only bring you the
                best.
              </p>

              <a href="#menu" className="button">
                View Our Menu
              </a>
            </div>

            <img src={slide3} alt="" className="home__img" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide home-swiper__item grid">
            <div className="item-home-swiper__data">
              <h3 className="item-home-swiper__subtitle">
                Fastest Delivery & Easy Pickup
              </h3>
              <h1 className="item-home-swiper__title">Garlic Pizza</h1>
              <p className="item-home-swiper__description">
                Good food starts with good ingridients. We only bring you the
                best.
              </p>

              <a href="#menu" className="button">
                View Our Menu
              </a>
            </div>

            <img src={slide4} alt="" className="home__img" />
          </SwiperSlide>
          <div className="swiper-button-prev">
            <AiOutlineArrowLeft />
          </div>
          <div className="swiper-button-next">
            <AiOutlineArrowRight />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Home
