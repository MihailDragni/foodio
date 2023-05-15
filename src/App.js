import React from 'react'
import './index.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Services from './components/services/Services'
import Deals from './components/deals/Deals'
import MenuTwo from './components/menu-two/MenuTwo'
import Reservation from './components/reservation/Reservation'
import Gallery from './components/gallery/Gallery'
import Scroll from './components/scroll/Scroll'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Home />
        <About />
        <Menu />
        <Services />
        <Deals />
        <MenuTwo />
        <Reservation />
        <Gallery /> */}
      </main>
      <Scroll />
      <Footer />
    </>

  )
}

export default App
