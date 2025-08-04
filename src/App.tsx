import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialMediaFeed } from './components/SocialMediaFeed';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BeautyTips } from './components/BeautyTips';
import { Newsletter } from './components/Newsletter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="social-feed">
          <SocialMediaFeed />
        </section>

        <section id="featured-products">
          <FeaturedProducts />
        </section>

        <section id="beauty-tips">
          <BeautyTips />
        </section>

        <Newsletter />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ITSMZ
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your go-to destination for honest beauty reviews, tutorials, and the latest trends.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#beauty-tips" className="hover:text-pink-400 transition-colors">Beauty Tips</a></li>
                <li><a href="#featured-products" className="hover:text-pink-400 transition-colors">Products</a></li>
                <li><a href="#social-feed" className="hover:text-pink-400 transition-colors">Social Media</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors">About Me</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Skincare</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Makeup</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Budget Beauty</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://tiktok.com/@beautyqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white text-sm">TT</span>
                </a>
                <a
                  href="https://instagram.com/beautyqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <span className="text-white text-sm">IG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Beauty Queen. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
