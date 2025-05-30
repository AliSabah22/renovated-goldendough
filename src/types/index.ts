import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface MenuItem {
  title: string
  description: string
  image: string
  price?: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  image: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  eventDate?: string
  guestCount?: number
} 