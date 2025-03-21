'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  useEffect(() => {
    audioRef.current = new Audio()
    // Using HTTPS stream
    audioRef.current.src = 'https://usa9.fastcast4u.com/proxy/jamz?mp=/1'
    // Backup URLs if needed:
    // 'https://ssl.rockhost.com/proxy/chillsky?mp=/stream'
    // 'https://stream.nightride.fm/chillsynth.m4a'
    audioRef.current.volume = 0.5
    
    // Add error handling
    audioRef.current.onerror = (e) => {
      console.error('Audio stream error:', e)
      // Try backup stream if main fails
      audioRef.current!.src = 'https://stream.nightride.fm/chillsynth.m4a'
    }
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          await audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      } catch (error) {
        console.error('Playback error:', error)
        // Try backup stream on error
        if (audioRef.current) {
          audioRef.current.src = 'https://stream.nightride.fm/chillsynth.m4a'
          await audioRef.current.play()
          setIsPlaying(true)
        }
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-4 right-4 z-50 bg-[#1a1a2e] p-3 rounded-lg border border-[#2a2a4e] shadow-lg"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] flex items-center justify-center group"
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-black group-hover:scale-110 transition-transform`}></i>
        </button>

        {/* Audio Visualizer Waves */}
        <div className="flex items-center gap-[2px]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[2px] bg-[#00ff9d]"
              animate={{
                height: isPlaying ? [15, 25, 15] : 15,
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
} 