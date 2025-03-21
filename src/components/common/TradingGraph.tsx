'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TradingGraphProps {
  onNearText?: (isNear: boolean) => void
}

export default function TradingGraph({ onNearText }: TradingGraphProps) {
  const [points1, setPoints1] = useState<number[]>([])
  const [points2, setPoints2] = useState<number[]>([])
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [isNear, setIsNear] = useState(false)

  // Initialize points and dimensions
  useEffect(() => {
    // Set initial dimensions
    const updateDimensions = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
    updateDimensions()

    // Generate initial points
    const initialPoints1 = Array.from({ length: 100 }, (_, i) => 
      0.5 + 0.15 * Math.sin(i * 0.1) + Math.random() * 0.05
    )
    setPoints1(initialPoints1)

    const initialPoints2 = Array.from({ length: 100 }, (_, i) => 
      0.5 + 0.15 * Math.cos(i * 0.15) + Math.random() * 0.05
    )
    setPoints2(initialPoints2)

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Handle proximity updates
  useEffect(() => {
    onNearText?.(isNear)
  }, [isNear, onNearText])

  // Update points animation
  useEffect(() => {
    if (!height || !width) return

    const interval = setInterval(() => {
      setPoints1(prev => {
        if (!prev.length) return prev
        const lastPoint = prev[prev.length - 1]
        const targetPoint = 0.5 + 0.15 * Math.sin(Date.now() * 0.001)
        const fluctuation = (Math.random() - 0.5) * 0.02
        const pullToTarget = (targetPoint - lastPoint) * 0.1
        const newPoint = lastPoint + fluctuation + pullToTarget
        const boundedPoint = Math.max(0.35, Math.min(0.65, newPoint))
        
        const newIsNear = Math.abs(boundedPoint - 0.5) < 0.08
        setIsNear(newIsNear)
        
        return [...prev.slice(1), boundedPoint]
      })

      setPoints2(prev => {
        if (!prev.length) return prev
        const lastPoint = prev[prev.length - 1]
        const targetPoint = 0.5 + 0.15 * Math.cos(Date.now() * 0.001)
        const fluctuation = (Math.random() - 0.5) * 0.02
        const pullToTarget = (targetPoint - lastPoint) * 0.1
        const newPoint = lastPoint + fluctuation + pullToTarget
        const boundedPoint = Math.max(0.35, Math.min(0.65, newPoint))
        return [...prev.slice(1), boundedPoint]
      })
    }, 50)

    return () => clearInterval(interval)
  }, [height, width])

  const createPath = (points: number[]) => {
    if (points.length === 0 || !height || !width) return ''
    
    const linePoints = points.map((point, index) => {
      const x = (index / (points.length - 1)) * width
      const y = point * height
      return `${x},${y}`
    })

    return `M 0,${height} L ${linePoints.join(' L ')} L ${width},${height}`
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.svg
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Grid lines */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="0"
            y1={height * (i / 10)}
            x2={width}
            y2={height * (i / 10)}
            stroke="#4d4dff"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={width * (i / 20)}
            y1="0"
            x2={width * (i / 20)}
            y2={height}
            stroke="#4d4dff"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* Graph paths */}
        <motion.path
          d={createPath(points1)}
          fill="url(#gradient1)"
          stroke="#00ff9d"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        <motion.path
          d={createPath(points2)}
          fill="url(#gradient2)"
          stroke="#ff26b0"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00ff9d" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff26b0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff26b0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
} 