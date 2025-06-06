
export function renderHome(): string {
  
  return `
    <!-- Hero Section -->
    <section class="relative flex items-center justify-center  min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-elegant"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-luxury"></div>
      </div>
      
      <!-- Main Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ">
        
        <!-- Text Content -->
        <div class="space-y-8 animate-slide-in-left">
          <!-- Brand Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ✨ Luxury Fashion House
              </span>
              <div class="w-2 h-2 bg-indigo-500 rounded-full animate-pulse animation-delay-500"></div>
            </div>
          </div>
          
          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
              <span class="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Louvis
              </span>
              <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-text">
                Vouttom
              </span>
            </h1>
            
            <!-- Fashion Icon -->
            <div class="inline-block animate-float-rotate">
              <img 
  src="https://i.imgur.com/tm3ogGy.png"
  alt="Logo" 
  class="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300"
/>

            </div>
          </div>
          
          <!-- Subtitle -->
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-inter font-light max-w-lg">
            Discover <span class="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">timeless elegance</span> 
            meets <span class="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">contemporary style</span>
            in our curated collection
          </p>
          
          <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="#/products" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-rose-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span class="relative flex items-center gap-3">
              <span>Shop Collection</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
          </div>
        </div>
        
        <!-- Hero Image -->
          <div class="relative bg-gradient-to-br my-20 from-rose-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
          <div class="max-w-sm mx-auto">
  <img
    src="https://assets.vogue.com/photos/5f244ce1460729572e7ca93c/master/w_2560%2Cc_limit/00001-Louis-Vuitton-Mens-Resort-2021.jpg"
    alt="Hero Image"
    class="w-full h-auto rounded-2xl shadow-lg"
  />
</div>


            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Categories Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Signature Collections
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated categories designed for the modern fashion enthusiast
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Women's Collection -->
          <div class="group relative bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu">
            <div class="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 text-center">
              <img src="https://www.louisvuitton.com/images/is/image/lv/WOMEN_LV_MIRAGE_CAPUCINES_MINI_M13496_2_DII.jpg" class="w-full h-auto rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300"/>
              <h3 class="font-playfair text-2xl font-bold text-gray-800 dark:text-white mb-3">Women's Couture</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Elegant dresses, sophisticated blazers, and timeless pieces</p>
              <a href="#/products"
                class="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
              >
                Explore Collection
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
          
          <!-- Men's Collection -->
          <div class="group relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 text-center">
               <img src="https://stupiddope.com/wp-content/uploads/2024/07/https___hypebeast.com_image_2024_07_17_louis-vuitton-formal-ss25-spring-summer-2025-collection-2.jpeg" class="w-full h-auto rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300"/>
               
            <h3 class="font-playfair text-2xl font-bold text-gray-800 dark:text-white mb-3">Men's Excellence</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Premium suits, casual wear, and executive essentials</p>
              <a href="#/products"
                class="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
              >
                Explore Collection
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
          
          <!-- Accessories -->
          <div class="group relative bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 text-center">
            
             <img src="https://media.admiddleeast.com/photos/6647c50ba8585c1467ca12c3/2:3/w_852,h_1278,c_limit/louis-vuitton-frank-gehry-handbag-art-basel-miami-beach-hero.jpeg" class="w-full h-auto rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300"/>
               
              <h3 class="font-playfair text-2xl font-bold text-gray-800 dark:text-white mb-3">Luxury Accessories</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Handbags, jewelry, and statement pieces</p>
                          <a href="#/products"
                class="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
              >
                Explore Collection
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>

  

    <!-- Brand Story Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-in-left">
            <h2 class="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Louis Vuitton Legacy
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Since our founding, Louis Vuitton has been synonymous with exceptional craftsmanship, 
              timeless design, and uncompromising quality. Our atelier combines traditional 
              techniques with contemporary innovation to create pieces that transcend seasons.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Each garment tells a story of dedication, from the selection of premium fabrics 
              to the final stitch. We believe fashion is not just clothing—it's an expression 
              of confidence, elegance, and personal style.
            </p>
                    <a href="#/about"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span class="flex items-center gap-3">
              Our Story
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>

          </div>
          
          <div class="relative animate-slide-in-right">
            <div class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 shadow-2xl">
            <img src="https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--U_MA_LV_Trophy_Trunks_Shanghai_DI2.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}" alt="Brand Story Image" class="w-full h-auto rounded-2xl shadow-lg mb-6"/>
                <h3 class="font-playfair text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Award-Winning Design
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-lg">
                  Recognized globally for innovation in luxury fashion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Exceptional Service
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            We provide luxury experiences beyond just fashion
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Service 1 -->
          <div class="text-center group">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
         <img src="https://dam.mediacorp.sg/image/upload/s--_b-iedur--/c_fill,g_auto,h_622,w_830/f_auto,q_auto/louis-vuitton-e-commerce-hero.jpg?itok=wFolauWB" alt="Free Shipping" class="w-full h-auto  rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white mb-3">Free Shipping</h3>
              <p class="text-gray-600 dark:text-gray-300">Complimentary shipping on orders over $200</p>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="text-center group">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
             <img src="  https://mediapool.bmwgroup.com/cache/P9/201402/P90144148/P90144148-the-tailor-made-louis-vuitton-luggage-set-for-the-bmw-i8-made-from-carbon-fibre-small-weekender-pm-i-600px.jpg
              " alt="Free Shipping" class="w-full h-auto  rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
          
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white mb-3">Custom Tailoring</h3>
              <p class="text-gray-600 dark:text-gray-300">Perfect fit with our expert tailoring service</p>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="text-center group">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img src="https://www.papercitymag.com/wp-content/uploads/2021/08/92A1178.jpg" alt="VIP Experience" class="w-full h-auto  rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white mb-3">VIP Experience</h3>
              <p class="text-gray-600 dark:text-gray-300">Personal styling and exclusive previews</p>
            </div>
          </div>
          
          <!-- Service 4 -->
          <div class="text-center group">
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
             <img src="https://www.taipeitimes.com/images/2023/02/20/p11-230220-303.jpg" alt="Easy Returns" class="w-full h-auto  rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white mb-3">Easy Returns</h3>
              <p class="text-gray-600 dark:text-gray-300">30-day return policy with free exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <style>
      /* Advanced Animations */
      @keyframes float-elegant {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(3deg); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-2deg); }
      }
      
      @keyframes pulse-luxury {
        0%, 100% { opacity: 0.15; transform: scale(1); }
        50% { opacity: 0.25; transform: scale(1.1); }
      }
      
      @keyframes slide-in-left {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes slide-in-right {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes gradient-text {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes float-rotate {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
      }
      
      /* Animation Classes */
      .animate-float-elegant {
        animation: float-elegant 8s infinite ease-in-out;
      }
      
      .animate-float-delayed {
        animation: float-delayed 10s infinite ease-in-out;
        animation-delay: 2s;
      }
      
      .animate-pulse-luxury {
        animation: pulse-luxury 6s infinite ease-in-out;
        animation-delay: 1s;
      }
      
      .animate-slide-in-left {
        animation: slide-in-left 1s ease-out;
      }
      
      .animate-slide-in-right {
        animation: slide-in-right 1s ease-out;
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out;
      }
      
      .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradient-text 3s ease infinite;
      }
      
      .animate-float-rotate {
        animation: float-rotate 4s ease-in-out infinite;
      }
      
      .animation-delay-500 {
        animation-delay: 0.5s;
      }
      
      /* Performance optimizations */
      .transform-gpu {
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Responsive optimizations */
      @media (max-width: 640px) {
        .animate-float-elegant, .animate-float-delayed, .animate-pulse-luxury {
          display: none;
        }
      }
      
      /* Dark mode enhancements */
      @media (prefers-color-scheme: dark) {
        .animate-float-elegant, .animate-float-delayed, .animate-pulse-luxury {
          opacity: 0.6;
        }
      }
    </style>
  `;
}