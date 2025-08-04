import { ImageWithFallback } from './figma/ImageWithFallback';

interface SocialPost {
  id: string;
  platform: 'tiktok' | 'instagram';
  content: string;
  imageUrl: string;
  videoUrl?: string;
  likes: number;
  comments: number;
  timestamp: string;
  link: string;
}

const mockSocialPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'tiktok',
    content: '✨ My everyday glow routine! This foundation gives me that perfect natural finish 💫 #GlowUp #MakeupTutorial',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    likes: 2847,
    comments: 156,
    timestamp: '2h ago',
    link: 'https://tiktok.com/@beautyqueen/video123'
  },
  {
    id: '2',
    platform: 'instagram',
    content: 'Sunday skincare routine 🌸 Starting the week with some self-care! Swipe to see my holy grail products ➡️',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop',
    likes: 1923,
    comments: 89,
    timestamp: '4h ago',
    link: 'https://instagram.com/p/beautypost123'
  },
  {
    id: '3',
    platform: 'tiktok',
    content: '🔥 Bronzer hack that will change your life! This trick gives you the most natural contour ever',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    likes: 4521,
    comments: 234,
    timestamp: '6h ago',
    link: 'https://tiktok.com/@beautyqueen/video124'
  },
  {
    id: '4',
    platform: 'instagram',
    content: 'New lipstick collection just dropped! 💋 Which shade are you trying first? Comment below! 👇',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    likes: 3156,
    comments: 312,
    timestamp: '8h ago',
    link: 'https://instagram.com/p/lipstickpost456'
  }
];

export function SocialMediaFeed() {
  const tiktokPosts = mockSocialPosts.filter(post => post.platform === 'tiktok');
  const instagramPosts = mockSocialPosts.filter(post => post.platform === 'instagram');

  const PostCard = ({ post }: { post: SocialPost }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <ImageWithFallback
          src={post.imageUrl}
          alt={post.content}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 left-3">
          <div className={`px-3 py-1 rounded-full text-white text-sm ${
            post.platform === 'tiktok' ? 'bg-black' : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            {post.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {post.likes.toLocaleString()}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {post.comments}
            </span>
          </div>
          <span>{post.timestamp}</span>
        </div>
        
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
        >
          View on {post.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Latest from Social Media</h2>
          <p className="text-xl text-gray-600">Stay updated with my latest beauty tips and product reviews</p>
        </div>

        {/* TikTok Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-black text-white px-4 py-2 rounded-full mr-4">
              <h3 className="text-xl">Latest TikToks</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tiktokPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full mr-4">
              <h3 className="text-xl">Latest Instagram Posts</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {instagramPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}