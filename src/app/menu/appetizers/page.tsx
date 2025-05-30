import React from 'react'
import MenuItem from '@/components/MenuItem'

const appetizers = [
  { title: 'Hummus', price: '$8.99' },
  { title: 'Hummus with Chicken', price: '$14.99' },
  { title: 'Hummus with Beef', price: '$15.99' },
  { title: 'Foul', price: '$10.99' },
  { title: 'Moutabbal', price: '$9.99' },
  { title: 'Fatteh', price: '$15.99' },
  { title: 'Lebaneh', price: '$9.99' },
  { title: 'Kebbeh (per piece)', price: '$2.49' },
  { title: 'Kebbeh (dozen)', price: '$26.99' },
]

export default function AppetizersPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Appetizers</h1>
        <div className="gold-divider" />
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {appetizers.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 