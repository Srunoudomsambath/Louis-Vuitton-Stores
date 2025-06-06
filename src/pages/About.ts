export function renderAbout(): string {
  return `
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <!-- Hero Section -->
      <section class="relative py-20 px-4 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10"></div>
        <div class="relative max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-sm font-medium text-purple-600 dark:text-purple-300 mb-6 backdrop-blur-sm">
            ✨ About Our Story
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight">
            Crafting Excellence in Every Product
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about delivering quality products and exceptional service that transforms your shopping experience into something extraordinary.
          </p>
        </div>
      </section>

      <!-- Main Content Cards -->
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- About Us Card -->
          <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Us</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded with a vision to revolutionize online shopping, we've grown from a small startup to a trusted platform serving thousands of customers worldwide. Our journey is built on innovation, quality, and an unwavering commitment to customer satisfaction.
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer">
                Learn More
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Our Products Card -->
          <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-200/50 dark:border-pink-700/50 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Curated with care and precision, our product collection spans across multiple categories, each item handpicked for quality, durability, and style. From cutting-edge electronics to lifestyle essentials, we ensure every product meets our high standards.
              </p>
              <div class="flex items-center text-pink-600 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-pointer">
                View Products
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Our Services Card -->
          <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Beyond products, we offer comprehensive services including fast shipping, hassle-free returns, 24/7 customer support, and personalized recommendations. Our dedicated team ensures your shopping experience is smooth from browsing to delivery.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Free shipping on orders over $50
                </div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div class="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  30-day easy returns
                </div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  24/7 customer support
                </div>
              </div>
              <div class="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer">
                Learn More
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Contact Us Card -->
          <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-200/50 dark:border-pink-700/50 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Have questions or need assistance? We're here to help! Reach out to our friendly support team through multiple channels. Whether you need product advice, order support, or just want to say hello, we'd love to hear from you.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg class="w-4 h-4 mr-3 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  support@shopify.com
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg class="w-4 h-4 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +1 (555) 123-4567
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg class="w-4 h-4 mr-3 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Mon-Fri 9AM-6PM EST
                </div>
              </div>
              <div class="flex items-center text-pink-600 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-pointer">
                Get in Touch
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-16 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="group">
              <div class="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 font-medium">Happy Customers</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">5K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 font-medium">Products</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 font-medium">Satisfaction Rate</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div class="text-sm text-gray-600 dark:text-gray-300 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  `;
}