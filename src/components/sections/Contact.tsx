'use client'
import { motion } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="relative py-20 z-[1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText 
            text="Get in Touch" 
            variant="hover"
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <GlitchText 
                text="Let's Build Something Amazing"
                variant="hover"
                className="text-2xl font-bold text-[#00ff9d] mb-4"
              />
              <p className="text-gray-400">
                Ready to start your next project? Send us a message and let's create something extraordinary together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Email', value: 'hello@chilldevs.com', color: '#ff26b0' },
                { label: 'Discord', value: 'ChillDevs', color: '#4d4dff' },
                { label: 'Location', value: 'Worldwide', color: '#b026ff' }
              ].map(item => (
                <div key={item.label} className="flex items-center space-x-3">
                  <GlitchText 
                    text={item.label}
                    variant="hover"
                    className="font-medium"
                    style={{ color: item.color }}
                  />
                  <span className="text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 relative z-[1]"
          >
            <div className="relative z-[1]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#4d4dff] text-white focus:outline-none focus:border-[#00ff9d] transition-colors relative z-[2]"
                value={formState.name}
                onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#4d4dff] text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                value={formState.email}
                onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#4d4dff] text-white focus:outline-none focus:border-[#00ff9d] transition-colors resize-none"
                value={formState.message}
                onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] text-white font-medium hover:opacity-90 transition-opacity"
            >
              <GlitchText 
                text="Send Message"
                variant="hover"
                className="font-bold"
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
} 