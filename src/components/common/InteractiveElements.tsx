'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function HoverCard({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="relative rounded-xl bg-[#1a1a2e] p-6">{children}</div>

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-[#1a1a2e] p-6"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#b026ff]/20 to-[#00ff9d]/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export function PulseButton({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return (
    <button className="relative px-6 py-3 rounded-full bg-gradient-to-r from-[#b026ff] to-[#00ff9d]">
      <span className="relative z-10 text-white">{children}</span>
    </button>
  )

  return (
    <motion.button
      className="relative px-6 py-3 rounded-full bg-gradient-to-r from-[#b026ff] to-[#00ff9d]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white"
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
      <span className="relative z-10 text-white">
        {children}
      </span>
    </motion.button>
  )
} 