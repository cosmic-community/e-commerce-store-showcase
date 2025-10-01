import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - E-Commerce Store',
  description: 'Learn more about our store, our mission, and our commitment to quality products',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Store
            </h1>
            <p className="text-xl text-gray-600">
              Bringing you quality products with exceptional customer service since day one
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We believe that shopping should be an enjoyable experience. That's why we carefully curate every product in our store, ensuring that each item meets our high standards for quality, durability, and value.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to provide our customers with products they'll love, backed by exceptional service and support that goes beyond the sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Quality */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected and tested to ensure it meets our high standards.
              </p>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help with any questions or concerns before, during, and after your purchase.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to sustainable practices, from eco-friendly packaging to partnering with responsible manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                What started as a passion project has grown into a thriving community of satisfied customers. We began with a simple idea: make quality products accessible to everyone, backed by service that truly cares.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we're proud to serve thousands of customers, each one contributing to our story of growth and excellence. From our carefully curated collections to our verified customer reviews, everything we do is designed to help you make confident purchasing decisions.
              </p>
              <p className="text-gray-700">
                Thank you for being part of our journey. We're excited to continue serving you with the best products and service possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Shop?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Browse our curated collection of quality products
            </p>
            <a
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}