'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GlitchProps {
  text: string
  className?: string
}

export function WaveGlitch({ text, className = "" }: GlitchProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <span className={className}>{text}</span>

  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -10, 0],
            color: ['#b026ff', '#00ff9d', '#b026ff'],
            textShadow: [
              '0 0 5px #b026ff',
              '0 0 15px #00ff9d',
              '0 0 5px #b026ff'
            ]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export function PixelGlitch({ text, className = "" }: GlitchProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <span className={className}>{text}</span>

  return (
    <motion.div
      className={`inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <motion.span
          animate={{
            x: [-2, 2, -2],
            y: [2, -2, 2],
          }}
          transition={{ duration: 0.2, repeat: Infinity }}
          style={{
            textShadow: `
              2px 0 #ff26b0,
              -2px 0 #00ff9d,
              0 2px #4d4dff,
              0 -2px #b026ff
            `
          }}
        >
          {text}
        </motion.span>
      ) : (
        text
      )}
    </motion.div>
  )
} 