import emailjs from '@emailjs/browser'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () =>{
    let errors = {}
    if(!formData.name) errors.name = "Name is required"
    if(!formData.email) {
      errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    if(!formData.message) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const validationErrors = validate()
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    }
    else {
      setErrors({})
      setIsSending(true)

      emailjs.send(
        "service_mn0icop",
        "template_i222sj2",
        formData,
        "BicNEONhUsZhflrhK",
      ).then(() =>{
        toast.success("Message sent successfully")
        setFormData({name: "", email: "", message: ""})
        setIsSending(false)
      }).catch((error) =>{
        console.log("FAILED", error)
        toast.error("Failed to send message. Please try again later.")
        setIsSending(false)
      })
    }
  }

  return (
    <motion.div
      className='p-4 lg:w-3/4 mx-auto '
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Toaster/>
      
      {/* Title */}
      <motion.h2
        className='my-8 text-center text-4xl font-semibold tracking-tighter'
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }
          }
        }}
        viewport={{ once: true }}
      >
        <div className='mb-4 flex space-x-4'>
          {/* Name */}
          <motion.div
            className='lg:w-1/2'
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <input type="text" id='name' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='mb-2 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
            {errors.name && <p className='text-sm text-rose-800'>{errors.name}</p>}
          </motion.div>

          {/* Email */}
          <motion.div
            className='lg:w-1/2'
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <input type="email" id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='mb-2 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
            {errors.email && <p className='text-sm text-rose-800'>{errors.email}</p>}
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          className='mb-4'
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <textarea id='message' name='message' placeholder='Message' value={formData.message} onChange={handleChange} className='mb-2 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none' rows="6"/>
          {errors.message && <p className='text-sm text-rose-800'>{errors.message}</p>}
        </motion.div>

        {/* Button */}
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <div className='flex items-center justify-center gap-2'>
            {isSending ? "Sending..." : "Send"}
          </div>
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default Contact
