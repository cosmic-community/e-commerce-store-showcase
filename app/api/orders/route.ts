import { NextRequest, NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    const response = await cosmic.objects.insertOne({
      title: `Order - ${orderData.customer_name}`,
      type: 'orders',
      metadata: {
        customer_name: orderData.customer_name,
        customer_email: orderData.customer_email,
        shipping_address: orderData.shipping_address,
        city: orderData.city,
        postal_code: orderData.postal_code,
        country: orderData.country,
        items: orderData.items,
        total_amount: orderData.total_amount,
        order_status: orderData.order_status
      }
    })

    return NextResponse.json({ order: response.object })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}