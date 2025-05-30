'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageWithFallback from '@/components/ImageWithFallback'
import ExpandedMenu from '@/components/ExpandedMenu'
import Gallery from '@/components/Gallery'

const menuItems = {
  mainCourses: [
    {
      name: 'Chicken Shawarma',
      description: 'Marinated chicken shawarma served with rice or french fries and fresh pita bread',
      price: '$16.99',
      image: '/images/menu/chicken shawarma.jpg'
    },
    {
      name: 'Beef Shawarma',
      description: 'Tender beef shawarma served with rice or french fries and fresh pita bread',
      price: '$18.99',
      image: '/images/menu/beef shawarma.jpg'
    },
    {
      name: 'Chicken & Beef Shawarma',
      description: 'Combination of chicken and beef shawarma served with rice or french fries and fresh pita bread',
      price: '$18.99',
      image: '/images/menu/mixed grill plate.jpg'
    },
    {
      name: 'Mixed Grill',
      description: 'Assortment of grilled meats served with rice or french fries and fresh pita bread',
      price: '$22.99',
      image: '/images/menu/mixed grill plate.jpg'
    },
    {
      name: 'Kafta',
      description: 'Grilled ground beef and lamb kafta served with rice or french fries and fresh pita bread',
      price: '$17.99',
      image: '/images/menu/kafta.jpg'
    },
    {
      name: 'BBQ Beef',
      description: 'Grilled beef served with rice or french fries and fresh pita bread',
      price: '$21.99',
      image: '/images/menu/bbq beef.jpg'
    },
    {
      name: 'Shish Tawouk',
      description: 'Grilled chicken skewers served with rice or french fries and fresh pita bread',
      price: '$18.99',
      image: '/images/menu/shish tawouk.jpg'
    }
  ],
  sandwiches: [
    {
      name: 'Chicken Shawarma Sandwich',
      description: 'Chicken shawarma wrapped in our fresh pita bread with garlic sauce',
      price: '$9.49',
      image: '/images/menu/chicken shawarma.jpg'
    },
    {
      name: 'Beef Shawarma Sandwich',
      description: 'Beef shawarma wrapped in our fresh pita bread with garlic sauce',
      price: '$10.49',
      image: '/images/menu/beef shawarma.jpg'
    },
    {
      name: 'Kafta Sandwich',
      description: 'Grilled kafta wrapped in our fresh pita bread with garlic sauce',
      price: '$9.99',
      image: '/images/menu/kafta.jpg'
    },
    {
      name: 'Shish Tawouk Sandwich',
      description: 'Grilled chicken skewers wrapped in our fresh pita bread with garlic sauce',
      price: '$10.99',
      image: '/images/menu/shish tawouk.jpg'
    },
    {
      name: 'BBQ Beef Sandwich',
      description: 'Grilled beef wrapped in our fresh pita bread with garlic sauce',
      price: '$11.99',
      image: '/images/menu/bbq beef.jpg'
    },
    {
      name: 'Beef Burger Sandwich',
      description: 'Beef patty wrapped in our fresh pita bread with garlic sauce',
      price: '$8.99',
      image: '/images/menu/beef burger.jpg'
    },
    {
      name: 'Falafel Sandwich',
      description: 'Crispy falafel balls with tahini sauce and vegetables',
      price: '$8.99',
      image: '/images/menu/falafel.jpg'
    }
  ],
  manakeesh: [
    {
      name: 'Cheese Manakeesh',
      description: 'Traditional Lebanese flatbread topped with our special cheese blend',
      price: '$7.99',
      image: '/images/menu/cheese manakeesh.jpg'
    },
    {
      name: 'Cheese Veggie Manakeesh',
      description: 'Flatbread topped with cheese and fresh vegetables',
      price: '$9.99',
      image: '/images/menu/cheese veggie manakeesh.jpg'
    },
    {
      name: 'Cheese with Chicken Manakeesh',
      description: 'Flatbread topped with cheese and grilled chicken',
      price: '$10.99',
      image: '/images/menu/cheese chicken manakeesh.jpg'
    },
    {
      name: 'Spicy Cheese Manakeesh',
      description: 'Flatbread topped with spicy cheese blend',
      price: '$8.49',
      image: '/images/menu/spicy cheese manakeesh.jpg'
    },
    {
      name: 'Zaatar Manakeesh',
      description: 'Traditional Lebanese flatbread topped with zaatar and olive oil',
      price: '$5.99',
      image: '/images/menu/zaatar manakeesh.jpg'
    },
    {
      name: 'Zaatar Veggie Manakeesh',
      description: 'Flatbread topped with zaatar and fresh vegetables',
      price: '$7.99',
      image: '/images/menu/zaatar veggie manakeesh.jpg'
    },
    {
      name: 'Zaatar with Cheese Manakeesh',
      description: 'Flatbread topped with zaatar and cheese',
      price: '$7.99',
      image: '/images/menu/zaatar cheese manakeesh.jpg'
    },
    {
      name: 'Lahim Baageen',
      description: 'Flatbread topped with seasoned ground beef',
      price: '$6.49',
      image: '/images/menu/lahim baageen.jpg'
    },
    {
      name: 'Sujuk Manakeesh',
      description: 'Flatbread topped with spicy beef sausage',
      price: '$7.99',
      image: '/images/menu/sujuk manakeesh.jpg'
    },
    {
      name: 'Sujuk with Cheese Manakeesh',
      description: 'Flatbread topped with spicy beef sausage and cheese',
      price: '$9.99',
      image: '/images/menu/sujuk cheese manakeesh.jpg'
    },
    {
      name: 'Kishek Manakeesh',
      description: 'Flatbread topped with fermented yogurt and bulgur',
      price: '$8.49',
      image: '/images/menu/kishek manakeesh.jpg'
    },
    {
      name: 'Kafta Manakeesh',
      description: 'Flatbread topped with seasoned ground beef and lamb',
      price: '$8.49',
      image: '/images/menu/kafta manakeesh.jpg'
    },
    {
      name: 'Falafel Manakeesh',
      description: 'Flatbread topped with crispy falafel',
      price: '$8.99',
      image: '/images/menu/falafel manakeesh.jpg'
    },
    {
      name: 'Mortadella with Cheese Manakeesh',
      description: 'Flatbread topped with mortadella and cheese',
      price: '$9.99',
      image: '/images/menu/mortadella cheese manakeesh.jpg'
    },
    {
      name: 'Labneh Manakeesh',
      description: 'Flatbread topped with strained yogurt',
      price: '$8.49',
      image: '/images/menu/labneh manakeesh.jpg'
    },
    {
      name: 'Filfil Manakeesh',
      description: 'Flatbread topped with spicy pepper mix',
      price: '$8.49',
      image: '/images/menu/filfil manakeesh.jpg'
    },
    {
      name: 'Spinach Manakeesh',
      description: 'Flatbread topped with seasoned spinach',
      price: '$6.99',
      image: '/images/menu/spinach manakeesh.jpg'
    },
    {
      name: 'Spinach with Cheese Manakeesh',
      description: 'Flatbread topped with spinach and cheese',
      price: '$8.99',
      image: '/images/menu/spinach cheese manakeesh.jpg'
    },
    {
      name: 'Egg Manakeesh',
      description: 'Flatbread topped with egg',
      price: '$5.99',
      image: '/images/menu/egg manakeesh.jpg'
    },
    {
      name: 'Egg Omelet Manakeesh',
      description: 'Flatbread topped with egg omelet',
      price: '$8.49',
      image: '/images/menu/egg omelet manakeesh.jpg'
    },
    {
      name: 'Beef Pepperoni Pizza',
      description: 'Flatbread topped with beef pepperoni and cheese',
      price: '$9.99',
      image: '/images/menu/beef pepperoni pizza.jpg'
    },
    {
      name: 'Pizza Veggie',
      description: 'Flatbread topped with vegetables and cheese',
      price: '$9.99',
      image: '/images/menu/pizza veggie.jpg'
    },
    {
      name: 'Nutella Manakeesh',
      description: 'Flatbread topped with Nutella',
      price: '$7.99',
      image: '/images/menu/nutella manakeesh.jpg'
    },
    {
      name: 'Nutella with Cheese Manakeesh',
      description: 'Flatbread topped with Nutella and cheese',
      price: '$8.99',
      image: '/images/menu/nutella cheese manakeesh.jpg'
    }
  ],
  appetizers: [
    {
      name: 'Hummus',
      description: 'Creamy chickpea dip with olive oil and pine nuts',
      price: '$8.99',
      image: '/images/menu/hummus.jpg'
    },
    {
      name: 'Hummus with Chicken',
      description: 'Hummus topped with grilled chicken',
      price: '$14.99',
      image: '/images/menu/hummus chicken.jpg'
    },
    {
      name: 'Hummus with Beef',
      description: 'Hummus topped with grilled beef',
      price: '$15.99',
      image: '/images/menu/hummus beef.jpg'
    },
    {
      name: 'Foul',
      description: 'Fava beans cooked with garlic and olive oil',
      price: '$10.99',
      image: '/images/menu/foul.jpg'
    },
    {
      name: 'Moutabbal',
      description: 'Smoky eggplant dip with tahini and olive oil',
      price: '$9.99',
      image: '/images/menu/moutabbal.jpg'
    },
    {
      name: 'Fatteh',
      description: 'Layered dish with chickpeas, yogurt, and crispy bread',
      price: '$15.99',
      image: '/images/menu/fatteh.jpg'
    },
    {
      name: 'Lebaneh',
      description: 'Strained yogurt with olive oil',
      price: '$9.99',
      image: '/images/menu/lebaneh.jpg'
    },
    {
      name: 'Kebbeh (per piece)',
      description: 'Crispy bulgur shell filled with seasoned ground beef',
      price: '$2.49',
      image: '/images/menu/kebbeh.jpg'
    },
    {
      name: 'Kebbeh (dozen)',
      description: '12 pieces of crispy bulgur shells filled with seasoned ground beef',
      price: '$26.99',
      image: '/images/menu/kebbeh dozen.jpg'
    }
  ],
  familyPlatters: [
    {
      name: 'Mixed BBQ Platter',
      description: 'Large platter of mixed grilled meats, rice, hummus, and salad (serves 4-6)',
      price: '$125.00',
      image: '/images/menu/mixed bbq platter.jpg'
    },
    {
      name: 'BBQ Beef Platter',
      description: 'Large platter of grilled beef, rice, hummus, and salad (serves 4-6)',
      price: '$120.00',
      image: '/images/menu/bbq beef platter.jpg'
    },
    {
      name: 'Kafta Platter',
      description: 'Large platter of grilled kafta, rice, hummus, and salad (serves 4-6)',
      price: '$90.00',
      image: '/images/menu/kafta platter.jpg'
    },
    {
      name: 'Shish Tawouk Platter',
      description: 'Large platter of grilled chicken skewers, rice, hummus, and salad (serves 4-6)',
      price: '$102.00',
      image: '/images/menu/shish tawouk platter.jpg'
    }
  ]
}

