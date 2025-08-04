import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialMediaFeed } from './components/SocialMediaFeed';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BeautyTips } from './components/BeautyTips';

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
      </main>

      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-xl text-transparent">
                ITSMZ
              </h3>
              <p className="leading-relaxed text-gray-300">
                Your go-to destination for honest beauty reviews, tutorials, and the latest trends.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#beauty-tips" className="transition-colors hover:text-pink-400">
                    Beauty Tips
                  </a>
                </li>
                <li>
                  <a href="#featured-products" className="transition-colors hover:text-pink-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#social-feed" className="transition-colors hover:text-pink-400">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition-colors hover:text-pink-400">
                    About Me
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="transition-colors hover:text-pink-400">
                    Skincare
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-pink-400">
                    Makeup
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-pink-400">
                    Budget Beauty
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-pink-400">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://tiktok.com/@beautyqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-colors hover:bg-gray-800"
                >
                  <span className="text-sm text-white">TT</span>
                </a>
                <a
                  href="https://instagram.com/beautyqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity hover:opacity-80"
                >
                  <span className="text-sm text-white">IG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 ITSMZ Dani. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
