'use client'

import { useState } from 'react'
import { Product, Collection } from '@/types'
import ProductGrid from '@/components/ProductGrid'

interface CollectionFilterProps {
  collections: Collection[]
  products: Product[]
}

export default function CollectionFilter({ collections, products }: CollectionFilterProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)

  const filteredProducts = selectedCollection
    ? products.filter((product) => {
        const productCollections = product.metadata?.collections
        if (!productCollections) return false
        
        if (Array.isArray(productCollections)) {
          return productCollections.some((col: any) => {
            const collectionId = typeof col === 'string' ? col : col.id
            return collectionId === selectedCollection
          })
        }
        
        return false
      })
    : products

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8 justify-center" id="products">
        <button
          onClick={() => setSelectedCollection(null)}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            selectedCollection === null
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Products
        </button>
        
        {collections && collections.length > 0 && collections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => setSelectedCollection(collection.id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCollection === collection.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {collection.metadata?.name || collection.title}
          </button>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  )
}