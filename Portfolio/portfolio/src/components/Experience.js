import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>REACT-JS</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          </div>
        </div>
      <div className='experience__backend'>

        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>PSQL</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>
        </div>

        </div> 

      </div>
    </section>
  )
}

export default Experience