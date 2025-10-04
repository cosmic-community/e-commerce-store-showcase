'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Order {
  id: string
  title: string
  metadata: {
    customer_name: string
    customer_email: string
    total_amount: number
    order_status: string
  }
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      fetch(`/api/orders/${orderId}`)
        .then(res => res.json())
        .then(data => {
          setOrder(data.order)
          setLoading(false)
        })
        .catch(error => {
          console.error('Failed to fetch order:', error)
          setLoading(false)
        })
    }
  }, [orderId])

  if (loading) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <Link
            href="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-3xl mb-4">
            ✓
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase, {order.metadata.customer_name}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="space-y-4 text-left">
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium text-gray-700">Order Number</span>
              <span className="text-gray-900">{order.id}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium text-gray-700">Email</span>
              <span className="text-gray-900">{order.metadata.customer_email}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium text-gray-700">Status</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                {order.metadata.order_status}
              </span>
            </div>
            <div className="flex justify-between pt-4">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-primary">
                ${order.metadata.total_amount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to {order.metadata.customer_email}
        </p>

        <Link
          href="/products"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}