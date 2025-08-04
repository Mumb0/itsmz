export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl text-white mb-4">Stay in the Glow Loop!</h2>
          <p className="text-xl text-pink-100 mb-8">
            Get exclusive beauty tips, product launches, and special discounts delivered to your inbox. 
            Plus, get my FREE "10-Minute Glow-Up Guide" when you subscribe! 💖
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-200"
            />
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-pink-100 text-sm mt-4">
            No spam, just beauty love! Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}