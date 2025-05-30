'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

interface ExpandedMenuProps {
  title: string
  items: MenuItem[]
  onClose: () => void
}

const ExpandedMenu = ({ title, items, onClose }: ExpandedMenuProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#111111] flex flex-col"
      >
        {/* Header - fixed at the top */}
        <div className="sticky top-0 z-10 p-6 bg-dark-50 border-b border-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="text-gold hover:text-gold-light transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h2 className="h2 text-gold">{title}</h2>
            </div>
          </div>
        </div>

        {/* Content - scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-dark-50 rounded-lg border border-gold/20 overflow-hidden hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-50 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="h3 text-white">{item.name}</h3>
                      <span className="text-gold font-medium">{item.price}</span>
                    </div>
                    <p className="body-small text-gold-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ExpandedMenu 