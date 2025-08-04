import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  description: string;
  affiliateLink: string;
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Luminous Foundation',
    brand: 'Glow Beauty',
    price: '$32',
    originalPrice: '$45',
    imageUrl: 'https://images.unsplash.com/photo-1631214540039-b0b8da7d8e91?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 1247,
    description: 'My holy grail foundation! Gives the most natural, dewy finish that lasts all day.',
    affiliateLink: '#'
  },
  {
    id: '2',
    name: 'Radiant Blush Palette',
    brand: 'Bloom Cosmetics',
    price: '$28',
    imageUrl: 'https://images.unsplash.com/photo-1587037983613-e3854ca3b2a3?w=300&h=300&fit=crop',
    rating: 4.9,
    reviews: 892,
    description: 'These shades are perfect for every skin tone! The pigmentation is incredible.',
    affiliateLink: '#'
  },
  {
    id: '3',
    name: 'Hydra-Boost Serum',
    brand: 'Pure Skincare',
    price: '$65',
    originalPrice: '$78',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 2156,
    description: 'Game-changer for dry skin! I use this every morning and night for that glow.',
    affiliateLink: '#'
  },
  {
    id: '4',
    name: 'Velvet Matte Lipstick Set',
    brand: 'Luxe Lips',
    price: '$42',
    imageUrl: 'https://images.unsplash.com/photo-1586495781899-90bdea322f35?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 758,
    description: 'The most comfortable matte formula ever! These shades are my everyday go-tos.',
    affiliateLink: '#'
  }
];

export function FeaturedProducts() {
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">My Current Favorites</h2>
          <p className="text-xl text-gray-600">Products I'm loving right now and think you will too!</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative">
                <ImageWithFallback
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-md text-sm">
                    Sale!
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                </div>
                
                <div className="flex items-center mb-3">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <a
                  href={product.affiliateLink}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 text-center block"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}