'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GlitchText from '@/components/common/GlitchText'

const FloatingCircuit = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute ${className}`}
  >
    <div className="w-20 h-20 border border-[#00ff9d] rounded-full" />
    <div className="absolute inset-0 border-t-2 border-[#00ff9d]" style={{ transform: 'rotate(45deg)' }} />
    <div className="absolute inset-0 border-l-2 border-[#00ff9d]" style={{ transform: 'rotate(-45deg)' }} />
  </motion.div>
)

const FloatingBinary = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.3, 0.7, 0.3],
      y: [-30, 30, -30],
      x: [-20, 20, -20],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute text-[#00ff9d] text-2xl font-mono ${className}`}
  >
    {Math.random() > 0.5 ? '1' : '0'}
  </motion.div>
)

const FloatingHex = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.6, 0.2],
      rotate: [0, 360],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className={`absolute ${className}`}
  >
    <div className="w-16 h-16 border-2 border-[#ff26b0]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
  </motion.div>
)

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formState)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ff9d 1px, transparent 1px),
              linear-gradient(to bottom, #00ff9d 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Elements */}
        <FloatingCircuit className="top-[20%] left-[10%]" />
        <FloatingCircuit className="bottom-[30%] right-[15%]" />
        <FloatingCircuit className="top-[60%] left-[80%]" />

        <FloatingBinary className="top-[10%] right-[30%]" />
        <FloatingBinary className="top-[40%] left-[20%]" />
        <FloatingBinary className="bottom-[20%] right-[40%]" />
        <FloatingBinary className="bottom-[60%] left-[60%]" />
        <FloatingBinary className="top-[80%] right-[70%]" />

        <FloatingHex className="top-[30%] right-[20%]" />
        <FloatingHex className="bottom-[40%] left-[30%]" />
        <FloatingHex className="top-[70%] left-[70%]" />

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#ff26b0] to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                transform: `rotate(${25 + i * 5}deg)`,
                opacity: 0.2
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                x: [-100, 100, -100]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <GlitchText
              text="Connect With Us"
              variant="hover"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Drop us a message in the digital void.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <form onSubmit={handleSubmit} className="relative bg-[#1a1a2e] p-8 rounded-lg space-y-6">
                <div>
                  <label className="block text-[#00ff9d] mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#2a2a4e] rounded-lg px-4 py-2 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#00ff9d] mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#2a2a4e] rounded-lg px-4 py-2 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#00ff9d] mb-2">Your Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#2a2a4e] rounded-lg px-4 py-2 text-white focus:border-[#00ff9d] focus:outline-none transition-colors h-32"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] bg-clip-text text-transparent">
                  Find Us In The Digital Realm
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://twitter.com/chilldevs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-400 hover:text-[#00ff9d] transition-colors"
                  >
                    <span className="text-2xl">🐦</span>
                    <span>@ChillDevs</span>
                  </a>
                  <a 
                    href="https://discord.gg/chilldevs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-400 hover:text-[#4d4dff] transition-colors"
                  >
                    <span className="text-2xl">💬</span>
                    <span>Join our Discord</span>
                  </a>
                  <a 
                    href="https://github.com/chilldevs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-400 hover:text-[#ff26b0] transition-colors"
                  >
                    <span className="text-2xl">🌟</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#4d4dff] to-[#ff26b0] bg-clip-text text-transparent">
                  Response Time
                </h3>
                <p className="text-gray-400">
                  We usually respond within 24 hours. For urgent matters, reach out to us on Discord.
                </p>
              </div>

              <div className="p-6 bg-[#1a1a2e] rounded-lg border border-[#2a2a4e]">
                <h3 className="text-xl font-bold mb-3 text-[#00ff9d]">Ready To Build Something Cool?</h3>
                <p className="text-gray-400">
                  Whether you need a custom bot, a Web3 solution, or a full-stack application, we've got you covered.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="fixed top-0 right-0 w-64 h-64 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <path
            d="M100 0 L100 100 L0 100"
            fill="none"
            stroke="#00ff9d"
            strokeWidth="0.5"
          />
          <path
            d="M90 10 L90 90 L10 90"
            fill="none"
            stroke="#00ff9d"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="fixed bottom-0 left-0 w-64 h-64 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <path
            d="M100 0 L100 100 L0 100"
            fill="none"
            stroke="#ff26b0"
            strokeWidth="0.5"
          />
          <path
            d="M90 10 L90 90 L10 90"
            fill="none"
            stroke="#ff26b0"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  )
} 