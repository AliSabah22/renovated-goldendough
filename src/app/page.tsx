'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Navigation />
      <main className="gradient-dark">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/restaurant-front.jpg"
              alt="Golden Dough Bakery & Grill"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark-50/80" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center text-gold px-4"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h1 mb-6 text-gold"
            >
              Golden Dough Bakery & Grill
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="body-large mb-8 text-white"
            >
              Authentic Lebanese Cuisine
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link 
                href="/menu"
                className="btn-primary"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="section section-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border border-gold/20">
                  <Image
                    src="/images/about/store-interior.jpg"
                    alt="Golden Dough Interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-50/80 to-transparent" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="h2 text-gold">A Taste of Tradition</h2>
                <p className="body-large">
                  At Golden Dough, we bring the authentic flavors of Lebanon to Mississauga. 
                  Our journey began with a simple mission: to serve the most delicious and 
                  authentic Lebanese cuisine while creating a warm, welcoming atmosphere for 
                  our community.
                </p>
                <p className="body">
                  Our recipes have been passed down through generations, ensuring that every 
                  bite carries the rich heritage of Lebanese cuisine. From our freshly baked 
                  bread to our perfectly grilled meats, we take pride in serving dishes that 
                  are both traditional and innovative.
                </p>
                <Link 
                  href="/about"
                  className="btn-secondary"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="section gradient-gold">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 text-center"
          >
            <h2 className="h2 mb-6 text-dark-50">
              Experience Authentic Lebanese Cuisine
            </h2>
            <p className="body-large mb-8 text-dark-50">
              Visit us today and taste the difference
            </p>
            <Link 
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>
    </main>
  )
} 