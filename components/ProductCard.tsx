import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata?.product_images?.[0]
  const imageUrl = firstImage?.imgix_url
  const inStock = product.metadata?.in_stock ?? true
  const price = product.metadata?.price

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
        {imageUrl ? (
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={`${imageUrl}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-4xl">📦</span>
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {product.metadata?.name || product.title}
          </h3>
          
          <div className="flex items-center justify-between">
            {price && (
              <span className="text-2xl font-bold text-primary">
                ${price.toFixed(2)}
              </span>
            )}
            
            {!inStock && (
              <span className="text-sm text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {product.metadata?.inventory_count !== undefined && inStock && (
            <p className="text-sm text-gray-600 mt-2">
              {product.metadata.inventory_count} in stock
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}