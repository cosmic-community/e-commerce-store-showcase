// app/products/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import ProductDetail from '@/components/ProductDetail'
import ReviewList from '@/components/ReviewList'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found'
    }
  }

  const typedProduct = product as Product
  const productName = typedProduct.metadata?.name || typedProduct.title
  const productDescription = typedProduct.metadata?.description
    ? typedProduct.metadata.description.replace(/<[^>]*>/g, '').slice(0, 160)
    : `Shop ${productName} at our store. Quality products with verified customer reviews.`
  
  const productImage = typedProduct.metadata?.product_images?.[0]?.imgix_url
  const ogImageUrl = productImage 
    ? `${productImage}?w=1200&h=630&fit=crop&auto=format,compress`
    : '/og-image.jpg'

  return {
    title: `${productName} - Shop Now`,
    description: productDescription,
    openGraph: {
      title: `${productName} | E-Commerce Store`,
      description: productDescription,
      type: 'product',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: productName
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productName} | E-Commerce Store`,
      description: productDescription,
      images: [ogImageUrl]
    }
  }
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