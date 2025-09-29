import { Collection } from '@/types'

interface HeroProps {
  collections: Collection[]
}

export default function Hero({ collections }: HeroProps) {
  const featuredCollection = collections && collections.length > 0 ? collections[0] : null

  if (!featuredCollection) {
    return (
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover quality products for every occasion
          </p>
        </div>
      </section>
    )
  }

  const imageUrl = featuredCollection.metadata?.collection_image?.imgix_url

  return (
    <section className="relative bg-gray-900 text-white">
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={`${imageUrl}?w=1920&h=600&fit=crop&auto=format,compress`}
            alt={featuredCollection.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      )}
      
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {featuredCollection.metadata?.name || featuredCollection.title}
          </h1>
          {featuredCollection.metadata?.description && (
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {featuredCollection.metadata.description}
            </p>
          )}
          <a
            href="#products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}