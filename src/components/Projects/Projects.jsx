import React from 'react'
import './Project.css'
import "../ProjectCarousel/ProjectCarousel.css";
import { con1, con10, con11, con12, con13, con14, con15, con16, con19, con2, con21, con22, con23, con24, con25, con26, con27, con3, con4, con5, con6, con7, con8, con9, project1, project2, project3, project4, project5, project6 } from '../../assets'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css';

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
            className='projects-carousel'
            />
            <h1 className='figure'>02</h1>
          </div>
          <div>
            <img
            src={project2}
            alt="img2"
            text="yam2"
            className='projects-carousel'
            />
            <h1 className='figure'>03</h1>
          </div>
          <div>
            <img
            src={project1}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>04</h1>
          </div>
          <div>
            <img
            src={project5}
            alt="img3"
            className='projects-carousel'
            />
            <h1 className='figure'>05</h1>
          </div>
          <div>
            <img
            src={con15}
            alt="img2"
            text="yam2"
            />
            <h1 className='figure'>06</h1>
          </div>
          <div>
            <img
            src={con2}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>07</h1>
          </div>
          <div>
            <img
            src={con21}
            alt="img3"
            className='projects-carousel'
            />
            <h1 className='figure'>08</h1>
          </div>
          <div>
            <img
            src={con3}
            alt="img2"
            text="yam2"
            className='projects-carousel'
            />
            <h1 className='figure'>09</h1>
          </div>
          <div>
            <img
            src={con4}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>10</h1>
          </div>
          <div>
            <img
            src={con5}
            alt="img3"
            // className='projects-carousel'
            />
            <h1 className='figure'>11</h1>
          </div>
          <div>
            <img
            src={con6}
            alt="img2"
            text="yam2"
            className='projects-carousel'
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
            // className='projects-carousel'
            />
            <h1 className='figure'>14</h1>
          </div>
          <div>
            <img
            src={con9}
            alt="img2"
            text="yam2"
            // className='projects-carousel'
            />
            <h1 className='figure'>15</h1>
          </div>
          <div>
            <img
            src={con22}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>16</h1>
          </div>
          <div>
            <img
            src={con11}
            alt="img3"
            // className='projects-carousel'
            />
            <h1 className='figure'>17</h1>
          </div>
          <div>
            <img
            src={con12}
            alt="img2"
            text="yam2"
            // className='projects-carousel'
            />
            <h1 className='figure'>18</h1>
          </div>
          <div>
            <img
            src={con13}
            alt="img1"
            text="yam"
            // className='projects-carousel'
            />
            <h1 className='figure'>19</h1>
          </div>
          <div>
            <img
            src={con14}
            alt="img3"
            // className='projects-carousel'
            />
            <h1 className='figure'>20</h1>
          </div>
          <div>
            <img
            src={con10}
            alt="img2"
            text="yam2"
            // className='projects-carousel'
            />
            <h1 className='figure'>21</h1>
          </div>
          <div>
            <img
            src={con19}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>22</h1>
          </div>
          <div>
            <img
            src={con24}
            alt="img1"
            text="yam"
            // className='projects-carousel'
            />
            <h1 className='figure'>23</h1>
          </div>
          <div>
            <img
            src={con23}
            alt="img1"
            text="yam"
            // className='projects-carousel'
            />
            <h1 className='figure'>24</h1>
          </div>
          <div>
            <img
            src={con25}
            alt="img1"
            text="yam"
            className='projects-carousel'
            />
            <h1 className='figure'>25</h1>
          </div>
          <div>
            <video controls width="100%">
              <source src={con26} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <h1 className='figure'>26</h1>
          </div>
          <div>
            <video controls width="100%">
              <source src={con27} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <h1 className='figure'>27</h1>
          </div>
        </ProjectCarousel>
      </div>
    </div>
  )
}


export default Projects