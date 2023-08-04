import React from 'react'
import vicky from './vicky-2.jpg'
import {FaAward} from 'react-icons/fa'
import './Aboutcom.css'
const Aboutcom = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={vicky} alt="About Image"></img>

            </div>

          </div>
       
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus
               eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate
               dolore doloribus!
              </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
       </div>
      
    </section>
  )
}

export default Aboutcom