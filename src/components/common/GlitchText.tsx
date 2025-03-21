'use client'
import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  isGlitching?: boolean
  variant?: 'static' | 'hover' | 'always'
  onClick?: () => void
}

export default function GlitchText({ 
  text, 
  className = '', 
  isGlitching = false,
  variant = 'static',
  onClick
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  const shouldGlitch = variant === 'always' || 
                      (variant === 'hover' && isHovering) || 
                      (variant === 'static' && isGlitching)

  useEffect(() => {
    if (!shouldGlitch) {
      setDisplayText(text)
      return
    }

    let glitchCount = 0
    const maxGlitches = 3
    const interval = setInterval(() => {
      if (glitchCount >= maxGlitches) {
        setDisplayText(text)
        glitchCount = 0
        return
      }

      const glitchedText = text.split('').map((char, index) => {
        if (Math.random() > 0.7) {
          return characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return char
      }).join('')

      setDisplayText(glitchedText)
      glitchCount++
    }, 100)

    return () => clearInterval(interval)
  }, [shouldGlitch, text])

  return (
    <div 
      className={`relative inline-block ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {/* Main text */}
      <span className="relative inline-block">
        {displayText}
      </span>

      {/* Glitch effects */}
      {shouldGlitch && (
        <>
          <span
            className="absolute top-0 left-0 w-full text-[#00ff9d] opacity-70"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-2px, 2px)',
              animation: 'glitch 750ms infinite',
            }}
          >
            {displayText}
          </span>
          <span
            className="absolute top-0 left-0 w-full text-[#ff26b0] opacity-70"
            style={{
              clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
              transform: 'translate(2px, -2px)',
              animation: 'glitch 375ms infinite',
            }}
          >
            {displayText}
          </span>
        </>
      )}

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  )
} 