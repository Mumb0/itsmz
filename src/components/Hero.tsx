import { ImageWithFallback } from './figma/ImageWithFallback';
import itsmz from '../assets/itsmz_dani.jpeg';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Your <b>Beauty Journey</b>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to my beauty universe! I'm sharing my favorite products, honest reviews, 
              and easy tutorials to help you discover your most confident self. 
              From everyday looks to glamorous transformations - let's glow together! ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#featured-products"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200 text-center"
              >
                Shop My Favorites
              </a>
              <a
                href="#beauty-tips"
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-200 text-center"
              >
                Read Beauty Tips
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a
                href="https://tiktok.com/@beautyqueen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">TT</span>
                </div>
                <span>@itsmz_dani</span>
              </a>
              <a
                href="https://www.instagram.com/itsmz_dani/#'"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">IG</span>
                </div>
                <span>@itsmz_dani</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src={itsmz}
                alt="Beauty Influencer"
                className="rounded-2xl shadow-2xl mx-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-indigo-200 rounded-full opacity-70 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
    </section>
  );
}
