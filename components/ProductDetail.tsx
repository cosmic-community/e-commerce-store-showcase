  'use client'
  import { useState } from 'react'
  import { Product } from '@/types'
  import { useCart } from '@/context/CartContext'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const images = product.metadata?.product_images || []
  const [selectedImage, setSelectedImage] = useState(0)
  
  const price = product.metadata?.price
  const inStock = product.metadata?.in_stock ?? true
  const inventoryCount = product.metadata?.inventory_count
  const description = product.metadata?.description
  
  // Get current image safely
  const currentImage = images[selectedImage]
  // Handle adding product to cart
  const handleAddToCart = () => {
    if (!inStock || !product) return
    addToCart(product, quantity)
    setAddedToCart(true)
    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        {images.length > 0 && currentImage ? (
          <>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={`${currentImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={`${image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-6xl">📦</span>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.metadata?.name || product.title}
        </h1>
        
        {price && (
          <div className="text-3xl font-bold text-primary mb-6">
            ${price.toFixed(2)}
          </div>
        )}

        <div className="flex items-center gap-4 mb-8">
          {inStock ? (
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
              ✓ In Stock
            </span>
          ) : (
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 font-medium">
              Out of Stock
            </span>
          )}
          
          {inventoryCount !== undefined && inStock && (
            <span className="text-gray-600">
              {inventoryCount} available
            </span>
          )}
        </div>

        {description && (
          <div 
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className="border-t pt-6 space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="font-semibold text-gray-900">
              Quantity:
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
                disabled={!inStock}
              >
                −
              </button>
              <span className="px-6 py-2 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
                disabled={!inStock}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
              addedToCart
                ? 'bg-green-600 text-white'
                : inStock
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {addedToCart ? '✓ Added to Cart!' : inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>

        {product.metadata?.collections && Array.isArray(product.metadata.collections) && (
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Collections</h3>
            <div className="flex flex-wrap gap-2">
              {product.metadata.collections.map((collection: any) => {
                if (typeof collection === 'object' && collection.title) {
                  return (
                    <span
                      key={collection.id}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {collection.title}
                    </span>
                  )
                }
                return null
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}