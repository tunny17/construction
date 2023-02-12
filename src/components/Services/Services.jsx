import React from 'react'
import './Services.css'
import { services } from '../../assets'
import { MdOutlineConstruction } from 'react-icons/md'
import { MdApartment } from 'react-icons/md'
import { SiBuildkite } from 'react-icons/si'
import { BsPencilSquare } from 'react-icons/bs'

const Services = () => {
  return (
    <div  className='services-container' data-scroll-section>
        <div>
            <header>
                <h2>our services</h2>
                <h1>Construction Solutions</h1>
            </header>
            <div className="container">
                <img src={services} alt="" />
                <div className="text-container">
                    <p>
                        The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions. This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio.
                    </p>
                    <h5>
                        We focus on the problem, the question and the solution. And we always think ahead.
                    </h5>
                </div>
            </div>
        </div>
        <div className="cards">
            <div    className='card'>
                <MdOutlineConstruction color='black'  className='icon float' />
                <h3>Construction Services</h3>
                <p>Our customers love the pace/quality tempo that we show during each of the principal construction processes! We're comfortable with any idea of our clients.</p>
            </div>
            <div    className='card'>
                <MdApartment color='black'  className='icon float'  />
                <h3>Construction Management</h3>
                <p>Our project management is essential. We're using the most time and iterations efficient life cycles methods for that to complete all the projects on time.</p>
            </div>
            <div    className='card'>
                <SiBuildkite color='black'  className='icon float'  />
                <h3>Design Build</h3>
                <p>If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.</p>
            </div>
            <div    className='card'>
                <BsPencilSquare color='black'  className='icon float'  />
                <h3>General Contracting</h3>
                <p>We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our construction projects!</p>
            </div>
            </div>
    </div>
  )
}

export default Services