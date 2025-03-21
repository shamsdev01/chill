'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchText from './GlitchText'

interface Option {
  value: string
  label: string
}

interface CyberDropdownProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function CyberDropdown({ options, value, onChange, placeholder = "Select an option" }: CyberDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Find the selected option
  const selectedOption = options.find(opt => opt.value === value)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#0a0a0f] border border-[#4d4dff]/30 rounded-lg px-4 py-3 text-white 
                 focus:outline-none hover:border-[#00ff9d]/50 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className={selectedOption ? 'text-white' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="text-[#00ff9d]">▼</span>
        </div>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-[#1a1a2e] border border-[#4d4dff]/30 rounded-lg 
                     overflow-hidden shadow-lg"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left ${
                  value === option.value 
                    ? 'text-[#00ff9d] bg-[#2a2a4e]' 
                    : 'text-white hover:bg-[#2a2a4e]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 