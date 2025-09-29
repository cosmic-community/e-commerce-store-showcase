export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🛍️ Store</h3>
            <p className="text-gray-400">
              Your trusted source for quality products
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#collections" className="text-gray-400 hover:text-white transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Powered By</h4>
            <p className="text-gray-400">
              Built with{' '}
              <a 
                href="https://www.cosmicjs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Cosmic
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}