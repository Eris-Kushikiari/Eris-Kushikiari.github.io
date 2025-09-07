import logo from '../assets/kushiLogo1.png'
import { motion } from 'framer-motion'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
        <div className='flex items-center justify-center'>
            <img src={logo} alt="kushiki" width={200} className='my-10' />
        </div>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link, index) =>(
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>
    </div>
  )
}

export default Footer