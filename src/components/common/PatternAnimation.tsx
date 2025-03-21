'use client'
import { motion } from 'framer-motion'

export function CyberPattern({ className = "" }) {
  return (
    <motion.svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 100 100"
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <pattern
        id="cyber-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <motion.path
          d="M 0 10 L 10 0 L 20 10 L 10 20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: [100, 0, 100] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </pattern>
      <rect x="0" y="0" width="100" height="100" fill="url(#cyber-pattern)" />
    </motion.svg>
  )
}

export function CircuitPattern({ className = "" }) {
  return (
    <motion.svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 100 100"
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <pattern
        id="circuit-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <motion.circle
          cx="10"
          cy="10"
          r="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <motion.line
          x1="10"
          y1="0"
          x2="10"
          y2="20"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.line
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </pattern>
      <rect x="0" y="0" width="100" height="100" fill="url(#circuit-pattern)" />
    </motion.svg>
  )
} 