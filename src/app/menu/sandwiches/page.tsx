'use client'

import React from 'react'
import MenuItem from '@/components/MenuItem'
import { sandwiches } from '@/data/menu'

export default function SandwichesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-dark-100">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-gold">Sandwiches</h1>
        <div className="gold-divider" />
        
        <div className="max-w-2xl mx-auto bg-dark-200 rounded-lg border border-gold/20 shadow-lg p-6">
          {sandwiches.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 