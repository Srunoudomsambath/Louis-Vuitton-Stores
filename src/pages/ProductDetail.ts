import { fetchProductById } from "../service/api";

export async function renderProductDetail(id: number): Promise<string> {
  try {
    const p = await fetchProductById(id);

    return `
      <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
       
        <div class="max-w-7xl mx-auto px-6 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <!-- Product Image Section -->
            <div class="space-y-6">
              <!-- Main Image -->
              <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 group overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 opacity-50"></div>
                <div class="relative h-96 flex items-center justify-center">
                  <img 
                    src="${p.image}" 
                    alt="${p.title}"
                    class="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                  />
                </div>
                
                <!-- Image Overlay Actions -->
                <div class="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">
                    <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                  <button class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">
                    <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Trust Badges -->
              <div class="grid grid-cols-3 gap-4">
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700">
                  <div class="text-green-500 text-2xl mb-2">🚚</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">On all orders</div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700">
                  <div class="text-blue-500 text-2xl mb-2">🔒</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Safe Payment</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">SSL Encrypted</div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700">
                  <div class="text-purple-500 text-2xl mb-2">↩️</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Easy Returns</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">30-day policy</div>
                </div>
              </div>
            </div>

            <!-- Product Details Section -->
            <div class="space-y-8">
              <!-- Category Badge -->
              <div class="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                ${p.category}
              </div>

              <!-- Product Title -->
              <h1 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                ${p.title}
              </h1>

              <!-- Rating Section -->

              <!-- Price Section -->
              <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-6 border border-green-200 dark:border-green-800">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-4xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      $${p.price.toFixed(2)}
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span class="line-through text-gray-400">$${(p.price * 1.2).toFixed(2)}</span>
                      <span class="ml-2 text-green-600 font-semibold">Save ${(p.price * 0.2).toFixed(2)}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      17% OFF
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Limited time offer
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quantity and Actions -->
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity:</label>
                  <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
                    <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">-</button>
                    <input type="number" value="1" min="1" class="w-16 text-center py-2 bg-white dark:bg-gray-800 border-none focus:outline-none">
                    <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">+</button>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="space-y-4">
                  <button class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-lg">
                    🛒 Add to Cart
                  </button>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <button class="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                      ❤️ Add to Wishlist
                    </button>
                    <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      ⚡ Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <!-- Product Description -->
            
              <!-- Product Features -->
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Choose This Product?</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Premium Quality</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Fast Delivery</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">24/7 Support</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Money Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        /* Smooth entrance animation */
        .max-w-7xl {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Enhanced hover effects */
        button:hover {
          transform: scale(1.02);
        }

        /* Quantity input styling */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }
      </style>
    `;
  } catch (error) {
    return `
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
        <div class="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-red-200 dark:border-red-800 max-w-md">
          <div class="text-6xl mb-4">😕</div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Product Not Found</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <a href="#/products" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Products
          </a>
        </div>
      </div>
    `;
  }
}