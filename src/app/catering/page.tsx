import React from 'react'
import Link from 'next/link'

export default function CateringPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Catering Services</h1>
        <div className="gold-divider" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-playfair text-3xl font-bold mb-6">Premium Catering Services</h2>
            <p className="text-gray-600 mb-6">
              Golden Dough offers premium catering services for events of all sizes, including weddings and parties. 
              Our Arabic food catering includes appetizers, BBQ, shawarma, pastries, and more. 
              Custom packages are available to suit your event's needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Appetizers & Mezze</li>
                  <li>• BBQ & Grilled Items</li>
                  <li>• Shawarma Station</li>
                  <li>• Fresh Pastries</li>
                  <li>• Custom Menu Options</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-4">Event Types</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Weddings</li>
                  <li>• Corporate Events</li>
                  <li>• Birthday Parties</li>
                  <li>• Family Gatherings</li>
                  <li>• Special Occasions</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 