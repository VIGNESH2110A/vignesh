import React from 'react'
import CTA from './CTA'
import './Header.css'
import vicky from './vicky.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Vignesh A</h1>
            <h5 className='text-light'>Software Developer</h5>
            <CTA/>
            <div className='me'>
                <img src={vicky} alt="vicky"></img>

            </div>
            <a href="#contact" className='scroll__down'>Scroll_down</a>
            <HeaderSocial/>
        </div>    
    </header>
  )
}

export default Header