type MenuSection = keyof typeof menuItems

export default function Menu() {
  const [expandedSection, setExpandedSection] = useState<MenuSection | null>(null)

  const menuSections = [
    { id: 'mainCourses', title: 'Main Courses' },
    { id: 'sandwiches', title: 'Sandwiches' },
    { id: 'manakeesh', title: 'Manakeesh' },
    { id: 'appetizers', title: 'Appetizers' },
    { id: 'familyPlatters', title: 'Family Platters' }
  ] as const

  return (
    <main className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-dark-50 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="h1 text-gold mb-4">Our Menu</h1>
          <p className="body-large max-w-2xl mx-auto">
            Discover our authentic Lebanese cuisine, prepared with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-dark-50 rounded-lg border border-gold/20 overflow-hidden cursor-pointer"
                onClick={() => setExpandedSection(section.id)}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={menuItems[section.id][0].image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="h2 text-gold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="body-small text-white">
                    {menuItems[section.id].length} items available
                  </p>
                  <p className="text-white mt-2">Click to view all items →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      <AnimatePresence>
        {expandedSection && (
          <ExpandedMenu
            title={menuSections.find(s => s.id === expandedSection)?.title || ''}
            items={menuItems[expandedSection]}
            onClose={() => setExpandedSection(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
} 