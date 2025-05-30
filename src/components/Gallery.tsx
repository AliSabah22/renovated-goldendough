'use client'

import React from 'react'
import Image from 'next/image'

const galleryImages = [
  '/images/gallery/beef shawarma wrap.jpg',
  '/images/gallery/chicken shawarma wrap.jpg',
  '/images/gallery/kebbe plate.jpg',
  '/images/gallery/mixed grill plate.jpg',
  '/images/gallery/falafel wrap.jpg',
  '/images/gallery/fattoush salad.jpg',
  '/images/gallery/tawwuq plate.jpg',
  '/images/gallery/foul.jpg',
  '/images/gallery/tabouleh salad.jpg',
  '/images/gallery/half chicken, half shawarma plate .jpg',
  '/images/gallery/kafta plate.jpg',
  '/images/gallery/veggie zattar.jpg',
  '/images/gallery/beef-BBQ-plate.jpg',
  '/images/gallery/chicken-plate.jpg',
  '/images/gallery/tawook-wrap.jpg',
  '/images/gallery/BBQ-wrap.jpg',
  '/images/gallery/beef-shawarma-wrap.jpg',
  '/images/gallery/cheese-closed.jpg',
  '/images/gallery/Mortadella-with-Cheese.jpg',
  '/images/gallery/chicken-shawarma-plate.jpg',
  '/images/gallery/beef-shawarma-plate.jpg',
  '/images/gallery/tawook-plate.jpg',
  '/images/gallery/BBQ-beef-plate.jpg',
  '/images/gallery/falafel-wrap.jpg',
  '/images/gallery/fattoush-salad.jpg',
  '/images/gallery/tabouleh-salad.jpg'
]

const Gallery = () => {
  const half = Math.ceil(galleryImages.length / 2)
  const topRowImages = galleryImages.slice(0, half)
  const bottomRowImages = galleryImages.slice(half)

  return (
    <div className="py-16 overflow-hidden">
      {/* First row - slides right */}
      <div className="infinite-slider mb-8">
        <div className="slider-track">
          {topRowImages.concat(topRowImages).map((src, index) => (
            <div key={`right-${index}`} className="flex-shrink-0 px-4">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-gold/20">
                <Image
                  src={src}
                  alt={`Gallery food top ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - slides left */}
      <div className="infinite-slider">
        <div className="slider-track-reverse">
          {bottomRowImages.concat(bottomRowImages).map((src, index) => (
            <div key={`left-${index}`} className="flex-shrink-0 px-4">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-gold/20">
                <Image
                  src={src}
                  alt={`Gallery food bottom ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery 