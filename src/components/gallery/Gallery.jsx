import React from 'react'
import './gallery.css'
import photo1 from '../../assets/photo-gallery-1.jpg'
import photo2 from '../../assets/photo-gallery-2.jpg'
import photo3 from '../../assets/photo-gallery-3.jpg'
import photo4 from '../../assets/photo-gallery-4.jpg'
import photo5 from '../../assets/photo-gallery-5.jpg'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container grid">
        <div className="gallery__item">
          <img src={photo1} alt="" className="gallery__img" />

          <div className="gallery__hover"></div>
        </div>
        <div className="gallery__item">
          <img src={photo2} alt="" className="gallery__img" />

          <div className="gallery__hover"></div>
        </div>
        <div className="gallery__item">
          <img src={photo3} alt="" className="gallery__img" />

          <div className="gallery__hover"></div>
        </div>
        <div className="gallery__item">
          <img src={photo4} alt="" className="gallery__img" />

          <div className="gallery__hover"></div>
        </div>
        <div className="gallery__item">
          <img src={photo5} alt="" className="gallery__img" />

          <div className="gallery__hover"></div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
