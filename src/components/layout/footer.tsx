'use client'
import { motion } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative min-h-[400px] bg-[#0a0a0f] border-t border-[#2a2a4e]">
      {/* Enhanced Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] opacity-70" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0">
        {/* Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4d4dff] to-transparent opacity-70 animate-pulse" />
        
        {/* Vertical Lines */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-gradient-to-b from-[#00ff9d] via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-gradient-to-b from-[#ff26b0] via-transparent to-transparent opacity-50" />
      </div>

      {/* Hexagon Pattern */}
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
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <GlitchText 
              text="ChillDevs" 
              className="text-2xl font-bold bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
            />
            <p className="text-gray-400">Building the future of Web3</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00ff9d] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About'].map(link => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#ff26b0] font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web3 Development', 'Full Stack', 'Custom Bots', 'Consulting'].map(service => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#4d4dff] font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@chilldevs.com</li>
              <li className="text-gray-400">Discord: ChillDevs</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a4e]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ChillDevs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#00ff9d]">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ff26b0]">
                <i className="fab fa-github"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4d4dff]">
                <i className="fab fa-discord"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 