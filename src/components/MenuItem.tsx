'use client'

import React from 'react'
import { MenuItem as MenuItemType } from '@/types'

interface MenuItemProps {
  item: MenuItemType
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="flex justify-between items-start py-4 border-b border-gray-200 last:border-0">
      <div className="flex-1">
        <h3 className="font-playfair text-lg font-semibold text-black">{item.title}</h3>
        {item.description && (
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        )}
      </div>
      {item.price && (
        <span className="font-semibold text-gold ml-4">{item.price}</span>
      )}
    </div>
  )
}

export default MenuItem 