'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ImageWithFallback from '@/components/ImageWithFallback'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function About() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/about/store front.jpg"
            alt="Golden Dough Bakery & Grill"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/images/about/store inside.jpg"
                  alt="Golden Dough Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">A Taste of Tradition</h2>
                <p className="text-gray-600">
                  At Golden Dough, we bring the authentic flavors of Lebanon to Mississauga. 
                  Our journey began with a simple mission: to serve the most delicious and 
                  authentic Lebanese cuisine while creating a warm, welcoming atmosphere for 
                  our community.
                </p>
                <p className="text-gray-600">
                  Our recipes have been passed down through generations, ensuring that every 
                  bite carries the rich heritage of Lebanese cuisine. From our freshly baked 
                  bread to our perfectly grilled meats, we take pride in serving dishes that 
                  are both traditional and innovative.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Quality Ingredients</h3>
                <p className="text-gray-600">
                  We source the finest ingredients to ensure every dish meets our high standards 
                  of quality and authenticity.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Traditional Recipes</h3>
                <p className="text-gray-600">
                  Our menu features time-honored recipes that have been perfected over generations, 
                  bringing authentic Lebanese flavors to your table.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Warm Hospitality</h3>
                <p className="text-gray-600">
                  We believe in creating a welcoming atmosphere where every guest feels like family 
                  and leaves with a memorable dining experience.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>Address:</strong><br />
                    800 Dundas St E<br />
                    Mississauga, ON L4Y 2B6
                  </p>
                  <p className="text-gray-600">
                    <strong>Hours:</strong><br />
                    Everyday: 8:00 AM - 9:00 PM
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong><br />
                    (905) 949-6521
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/images/about/store location.jpg"
                  alt="Golden Dough Location"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
} 