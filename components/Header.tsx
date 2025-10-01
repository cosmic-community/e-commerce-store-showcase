'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              🛍️ Fashionistas Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/collections" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Collections
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link 
                href="/collections" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={closeMobileMenu}
              >
                Collections
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}