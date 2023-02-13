import React from 'react'
import './Services.css'
import { meet1, meet2, meet3, meet4, meet5, services } from '../../assets'
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
        <div  className='meet-container'>
            <div className="meet-left">
                <div className="meet-left-text">
                    <h2>our team</h2>
                    <h1>Meet Our <br /> Team Members</h1>
                </div>
                <div className="left-pictures">
                    <figure>
                        <img src={meet2} alt="" />
                        <figcaption>
                            <h3>Akiboi Paul</h3>
                            <p>Architect <br /> (Bsc Architecture, Msc Architecture)</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={meet3} alt="" />
                        <figcaption>
                            <h3>Ayanwole Peters</h3>
                            <p>BIM / Project Manager <br /> (Bsc Architecture, Msc Bim)</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="meet-right">
                <figure>
                    <img src={meet1} alt="" />
                    <figcaption>
                        <h3>Babatunde Oluwatosin</h3>
                        <p>CEO / Architect / Project Manager <br /> (Bsc Architecture,   Msc Construction)</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={meet4} alt=""/>
                    <figcaption>
                        <h3>Sewedo Omoniyi</h3>
                        <p>Procurement Officer <br />(Bsc Geophysics, Bsc Project Management)</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={meet5} alt=""/>
                    <figcaption>
                        <h3>Benjamin Egbuaba</h3>
                        <p>quantity surveyor / site manager <br /> (Bsc QS, Msc Product Management)</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Services