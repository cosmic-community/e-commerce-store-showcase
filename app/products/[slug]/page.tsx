import { notFound } from 'next/navigation'
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import ProductDetail from '@/components/ProductDetail'
import ReviewList from '@/components/ReviewList'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id)

  return (
    <div className="bg-white">
      <div className="container-custom py-16">
        <ProductDetail product={product as Product} />
        
        {reviews && reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Customer Reviews
            </h2>
            <ReviewList reviews={reviews as Review[]} />
          </div>
        )}
      </div>
    </div>
  )
}