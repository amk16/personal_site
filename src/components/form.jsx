import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'info', message: 'Sending message...' })
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'personal_site', // Replace with your EmailJS service ID
        'template_5p7hjal', // Replace with your EmailJS template ID
        formRef.current,
        'hHXxYPwPd-n9w4103' // Replace with your EmailJS public key
      )
      
      if (result.status !== 200) {
        throw new Error('Failed to send message')
      }
      
      // Success handling
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      })
      
      // Reset form after sending
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      })
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="absolute top-0 left-3/5 w-1/3 h-full bg-black bg-opacity-20 backdrop-blur-sm p-8 flex items-center justify-center z-10">
      <div className="w-full max-w-md">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-md text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-md text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-md text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-md text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-300 ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {status.message && (
            <p 
              className={`text-sm mt-2 ${
                status.type === 'success' ? 'text-green-400' : 
                status.type === 'error' ? 'text-red-400' : 
                'text-blue-400'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm