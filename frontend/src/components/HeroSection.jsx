import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
    <img src='./restaurant.jpg' alt='restaurant' />
    <div className='item'>
    <h3>Pakistan Cricket Board</h3>
    <div>
    <h1>Best Board Ever</h1>
    <p>The PCB governs Pakistan cricket, from matches to talent development.!</p>
    <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
    </div>
    </div>
    </section>
  )
}

export default HeroSection