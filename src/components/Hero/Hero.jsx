import React from 'react'
import './Hero.css'
import { one, oneB, three, threeB, two, twoB } from '../../assets'
import Carousel from '../Carousel/Carousel'

const Hero = () => {
  return (
    <div   className='hero-container'   data-scroll-section>
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a href="/" className='activeNav'>Home</a>
                    </li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Our Services</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className="left-hero">
            <h2>Space <span>xpat</span></h2>
        </div>
        <div className="right-hero">
            <Carousel>
                <div>
                    <img
                    src={one}
                    alt="img1"
                    className='carousel-image'
                    />
                    <h1 className='figure'>01</h1>
                    <img className='yam' src={oneB} alt="" />
                </div>
                <div>
                    <img
                    src={three}
                    alt="img3"
                    className='carousel-image'
                    />
                    <h1 className='figure'>02</h1>
                    <img className='yam' src={threeB} alt="" />
                </div>
                <div>
                    <img
                    src={two}
                    alt="img2"
                    className='carousel-image'
                    />
                    <h1 className='figure'>03</h1>
                    <img className='yam' src={twoB} alt="" />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Hero