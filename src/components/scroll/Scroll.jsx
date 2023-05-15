import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import './scroll.scss'
const Scroll = () => {
  const [scroll, setScroll] = useState(false)

  const changeHeader = () => {
    if (window.scrollY >= 350) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
  }, [])

  return (
    <a
      href="#"
      className={`${scroll ? ' scrollup show-scrollup' : 'scrollup'} `}
      id="scrollup"
    >
      <AiOutlineArrowUp className="arrow-up" />
    </a>
  )
}

export default Scroll
