import React from 'react'
import MenuItem from '@/components/MenuItem'

const sandwiches = [
  { title: 'Chicken Shawarma', price: '$9.49' },
  { title: 'Beef Shawarma', price: '$10.49' },
  { title: 'Kafta Sandwich', price: '$9.99' },
  { title: 'Shish Tawouk Sandwich', price: '$10.99' },
  { title: 'BBQ Beef Sandwich', price: '$11.99' },
  { title: 'Beef Burger Sandwich', price: '$8.99' },
  { title: 'Falafel Sandwich', price: '$8.99' },
]

export default function SandwichesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Sandwiches</h1>
        <div className="gold-divider" />
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {sandwiches.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 