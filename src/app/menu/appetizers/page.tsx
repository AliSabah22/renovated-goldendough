import React from 'react'
import MenuItem from '@/components/MenuItem'
import { MenuItem as MenuItemType } from '@/data/menu'

const appetizers: MenuItemType[] = [
  { title: 'Hummus', price: '$8.99', description: 'Creamy chickpea dip with olive oil and pine nuts' },
  { title: 'Hummus with Chicken', price: '$14.99', description: 'Hummus topped with grilled chicken' },
  { title: 'Hummus with Beef', price: '$15.99', description: 'Hummus topped with grilled beef' },
  { title: 'Foul', price: '$10.99', description: 'Fava beans cooked with garlic and olive oil' },
  { title: 'Moutabbal', price: '$9.99', description: 'Smoky eggplant dip with tahini and olive oil' },
  { title: 'Fatteh', price: '$15.99', description: 'Layered dish with chickpeas, yogurt, and crispy bread' },
  { title: 'Lebaneh', price: '$9.99', description: 'Strained yogurt with olive oil' },
  { title: 'Kebbeh (per piece)', price: '$2.49', description: 'Crispy bulgur shell filled with seasoned ground beef' },
  { title: 'Kebbeh (dozen)', price: '$26.99', description: '12 pieces of crispy bulgur shells filled with seasoned ground beef' },
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