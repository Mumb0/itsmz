export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ITSMZ Dani
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
            <a href="#beauty-tips" className="text-gray-700 hover:text-pink-600 transition-colors">Beauty Tips</a>
            <a href="#featured-products" className="text-gray-700 hover:text-pink-600 transition-colors">Products</a>
            <a href="#social-feed" className="text-gray-700 hover:text-pink-600 transition-colors">Social</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.tiktok.com/@itsmz_dani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs">TT</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/itsmz_dani/#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">IG</span>
              </div>
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-pink-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
