export interface MenuItem {
  title: string
  price: string
  description?: string
}

export const sandwiches: MenuItem[] = [
  { title: 'Chicken Shawarma', price: '$9.49' },
  { title: 'Beef Shawarma', price: '$10.49' },
  { title: 'Kafta Sandwich', price: '$9.99' },
  { title: 'Shish Tawouk Sandwich', price: '$10.99' },
  { title: 'BBQ Beef Sandwich', price: '$11.99' },
  { title: 'Beef Burger Sandwich', price: '$8.99' },
  { title: 'Falafel Sandwich', price: '$8.99' },
] 