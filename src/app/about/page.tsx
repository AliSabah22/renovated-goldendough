'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function About() {
  return (
    <main className="min-h-screen pt-24 bg-dark-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/restaurant-front.jpg"
            alt="Golden Dough Bakery & Grill"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-100/90" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h1 text-gold mb-6"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-gold/20 shadow-xl">
                <Image
                  src="/images/about/store-inside.jpg"
                  alt="Golden Dough Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <h2 className="h2 text-gold mb-4">A Taste of Tradition</h2>
                <p className="body-large text-white">
                  At Golden Dough, we bring the authentic flavors of Lebanon to Mississauga. 
                  Our journey began with a simple mission: to serve the most delicious and 
                  authentic Lebanese cuisine while creating a warm, welcoming atmosphere for 
                  our community.
                </p>
                <p className="body text-white/80">
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
      <section className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="h2 text-gold text-center mb-12">Our Values</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.2}>
              <div className="bg-dark-100 p-6 rounded-lg border border-gold/20 shadow-md">
                <h3 className="h3 text-gold mb-4">Quality Ingredients</h3>
                <p className="body text-white/80">
                  We source the finest ingredients to ensure every dish meets our high standards 
                  of quality and authenticity.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="bg-dark-100 p-6 rounded-lg border border-gold/20 shadow-md">
                <h3 className="h3 text-gold mb-4">Traditional Recipes</h3>
                <p className="body text-white/80">
                  Our menu features time-honored recipes that have been perfected over generations, 
                  bringing authentic Lebanese flavors to your table.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="bg-dark-100 p-6 rounded-lg border border-gold/20 shadow-md">
                <h3 className="h3 text-gold mb-4">Warm Hospitality</h3>
                <p className="body text-white/80">
                  We believe in creating a welcoming atmosphere where every guest feels like family 
                  and leaves with a memorable dining experience.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <h2 className="h2 text-gold mb-4">Visit Us</h2>
                <div className="space-y-4">
                  <p className="body text-white/80">
                    <span className="text-gold font-bold">Address:</span><br />
                    800 Dundas St E<br />
                    Mississauga, ON L4Y 2B6
                  </p>
                  <p className="body text-white/80">
                    <span className="text-gold font-bold">Hours:</span><br />
                    Everyday: 8:00 AM - 9:00 PM
                  </p>
                  <p className="body text-white/80">
                    <span className="text-gold font-bold">Phone:</span><br />
                    (905) 949-6521
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-gold/20 shadow-xl">
                <Image
                  src="/images/about/location.jpg"
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