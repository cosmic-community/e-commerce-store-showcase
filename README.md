# E-Commerce Store Showcase

![App Preview](https://imgix.cosmicjs.com/06e2be30-9d6b-11f0-8dcc-651091f6a7c0-photo-1441986300917-64674bd600d8-1759174343417.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, full-featured e-commerce storefront built with Next.js 15 that showcases your products, collections, and customer reviews with a beautiful, responsive design.

## Features

- 🛍️ **Product Catalog** - Browse all products with high-quality images and pricing
- 🏪 **Collection Filtering** - Filter products by collection (Best Sellers, Summer Collection)
- 📦 **Product Details** - Individual product pages with image galleries and descriptions
- ⭐ **Customer Reviews** - Display verified customer reviews with star ratings
- 📱 **Responsive Design** - Fully responsive layout optimized for all devices
- 🖼️ **Image Optimization** - Automatic image optimization using imgix
- 🚀 **Server Components** - Built with Next.js 15 App Router for optimal performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68dade6e8d0995fa5541dade&clone_repository=68dadf7f8d0995fa5541daff)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for 'Design a content model for an e-commerce store with products, collections, and customer reviews', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic SDK** - Headless CMS integration
- **React** - UI component library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket access

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products with Collections

```typescript
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

const products = response.objects as Product[];
```

### Fetching a Single Product

```typescript
const response = await cosmic.objects
  .findOne({ type: 'products', slug })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

const product = response.object as Product;
```

### Fetching Reviews for a Product

```typescript
const response = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1);

const reviews = response.objects as Review[];
```

## Cosmic CMS Integration

This application uses three main content types from your Cosmic bucket:

### Products
- Name, description, price
- Product images (multiple)
- In stock status and inventory count
- Associated collections

### Collections
- Name and description
- Collection image
- Grouped product displays

### Reviews
- Customer name and review text
- Star rating (1-5 stars)
- Verified purchase status
- Associated product

All content is fetched server-side using Next.js 15's Server Components for optimal performance and SEO.

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add your environment variables in the Netlify dashboard
4. Deploy!

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->