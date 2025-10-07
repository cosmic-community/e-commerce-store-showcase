import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Have questions or need support? Contact us and we\'ll get back to you as soon as possible. We\'re here to help with any inquiries about our products or services.',
  openGraph: {
    title: 'Contact Us | E-Commerce Store',
    description: 'Have questions or need support? Get in touch with our team',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact E-Commerce Store'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | E-Commerce Store',
    description: 'Have questions or need support? Get in touch with our team',
    images: ['/og-image.jpg']
  }
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-gray-600">
                We're here to help with any questions you may have
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Email Us
                </h3>
                <p className="text-gray-600">
                  <a href="mailto:tony@cosmicjs.com" className="text-primary hover:underline">
                    tony@cosmicjs.com
                  </a>
                </p>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Support Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM EST
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We typically respond within<br />
                  24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}