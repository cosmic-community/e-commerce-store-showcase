// app/collections/[slug]/page.tsx
import type { Metadata } from 'next'
import { getCollection, getProductsByCollection } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import { notFound } from 'next/navigation'

interface CollectionPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = await getCollection(slug)

  if (!collection) {
    return {
      title: 'Collection Not Found',
      description: 'The collection you are looking for could not be found'
    }
  }

  const typedCollection = collection as Collection
  const collectionName = typedCollection.metadata?.name || typedCollection.title
  const collectionDescription = typedCollection.metadata?.description || `Shop our ${collectionName} collection. Discover quality products curated just for you.`
  
  const collectionImage = typedCollection.metadata?.collection_image?.imgix_url
  const ogImageUrl = collectionImage 
    ? `${collectionImage}?w=1200&h=630&fit=crop&auto=format,compress`
    : '/og-image.jpg'

  return {
    title: `${collectionName} Collection`,
    description: collectionDescription,
    openGraph: {
      title: `${collectionName} Collection | E-Commerce Store`,
      description: collectionDescription,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: collectionName
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${collectionName} Collection | E-Commerce Store`,
      description: collectionDescription,
      images: [ogImageUrl]
    }
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  
  const [collection, products] = await Promise.all([
    getCollection(slug),
    getProductsByCollection(slug)
  ])

  if (!collection) {
    notFound()
  }

  const typedCollection = collection as Collection
  const imageUrl = typedCollection.metadata?.collection_image?.imgix_url

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Collection Hero */}
      <section className="relative bg-gray-900 text-white">
        {imageUrl && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={`${imageUrl}?w=1920&h=500&fit=crop&auto=format,compress`}
              alt={typedCollection.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        )}
        
        <div className="relative container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {typedCollection.metadata?.name || typedCollection.title}
            </h1>
            {typedCollection.metadata?.description && (
              <p className="text-xl opacity-90">
                {typedCollection.metadata.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Products in this Collection
            </h2>
          </div>
          <ProductGrid products={products as Product[]} />
        </div>
      </section>
    </div>
  )
}