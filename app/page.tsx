import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import CollectionFilter from '@/components/CollectionFilter'

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections()
  ])

  return (
    <>
      <Hero collections={collections as Collection[]} />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of quality products
            </p>
          </div>

          <CollectionFilter 
            collections={collections as Collection[]} 
            products={products as Product[]}
          />
        </div>
      </section>
    </>
  )
}