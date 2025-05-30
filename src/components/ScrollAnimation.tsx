'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up',
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const getDirection = () => {
    switch (direction) {
      case 'up':
        return { y: 50 }
      case 'down':
        return { y: -50 }
      case 'left':
        return { x: 50 }
      case 'right':
        return { x: -50 }
      default:
        return { y: 50 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      })
    }
  }, [isInView, controls, delay])

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getDirection()
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
} 