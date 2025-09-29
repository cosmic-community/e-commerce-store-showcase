// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Collection type
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    name: string;
    description?: string;
    collection_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Product type
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name: string;
    description?: string;
    price: number;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    in_stock?: boolean;
    inventory_count?: number;
    collections?: Collection[] | string[];
  };
}

// Review type with select-dropdown rating
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product?: Product;
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review?: string;
    verified_purchase?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}