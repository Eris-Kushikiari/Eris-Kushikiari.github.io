import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section className='container mx-auto min-h-screen' id='skills'>
      <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>
        Skills
      </h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6'>
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}       
            whileInView={{ opacity: 1, y: 0 }}    
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}              
            whileHover={{ scale: 1.1 }}           
            className="flex flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center shadow-md cursor-pointer"
          >
            {/* Icon */}
            <div className="text-6xl mb-4">{skill.icon}</div>

            {/* Name */}
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
