import React from 'react'
import { ABOUT_ME } from '../constants'
import profile from '../assets/profile.jpg'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section className=' items-center' id='about'>
        <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 text-center text-3xl font-bold"
            >
            About Me
        </motion.h2>
        
        <div className='flex flex-wrap items-center'>
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.5,
                ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1}} src={profile} width={550} height={550} alt='Eris' className='rounded-3xl' />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.5,
                ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className='w-full md:w-1/2'>
                <h2 className=' p-2 text-2xl font-bold md:text-5xl lg:text-[3rem]'>
                    {ABOUT_ME.role}
                </h2>
                <p className='mb-8 p-2 text-xl'>
                    {ABOUT_ME.description}
                </p>
            </motion.div>
        </div>
        
    </section>
  )
}

export default AboutMe