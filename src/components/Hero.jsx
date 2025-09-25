import React from 'react'
import { HERO } from '../constants'
import erisImage from '../assets/erisImage.jpg'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <section className='flex min-h-screen flex-wrap items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='w-full md:w-1/2'
        >
          <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
            {HERO.name}
          </h2>
          <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
            {HERO.greet}
          </p>
          <p className=' p-2 text-xl leading-relaxed whitespace-pre-line'>
            {HERO.description}
          </p>

          {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 p-2 w-full">
                {/* Resume Button */}
                <a
                    href="/Eris-Pena-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-full sm:w-auto
                    text-center
                     border border-white
                    hover:border-blue-700 hover:bg-blue-700
                    text-white py-3 px-6
                    rounded-md
                    transition-colors duration-300
                    "
                >
                    View Resume
                </a>

                {/* GitHub Button */}
                <a
                    href="https://github.com/Eris-Kushikiari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-full sm:w-auto
                    flex items-center justify-center gap-2
                    bg-gray-800 hover:bg-gray-900
                    text-white
                    py-2 px-4 sm:py-3 sm:px-6
                    rounded-md
                    transition-colors duration-300
                    "
                >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base">GitHub</span>
                </a>
            </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='w-full md:w-1/2 lg:p-8'
        >
          <div className='flex justify-center'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={erisImage}
              width={550}
              height={550}
              alt='Eris'
              className='rounded-3xl'
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero
