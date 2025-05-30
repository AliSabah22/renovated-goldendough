'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '', onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <motion.div
        layout
        onClick={handleClick}
        className="cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg p-4 mt-2 z-50"
          >
            {/* Add your expanded content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AnimatedCard 