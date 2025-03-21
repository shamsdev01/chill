'use client'
import { motion } from 'framer-motion'

export function BlockchainNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Node */}
            <motion.div
              className="absolute w-2 h-2 bg-[#00ff9d] rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
            {/* Connection Lines */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 45%, 
                  rgba(0, 255, 157, 0.1) 50%, 
                  transparent 55%
                )`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 