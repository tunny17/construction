import React from 'react'
import './Meet.css'
import { meet1, meet2, meet3, meet4 } from '../../assets'

const Meet = () => {
  return (
    <div  className='meet-container'  data-scroll-section>
        <div className="meet-left">
            <div className="meet-left-text">
                <h2>our team</h2>
                <h1>Meet Our <br /> Team Members</h1>
            </div>
            <div className="left-pictures">
                <figure>
                    <img src={meet1} alt="" />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={meet2} alt="" />
                    <figcaption></figcaption>
                </figure>
            </div>
        </div>
        <div className="meet-right">
            <figure>
                <img src={meet3} alt="" />
                <figcaption></figcaption>
            </figure>
            <figure>
                <img src={meet4} alt="" />
                <figcaption></figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Meet