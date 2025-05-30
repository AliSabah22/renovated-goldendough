import React from 'react'
import MenuItem from '@/components/MenuItem'

const manakeesh = [
  { title: 'Cheese', price: '$7.99' },
  { title: 'Cheese Veggie', price: '$9.99' },
  { title: 'Cheese with Chicken', price: '$10.99' },
  { title: 'Spicy Cheese', price: '$8.49' },
  { title: 'Zaatar', price: '$5.99' },
  { title: 'Zaatar Veggie', price: '$7.99' },
  { title: 'Zaatar with Cheese', price: '$7.99' },
  { title: 'Lahim Baageen', price: '$6.49' },
  { title: 'Sujuk', price: '$7.99' },
  { title: 'Sujuk with Cheese', price: '$9.99' },
  { title: 'Kishek', price: '$8.49' },
  { title: 'Kafta', price: '$8.49' },
  { title: 'Falafel', price: '$8.99' },
  { title: 'Mortadella with Cheese', price: '$9.99' },
  { title: 'Labneh', price: '$8.49' },
  { title: 'Filfil', price: '$8.49' },
  { title: 'Spinach', price: '$6.99' },
  { title: 'Spinach with Cheese', price: '$8.99' },
  { title: 'Egg', price: '$5.99' },
  { title: 'Egg Omelet', price: '$8.49' },
  { title: 'Beef Pepperoni Pizza', price: '$9.99' },
  { title: 'Pizza Veggie', price: '$9.99' },
  { title: 'Nutella', price: '$7.99' },
  { title: 'Nutella with Cheese', price: '$8.99' },
]

export default function ManakeeshPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Manakeesh</h1>
        <div className="gold-divider" />
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {manakeesh.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 