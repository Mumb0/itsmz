import { ImageWithFallback } from './figma/ImageWithFallback';

interface BeautyTip {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  readTime: string;
  publishedDate: string;
}

const beautyTips: BeautyTip[] = [
  {
    id: '1',
    title: '5 Steps to the Perfect Morning Skincare Routine',
    excerpt: 'Start your day with this foolproof routine that will give you glowing skin all day long. From gentle cleansing to the perfect moisturizer...',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    category: 'Skincare',
    readTime: '5 min read',
    publishedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'How to Make Your Makeup Last All Day',
    excerpt: 'The ultimate guide to long-lasting makeup! These pro tips will keep your look fresh from morning to night, no matter what your day brings...',
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop',
    category: 'Makeup',
    readTime: '7 min read',
    publishedDate: '4 days ago'
  },
  {
    id: '3',
    title: 'Budget-Friendly Dupes for High-End Products',
    excerpt: 'Get that luxury look without breaking the bank! I\'ve tested dozens of drugstore alternatives to find the best dupes for your favorite high-end products...',
    imageUrl: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop',
    category: 'Budget Beauty',
    readTime: '6 min read',
    publishedDate: '1 week ago'
  },
  {
    id: '4',
    title: 'Contouring for Beginners: Easy Techniques',
    excerpt: 'Master the art of contouring with these simple techniques! Whether you\'re a complete beginner or looking to refine your skills...',
    imageUrl: 'https://images.unsplash.com/photo-1619451334792-150d2d464043?w=600&h=400&fit=crop',
    category: 'Makeup',
    readTime: '8 min read',
    publishedDate: '1 week ago'
  }
];

export function BeautyTips() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Latest Beauty Tips</h2>
          <p className="text-xl text-gray-600">Expert advice and tutorials to elevate your beauty game</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beautyTips.map(tip => (
            <article key={tip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <ImageWithFallback
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm shadow-md">
                    {tip.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{tip.publishedDate}</span>
                  <span className="mx-2">•</span>
                  <span>{tip.readTime}</span>
                </div>

                <h3 className="text-xl text-gray-900 mb-3 leading-tight">{tip.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tip.excerpt}</p>

                <a
                  href={`/tips/${tip.id}`}
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors group"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/tips"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
          >
            View All Tips
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
