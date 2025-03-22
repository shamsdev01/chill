'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchText from '../common/GlitchText'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { text: 'Home', href: '/', color: '#00ff9d' },
    { text: 'Services', href: '/services', color: '#ff26b0' },
    { text: 'Projects', href: '/projects', color: '#4d4dff' },
    { text: 'Blog', href: '/blog', color: '#b026ff' },
    { text: 'About', href: '/about', color: '#b026ff' },
    { text: 'Contact', href: '/contact', color: '#00ff9d' }
  ]

  // Cyberpunk hamburger icon SVG
  const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-current">
      <motion.path
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={isMenuOpen ? { d: "M 3 3 L 21 21" } : { d: "M 2 6 L 22 6" }}
      />
      <motion.path
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={isMenuOpen 
          ? { opacity: 0 }
          : { opacity: 1, d: "M 2 12 L 22 12" }}
      />
      <motion.path
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={isMenuOpen ? { d: "M 3 21 L 21 3" } : { d: "M 2 18 L 22 18" }}
      />
    </svg>
  )

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[999] bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-[#2a2a4e]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <GlitchText 
                text="ChillDevs" 
                variant="hover"
                className="text-3xl font-bold bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <Link 
                  key={item.text} 
                  href={item.href}
                  className="transition-colors group relative"
                >
                  <div 
                    className={`text-lg font-medium hover:opacity-80 transition-colors ${
                      pathname === item.href 
                        ? 'bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] bg-clip-text text-transparent' 
                        : ''
                    }`}
                    style={{ 
                      color: pathname === item.href ? undefined : item.color
                    }}
                  >
                    {item.text}
                  </div>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] opacity-20 rounded-lg" />
              <HamburgerIcon />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0f]/95 backdrop-blur-lg md:hidden"
          >
            <div className="h-full flex flex-col pt-24 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 border-b border-[#1a1a2e]"
                  >
                    <div className="text-2xl font-medium bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] bg-clip-text text-transparent">
                      {item.text}
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00ff9d]/10 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#ff26b0]/10 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 