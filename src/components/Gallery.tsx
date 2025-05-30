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
]

const Gallery = () => {
  // Repeat or randomly shuffle images if you want more slots
  const images = [...galleryImages, ...galleryImages.slice(0, 4)] // 16 images for a fuller look

  return (
    <div className="py-16 overflow-hidden">
      {/* First row - slides right */}
      <div className="infinite-slider mb-8">
        <div className="slider-track">
          {images.map((src, index) => (
            <div key={`right-${index}`} className="flex-shrink-0 px-4">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-gold/20">
                <Image
                  src={src}
                  alt={`Gallery food ${index + 1}`}
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
          {images.map((src, index) => (
            <div key={`left-${index}`} className="flex-shrink-0 px-4">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-gold/20">
                <Image
                  src={src}
                  alt={`Gallery food ${index + 1}`}
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