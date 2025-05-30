'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    image: '/images/testimonials/person1.jpg',
    content: "The authentic flavors at Golden Dough transport me straight to Lebanon. Their shawarma is the best I've had outside of Beirut!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    image: '/images/testimonials/person2.jpg',
    content: "I've been coming here for years. The quality is consistently excellent, and the staff makes you feel like family.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Local Resident',
    image: '/images/testimonials/person3.jpg',
    content: "Their catering service made my wedding reception unforgettable. The mezze platter was a huge hit with all our guests!",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="h2 text-gold mb-4">What Our Customers Say</h2>
          <p className="body-large max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience at Golden Dough.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card card-hover p-6"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gold">{testimonial.name}</h3>
                  <p className="text-white/60">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 