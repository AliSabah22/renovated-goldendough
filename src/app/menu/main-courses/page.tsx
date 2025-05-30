import React from 'react'
import MenuItem from '@/components/MenuItem'

const mainCourses = [
  { title: 'Chicken Shawarma', price: '$16.99' },
  { title: 'Beef Shawarma', price: '$18.99' },
  { title: 'Chicken & Beef Shawarma', price: '$18.99' },
  { title: 'Mixed Grill', price: '$22.99' },
  { title: 'Kafta', price: '$17.99' },
  { title: 'BBQ Beef', price: '$21.99' },
  { title: 'Shish Tawouk', price: '$18.99' },
]

export default function MainCoursesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Main Courses</h1>
        <div className="gold-divider" />
        
        <p className="text-center text-gray-600 mb-8">
          All main courses come with fresh pita bread and your choice of french fries or rice
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {mainCourses.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
} 