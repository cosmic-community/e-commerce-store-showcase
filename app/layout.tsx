import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import CosmicBadge from '@/components/CosmicBadge'
  import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'E-Commerce Store - Shop Quality Products Online',
    template: '%s | E-Commerce Store'
  },
  description: 'Browse our curated collection of quality products with verified customer reviews. From fashion to accessories, find everything you need with fast shipping and excellent service.',
  keywords: ['online shopping', 'quality products', 'e-commerce', 'fashion', 'accessories', 'customer reviews'],
  authors: [{ name: 'E-Commerce Store' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'E-Commerce Store',
    title: 'E-Commerce Store - Shop Quality Products Online',
    description: 'Browse our curated collection of quality products with verified customer reviews',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Store'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Store - Shop Quality Products Online',
    description: 'Browse our curated collection of quality products with verified customer reviews',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛍️</text></svg>" />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CosmicBadge bucketSlug={bucketSlug} />
        </CartProvider>
      </body>
        </CartProvider>
      </body>
    </html>
  )
}