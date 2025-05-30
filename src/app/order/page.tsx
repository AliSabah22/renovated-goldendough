'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'

const deliveryOptions = [
  {
    name: 'Uber Eats',
    logo: '/images/delivery/UberEats.jpg',
    link: 'https://www.ubereats.com/ca/store/golden-dough-bakery-%26-grill/3ZxQekttRUui4VOVTROoJQ?srsltid=AfmBOoo3GaJ7jYxmYGR4_j1sTbPOdrtDzIi9CIma6TNVtmjoz08AOugG',
    description: 'Order through Uber Eats for quick delivery'
  },
  {
    name: 'DoorDash',
    logo: '/images/delivery/doordash.jpg',
    link: 'https://www.doordash.com/en-CA/store/golden-dough-mississauga-152916/12688628/?srsltid=AfmBOor6EslylzJFY9-H9YE9pv3r_wzxTRjtU3qwqIBofuPeU-QEr6wJ',
    description: 'Get your favorite dishes delivered with DoorDash'
  },
  {
    name: 'SkipTheDishes',
    logo: '/images/delivery/Skip.jpg',
    link: 'https://www.skipthedishes.com/golden-dough-bakery-and-grill',
    description: 'Skip the line and order through SkipTheDishes'
  }
]

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    link: 'https://facebook.com/goldendough'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
    link: 'https://instagram.com/goldendough'
  }
]

export default function OrderPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-dark-100">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-gold">Order Now</h1>
        <div className="gold-divider" />

        <div className="max-w-4xl mx-auto">
          {/* Phone Ordering Section */}
          <ScrollAnimation>
            <div className="bg-dark-200 rounded-lg border border-gold/20 shadow-lg p-8 mb-12">
              <h2 className="font-playfair text-3xl font-bold text-gold mb-6">Order by Phone</h2>
              <p className="text-white/80 mb-6">
                Prefer to order directly? Give us a call and we'll be happy to take your order over the phone.
              </p>
              <a 
                href="tel:+1234567890" 
                className="btn-primary inline-block"
              >
                (905) 949-6521
              </a>
            </div>
          </ScrollAnimation>

          {/* Delivery Options */}
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="font-playfair text-3xl font-bold text-gold mb-8 text-center">Delivery Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deliveryOptions.map((option) => (
                  <motion.div
                    key={option.name}
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-200 rounded-lg border border-gold/20 p-6 text-center"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={option.logo}
                        alt={option.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gold mb-2">{option.name}</h3>
                    <p className="text-white/80 mb-4">{option.description}</p>
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-block"
                    >
                      Order Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Social Media Section */}
          <ScrollAnimation>
            <div className="bg-dark-200 rounded-lg border border-gold/20 shadow-lg p-8">
              <h2 className="font-playfair text-3xl font-bold text-gold mb-6 text-center">Follow Us</h2>
              <p className="text-white/80 mb-8 text-center">
                Stay updated with our latest menu items, special offers, and events by following us on social media!
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  )
} 