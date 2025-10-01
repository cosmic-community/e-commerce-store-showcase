import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections()
  ])

  // Show only first 6 products on homepage
  const featuredProducts = products.slice(0, 6)

  return (
    <>
      <Hero collections={collections as Collection[]} />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out some of our most popular items
            </p>
          </div>

          <ProductGrid products={featuredProducts as Product[]} />

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      {collections && collections.length > 0 && (
        <section className="py-16 bg-white" id="collections">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shop by Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our curated collections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(collections as Collection[]).slice(0, 2).map((collection) => {
                const imageUrl = collection.metadata?.collection_image?.imgix_url

                return (
                  <Link
                    key={collection.id}
                    href={`/collections/${collection.slug}`}
                    className="group relative bg-gray-900 rounded-lg overflow-hidden aspect-[16/9] hover:shadow-xl transition-shadow"
                  >
                    {imageUrl && (
                      <div className="absolute inset-0">
                        <img
                          src={`${imageUrl}?w=1200&h=675&fit=crop&auto=format,compress`}
                          alt={collection.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    )}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">
                        {collection.metadata?.name || collection.title}
                      </h3>
                      {collection.metadata?.description && (
                        <p className="text-lg opacity-90 mb-4">
                          {collection.metadata.description}
                        </p>
                      )}
                      <span className="text-white font-semibold group-hover:underline">
                        Explore Collection →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collections"
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View All Collections
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}