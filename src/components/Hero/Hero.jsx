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
                    <li>Our Services</li>
                    <li>Projects</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className="left-hero">
            <h2>Space<span>ville</span> Limited</h2>
        </div>
        <div className="right-hero">
            <Carousel>
                <div>
                    <img
                    src={one}
                    alt="img1"
                    text="yam"
                    />
                    <h1>01</h1>
                    <img className='yam' src={oneB} alt="" />
                </div>
                <div>
                    <img
                    src={three}
                    alt="img3"
                    />
                    <h1>02</h1>
                    <img className='yam' src={threeB} alt="" />
                </div>
                <div>
                    <img
                    src={two}
                    alt="img2"
                    text="yam2"
                    />
                    <h1>03</h1>
                    <img className='yam' src={twoB} alt="" />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Hero