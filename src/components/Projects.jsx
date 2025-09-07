import React from 'react'
import { PROJECTS } from '../constants'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className="pt-20 " id="projects">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-8 text-center font-semibold text-3xl lg:text-3xl"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15, // stagger animation
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-md"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Button */}
              <div className='gap-2 flex'>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors"
                >
                  View on GitHub
                  <MdArrowOutward />
                </a>
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors"
                >
                  Demo
                  <MdArrowOutward />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
