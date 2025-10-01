import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import CollectionFilter from '@/components/CollectionFilter'

export default async function ProductsPage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container-custom py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our carefully curated selection of quality products
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <CollectionFilter 
            collections={collections as Collection[]} 
            products={products as Product[]}
          />
        </div>
      </section>
    </div>
  )
}