import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section className="py-8 " id="education">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>

      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // stagger by index
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-400">{edu.duration}</p>
            <p className="mt-2 text-stone-200">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
