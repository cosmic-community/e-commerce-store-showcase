import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              🛍️ Store
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/#collections" 
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Collections
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}