import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Header */}
      <header className="border-b border-amber-950/20 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-500">STRIDE</h1>
          <nav className="hidden md:flex gap-8 text-zinc-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Shop</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Collections</a>
            <a href="#" className="hover:text-amber-500 transition-colors">About</a>
          </nav>
          <button className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
            Cart (0)
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Step Into
            <br />
            <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Excellence</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Premium footwear designed for those who demand quality, comfort, and style in every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-4 bg-amber-500 text-black text-lg font-bold rounded-full hover:bg-amber-400 transition-all shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50">
              Shop Collection
            </button>
            <button className="px-10 py-4 border-2 border-amber-500/50 text-amber-500 text-lg font-bold rounded-full hover:bg-amber-500/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured Collection
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl overflow-hidden border border-amber-900/20 hover:border-amber-500/30 transition-all hover:shadow-2xl hover:shadow-amber-500/10 group">
            <div className="aspect-square relative overflow-hidden bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
                alt="Red Nike Sneaker"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-bold text-white">Urban Runner</h4>
              <p className="text-zinc-400">Lightweight performance meets street style</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-3xl font-bold text-amber-500">$129</span>
                <button className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl overflow-hidden border border-amber-900/20 hover:border-amber-500/30 transition-all hover:shadow-2xl hover:shadow-amber-500/10 group">
            <div className="aspect-square relative overflow-hidden bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop"
                alt="White Sneaker"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-bold text-white">Classic White</h4>
              <p className="text-zinc-400">Timeless elegance for everyday wear</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-3xl font-bold text-amber-500">$149</span>
                <button className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl overflow-hidden border border-amber-900/20 hover:border-amber-500/30 transition-all hover:shadow-2xl hover:shadow-amber-500/10 group">
            <div className="aspect-square relative overflow-hidden bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop"
                alt="Black High-top Sneaker"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-bold text-white">Night Edition</h4>
              <p className="text-zinc-400">Bold statement for the modern trendsetter</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-3xl font-bold text-amber-500">$169</span>
                <button className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-amber-900/20 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white">Premium Quality</h4>
            <p className="text-zinc-400 leading-relaxed">Crafted with the finest materials for durability and comfort</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-amber-900/20 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white">Fast Shipping</h4>
            <p className="text-zinc-400 leading-relaxed">Free delivery on orders over $100, straight to your door</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-amber-900/20 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white">Easy Returns</h4>
            <p className="text-zinc-400 leading-relaxed">30-day hassle-free returns for your peace of mind</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 mb-24">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-amber-500/30">
          <h3 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Ready to Elevate Your Style?
          </h3>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their perfect pair
          </p>
          <button className="px-12 py-4 bg-black text-amber-500 text-lg font-bold rounded-full hover:bg-zinc-900 transition-all shadow-xl">
            Start Shopping Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-950/20 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-zinc-400">
            <div>
              <h5 className="text-amber-500 font-bold text-lg mb-4">STRIDE</h5>
              <p className="text-sm">Premium footwear for the modern lifestyle</p>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-4">Shop</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-4">Follow Us</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-950/20 mt-12 pt-8 text-center text-sm text-zinc-500">
            © 2024 STRIDE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
