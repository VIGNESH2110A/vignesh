import React from 'react'
import cv from '../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA