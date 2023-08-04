import React from 'react'
import{BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="#"><BsLinkedin/></a>
        <a href="#"><BsGithub/></a>
        <a href="#"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial