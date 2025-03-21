'use client'
import { motion } from 'framer-motion'
// import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import GlitchText from '@/components/common/GlitchText'
import { BlockchainNodes } from '@/components/common/BlockchainAnimation'
import TradingGraph from '@/components/common/TradingGraph'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isNearText, setIsNearText] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <TradingGraph onNearText={setIsNearText} />
        <BlockchainNodes />
        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-8xl font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText 
              text="ChillDevs" 
              className="bg-gradient-to-r from-[#b026ff] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text inline-block font-extrabold"
              isGlitching={isNearText}
            />
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlitchText 
              text="Building the future of Web3" 
              className="text-3xl text-[#00ff9d]"
            />
          </motion.p>
        </div>
      </section>

      {/* Content Sections Wrapper */}
      <div className="relative">
        {/* Cyberpunk Background Elements */}
        <div className="absolute inset-0 bg-[#1a1a2e]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-transparent opacity-40" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4d4dff] to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff26b0] to-transparent animate-pulse" />
          
          {/* Vertical Lines */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-gradient-to-b from-transparent via-[#00ff9d] to-transparent opacity-20" />
          <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-gradient-to-b from-transparent via-[#00ff9d] to-transparent opacity-20" />
        </div>

        {/* Hexagon Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="hexagons" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 0 L50 14.43 L50 35.57 L25 50 L0 35.57 L0 14.43 Z" 
                    fill="none" 
                    stroke="url(#hexGradient)" 
                    strokeWidth="0.5" />
            </pattern>
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff9d" />
                <stop offset="50%" stopColor="#4d4dff" />
                <stop offset="100%" stopColor="#ff26b0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Services Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <GlitchText
                  text="Our Services"
                  variant="hover"
                  className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
                />
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
                </p>
              </div>

              {/* Featured Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Web3 Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-[#1a1a2e] p-6 rounded-lg">
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-xl font-bold mb-3 text-[#00ff9d]">Web3 Development</h3>
                    <p className="text-gray-400 mb-4">Building the future of decentralized applications with cutting-edge blockchain technology.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Smart Contracts', 'DeFi', 'NFTs'].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[#2a2a4e] text-[#00ff9d]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Full Stack Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff26b0] to-[#4d4dff] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-[#1a1a2e] p-6 rounded-lg">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-xl font-bold mb-3 text-[#ff26b0]">Full Stack Development</h3>
                    <p className="text-gray-400 mb-4">End-to-end solutions that bring your digital vision to life.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Web Apps', 'APIs', 'Databases'].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[#2a2a4e] text-[#ff26b0]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Custom Bots */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4d4dff] to-[#00ff9d] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-[#1a1a2e] p-6 rounded-lg">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-bold mb-3 text-[#4d4dff]">Custom Bots</h3>
                    <p className="text-gray-400 mb-4">Intelligent automated solutions for enhanced efficiency.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Trading', 'Discord', 'Automation'].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[#2a2a4e] text-[#4d4dff]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* View All Services Button */}
              <div className="text-center">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg bg-[#2a2a4e] transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] opacity-0 group-hover:opacity-50 transition-opacity" />
                    <span className="relative flex items-center text-white group-hover:text-white transition-colors">
                      <span className="mr-2">View All Services</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut" 
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 relative overflow-hidden">
            <Projects />
          </section>

          {/* Contact Section */}
          <section className="py-20 relative overflow-hidden">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  )
}
