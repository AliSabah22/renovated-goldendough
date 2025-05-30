'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

interface InfiniteGalleryProps {
  images: GalleryImage[]
}

export default function InfiniteGallery({ images }: InfiniteGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const duplicatedImages = [...images, ...images]

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
        
        {/* First row - slides right */}
        <div className="infinite-slider mb-8">
          <div className="slider-track">
            {duplicatedImages.map((image, index) => (
              <div 
                key={`right-${index}`} 
                className="flex-shrink-0 w-64 h-48 mx-2 relative border border-gray-200 rounded-lg overflow-hidden bg-gray-100"
              >
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - slides left */}
        <div className="infinite-slider">
          <div className="slider-track-reverse">
            {duplicatedImages.map((image, index) => (
              <div 
                key={`left-${index}`} 
                className="flex-shrink-0 w-64 h-48 mx-2 relative border border-gray-200 rounded-lg overflow-hidden bg-gray-100"
              >
                {!loadedImages.has(index + duplicatedImages.length) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    loadedImages.has(index + duplicatedImages.length) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(index + duplicatedImages.length)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 