import React from 'react'
import './Project.css'
import { con1, con10, con11, con12, con13, con14, con15, con16, con2, con3, con4, con5, con6, con7, con8, con9, project1, project2, project3, project4, project5, project6 } from '../../assets'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

const Projects = () => {
  return (
    <div   className='project-container'  data-scroll-section>
      <div className="project-header">
        <h2 className='project-heading'>Projects</h2>
      </div>
      <div  className='project-carousel-container'>
        <ProjectCarousel>
          <div>
            <img
            src={project4}
            alt="img1"
            text="yam"
            className='projects-carousel'
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
          <div>
            <img
            src={con1}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>07</h1>
          </div>
          <div>
            <img
            src={con2}
            alt="img3"
            />
            <h1 className='figure'>08</h1>
          </div>
          <div>
            <img
            src={con3}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>09</h1>
          </div>
          <div>
            <img
            src={con4}
            alt="img1"
            text="yam"
            className='carousel-image projects-carousel'
            />
            <h1 className='figure'>10</h1>
          </div>
          <div>
            <img
            src={con5}
            alt="img3"
            />
            <h1 className='figure'>11</h1>
          </div>
          <div>
            <img
            src={con6}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>12</h1>
          </div>
          <div>
            <img
            src={con7}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>13</h1>
          </div>
          <div>
            <img
            src={con8}
            alt="img3"
            />
            <h1 className='figure'>14</h1>
          </div>
          <div>
            <img
            src={con9}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>15</h1>
          </div>
          <div>
            <img
            src={con10}
            alt="img1"
            text="yam"
            className='carousel-image projects-carousel'
            />
            <h1 className='figure'>16</h1>
          </div>
          <div>
            <img
            src={con11}
            alt="img3"
            />
            <h1 className='figure'>17</h1>
          </div>
          <div>
            <img
            src={con12}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>18</h1>
          </div>
          <div>
            <img
            src={con13}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>19</h1>
          </div>
          <div>
            <img
            src={con14}
            alt="img3"
            />
            <h1 className='figure'>20</h1>
          </div>
          <div>
            <img
            src={con15}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>21</h1>
          </div>
          <div>
            <img
            src={con16}
            alt="img1"
            text="yam"
            className='carousel-image projects-carousel'
            />
            <h1 className='figure'>22</h1>
          </div>
        </ProjectCarousel>
      </div>
    </div>
  )
}


export default Projects