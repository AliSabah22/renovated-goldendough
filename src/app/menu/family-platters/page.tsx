import React from 'react'
import MenuItem from '@/components/MenuItem'

const familyPlatters = [
  { title: 'Mixed BBQ Platter', price: '$125' },
  { title: 'BBQ Beef Platter', price: '$120' },
  { title: 'Kafta Platter', price: '$90' },
  { title: 'Shish Tawouk Platter', price: '$102' },
]

export default function FamilyPlattersPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Family Platters</h1>
        <div className="gold-divider" />
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {familyPlatters.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 