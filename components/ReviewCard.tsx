import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata?.rating?.key || '5')
  const customerName = review.metadata?.customer_name
  const reviewText = review.metadata?.review
  const verifiedPurchase = review.metadata?.verified_purchase

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-900">{customerName}</span>
            {verifiedPurchase && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                ✓ Verified Purchase
              </span>
            )}
          </div>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {index < rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {reviewText && (
        <p className="text-gray-700 leading-relaxed">{reviewText}</p>
      )}
    </div>
  )
}