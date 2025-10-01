import { getCollections } from '@/lib/cosmic'
import { Collection } from '@/types'
import Link from 'next/link'

export default async function CollectionsPage() {
  const collections = await getCollections()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container-custom py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our curated collections of products
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          {!collections || collections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No collections found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => {
                const typedCollection = collection as Collection
                const imageUrl = typedCollection.metadata?.collection_image?.imgix_url

                return (
                  <Link
                    key={typedCollection.id}
                    href={`/collections/${typedCollection.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    {imageUrl && (
                      <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                        <img
                          src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
                          alt={typedCollection.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {typedCollection.metadata?.name || typedCollection.title}
                      </h2>
                      {typedCollection.metadata?.description && (
                        <p className="text-gray-600 line-clamp-2">
                          {typedCollection.metadata.description}
                        </p>
                      )}
                      <div className="mt-4 text-primary font-semibold group-hover:underline">
                        View Collection →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}