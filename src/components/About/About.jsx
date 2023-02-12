import React from 'react'
import './About.css'

const About = () => {
  return (
    <div  className='about-container'   data-scroll-section>
        <div className="about-left">
            <h2>about us</h2>
            <h1>We Turn Ideas Into Reality</h1>
            <span>
                Space ville Ltd is a wholly owned Nigerian company with one of its core business being Real
                Estate Development, other services includes Construction, consultancy and management. 
            </span>
        </div>
        <div className="about-right">
            <p>
                All our projects are designed to maximize rental income and capital growth opportunities. 
                As such we ONLY develop practical projects with a clear understanding of our client’s 
                price point, space requirement and post development expectations. 
                We also render services in civil, mechanical and electrical works and Total Asset 
                Management of a Facility. 
                Our goal is to be an indigenous company with a global standard of operation. We have 
                alliances with foreign technical partners with vast experience in the Construction sector.
            </p>
        </div>
    </div>
  )
}

export default About