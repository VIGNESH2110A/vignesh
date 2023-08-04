import React from 'react'
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img csrc={img1} alt=""></img>

        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>
        <a href="https://dribble.com" className='btn-btn-primary' target='_blank'>Live Demo</a>

      </article>
      </div>

    </section>
  )
}

export default Portfolio