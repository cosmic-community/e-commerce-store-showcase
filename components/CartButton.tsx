'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartButton() {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center px-4 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
    >
      🛒 Cart
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
}