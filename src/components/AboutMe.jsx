import React from 'react'
import { ABOUT_ME } from '../constants'
import frontImage from '../assets/profile.jpg'
import backImage from '../assets/profile2.jpg'
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
                <div className="flex justify-center">
                    <div className="group [perspective:1000px]"> {/* perspective for 3D flip */}
                        <div
                        className="
                            relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] 
                            transition-transform duration-700 
                            [transform-style:preserve-3d] 
                            group-hover:[transform:rotateY(180deg)]
                        "
                        >
                        {/* Front */}
                        <img
                            src={frontImage}
                            alt="Front"
                            className="
                            absolute inset-0 h-full w-full rounded-3xl object-cover 
                            [backface-visibility:hidden]
                            "
                        />
                        {/* Back */}
                        <img
                            src={backImage}
                            alt="Back"
                            className="
                            absolute inset-0 h-full w-full rounded-3xl object-cover 
                            [transform:rotateY(180deg)] [backface-visibility:hidden]
                            "
                        />
                        </div>
                    </div>
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
                <div className="mb-8 p-4 text-lg leading-relaxed space-y-4">
                    {ABOUT_ME.description.split('\n').map((para, i) => (
                        para.trim() && <p key={i}>{para.trim()}</p>
                    ))}
                </div>
            </motion.div>
        </div>
        
    </section>
  )
}

export default AboutMe