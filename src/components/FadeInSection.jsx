import { motion } from "framer-motion"

const FadeInSection = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="
      w-full min-h-screen 
      flex flex-col items-center justify-center 
      px-4 sm:px-6 lg:px-16   
      py-12 sm:py-16 lg:py-24 
      "
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection