import React from 'react'
import './Project.css'
import { project1, project2, project3, project4, project5, project6 } from '../../assets'
import Carousel from '../Carousel/Carousel'

const Projects = () => {
  return (
    <div   className='project-container'  data-scroll-section>
      <div className="project-header">
        <h2 className='project-heading'>Projects</h2>
      </div>
      <div  className='project-carousel-container'>
        <Carousel>
          <div>
            <img
            src={project4}
            alt="img1"
            text="yam"
            className='carousel-image projects-carousel'
            />
            <h1 className='figure'>01</h1>
          </div>
          <div>
            <img
            src={project3}
            alt="img3"
            />
            <h1 className='figure'>02</h1>
          </div>
          <div>
            <img
            src={project2}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>03</h1>
          </div>
          <div>
            <img
            src={project1}
            alt="img1"
            text="yam"
            className='carousel-image projects-carousel'
            />
            <h1 className='figure'>04</h1>
          </div>
          <div>
            <img
            src={project5}
            alt="img3"
            />
            <h1 className='figure'>05</h1>
          </div>
          <div>
            <img
            src={project6}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>06</h1>
          </div>
        </Carousel>
      </div>
    </div>
  )
}


export default Projects