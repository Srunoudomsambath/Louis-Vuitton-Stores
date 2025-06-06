import type { Product } from "../types/product"
import { fetchAllProducts } from "../service/api"
import { SkeletonUI } from "../components/skeleton"

// Modern skeleton builder with enhanced TypeScript patterns
class SkeletonBuilder {
  private static allProducts: Product[] = []
  private static searchTimeout: NodeJS.Timeout | null = null


  static showSkeletonThenProducts(container: HTMLElement): void {
  container.style.opacity = "0";
  container.innerHTML = SkeletonUI.buildSkeletonHTML();
  container.style.transition = "opacity 0.3s ease-in-out";
  container.style.opacity = "1";

  this.renderProductList()
    .then((html) => {
      container.style.opacity = "0";
      setTimeout(() => {
        container.innerHTML = html;
        container.style.opacity = "1";
        this.setupProductSearch();
      }, 150);
    })
    .catch((error) => {
      console.error("Error loading products:", error);
      container.style.opacity = "0";
      setTimeout(() => {
        container.innerHTML = this.buildErrorHTML();
        container.style.opacity = "1";
      }, 150);
    });
}

  // Enhanced error state with better UX
  private static buildErrorHTML(): string {
    return `
      <section class="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-red-900/10 dark:to-gray-900 py-12">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 border border-red-100 dark:border-red-900/20">
            <!-- Error icon -->
            <div class="w-24 h-24 mx-auto mb-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We couldn't load the products right now. This might be a temporary issue.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onclick="location.reload()" 
                class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Try Again
              </button>
              <button 
                onclick="history.back()" 
                class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    `
  }

  // Enhanced product list with modern design
private static buildProductListHTML(products: Product[]): string {
  return `
    <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Section -->
        <section class="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mb-16 rounded-3xl shadow-xl">
          <div class="absolute inset-0">
            <img 
              src="https://img.freepik.com/premium-photo/luxury-store-with-men-clothing_355018-4250.jpg"
              alt="Store Background"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>

          <!-- Floating Blurs -->
          <div class="absolute inset-0">
            <div class="absolute top-10 right-10 w-40 md:w-60 h-40 md:h-60 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-10 w-60 md:w-96 h-60 md:h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
          </div>

          <!-- Hero Content -->
          <div class="relative z-10 flex h-full items-center justify-center text-center px-4 sm:px-8">
            <div class="max-w-3xl">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Discover 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stylish Living</span>
            </h1>
              <!-- Search -->
              <div class="relative group max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 200ms">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition duration-500"></div>

                <div class="relative flex items-center bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl px-4 py-2 shadow-xl ring-1 ring-black/5">
                  <div class="absolute left-4">
                    <svg class="w-5 h-5 text-gray-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <input 
                    type="text" 
                    id="searchInput" 
                   placeholder="Search for outfits, brands, or trends..."

                    class="w-full pl-12 pr-28 py-2 text-base sm:text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-2xl"
                  >

                  <button 
                    id="searchButton"
                    class="absolute right-2 sm:right-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white text-sm sm:text-base rounded-xl shadow-md hover:scale-105 transition"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Product Grid -->
        <div id="productGrid">
          ${this.renderProductCards(products)}
        </div>
      </div>
    </section>
  `;
}


  // Modern product cards with enhanced styling
  private static renderProductCards(products: Product[]): string {
    if (products.length === 0) {
      return `
        <div class="text-center py-20 ">
          <div class="w-32 h-32 mx-auto mb-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469-.935-6.03-2.455M16 2H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">No products found</h3>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8">Try adjusting your search terms or browse our categories.</p>
          <button 
            onclick="document.getElementById('searchInput').value = ''; document.getElementById('searchInput').dispatchEvent(new Event('input'))"
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Clear Search
          </button>
        </div>
      `
    }

    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        ${products
          .map(
            (product, index) => `
          <article 
            data-id="${product.id}" 
            class="group relative cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 animate-fade-in"
            style="animation-delay: ${index * 50}ms"
          >
            <!-- Premium/Featured Badge -->
            ${
              product.rating && product.rating.rate >= 4.5
                ? `
              <div class="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                <span class="flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Premium
                </span>
              </div>
            `
                : ""
            }
            
            <!-- Image Container -->
            <div class="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-6 overflow-hidden">
              <img 
                src="${product.image}" 
                alt="${product.title}" 
                class="max-h-full max-w-full rounded-2xl object-contain transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'currentColor\\'%3E%3Cpath strokeLinecap=\\'round\\' strokeLinejoin=\\'round\\' strokeWidth=\\'2\\' d=\\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\'/%3E%3C/svg%3E'"
              />
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
            
            <!-- Content Section -->
            <div class="p-6 space-y-4">
              <!-- Category Badge -->
              <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 uppercase tracking-wider">
                ${product.category}
              </div>
              
              <!-- Title -->
              <h3 class="font-bold text-gray-900 dark:text-white text-lg leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                ${product.title}
              </h3>

              <!-- Rating -->
              ${
                product.rating
                  ? `
                <div class="flex items-center gap-2">
                  <div class="flex items-center">
                    ${Array.from(
                      { length: 5 },
                      (_, i) => `
                      <svg class="w-4 h-4 ${i < Math.floor(product.rating!.rate) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    `,
                    ).join("")}
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    ${product.rating.rate.toFixed(1)} (${product.rating.count})
                  </span>
                </div>
              `
                  : ""
              }
            
              <!-- Price and Action -->
              <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div class="space-y-1">
                  <div class="text-2xl font-bold text-gray-900 dark:text-white">
                    $${product.price.toFixed(2)}
                  </div>
                  <div class="text-sm text-green-600 dark:text-green-400 font-medium">
                    Free shipping
                  </div>
                </div>
                
               <button 
  class="bg-gradient-to-r from-blue-600 to-purple-600 
         hover:from-purple-600 hover:to-blue-600 
         text-white font-semibold 
         text-sm sm:text-base lg:text-sm 
         px-4 sm:px-5 lg:px-4 
         py-2 sm:py-2.5 lg:py-2 
         rounded-xl shadow-md 
         transition-all duration-300 
         transform hover:scale-105"
>
  Add to Cart
</button>

              </div>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
    `
  }

  // Main render function with error handling
  static async renderProductList(): Promise<string> {
    try {
      this.allProducts = await fetchAllProducts()
      return this.buildProductListHTML(this.allProducts)
    } catch (error) {
      console.error("Error fetching products:", error)
      return this.buildErrorHTML()
    }
  }
  // Enhanced search with better performance and UX
  static setupProductSearch(): void {
    const input = document.getElementById("searchInput") as HTMLInputElement
    const grid = document.getElementById("productGrid")
    const resultsCount = document.getElementById("resultsCount")

    if (!input || !grid) return

    // Enhanced debounced search with loading states
    input.addEventListener("input", () => {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }

      // Show loading state
      grid.style.opacity = "0.6"
      grid.style.pointerEvents = "none"

      this.searchTimeout = setTimeout(() => {
        const query = input.value.toLowerCase().trim()
        const filtered = query
          ? this.allProducts.filter(
              (product) =>
                product.title.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.description?.toLowerCase().includes(query),
            )
          : this.allProducts

        // Update results
        grid.innerHTML = this.renderProductCards(filtered)
        if (resultsCount) {
          resultsCount.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`
        }

        // Restore interactivity
        grid.style.opacity = "1"
        grid.style.pointerEvents = "auto"

        this.setupProductCardListeners()
      }, 300)
    })

    // Setup initial card listeners
    this.setupProductCardListeners()

    // Add keyboard navigation
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = ""
        input.dispatchEvent(new Event("input"))
        input.blur()
      }
    })
  }

  // Enhanced click handlers with better navigation
  private static setupProductCardListeners(): void {
    document.querySelectorAll("[data-id]").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Prevent navigation if clicking on button
        if ((e.target as HTMLElement).closest("button")) {
          e.stopPropagation()
          return
        }

        const id = card.getAttribute("data-id")
        if (id) {
          // Add loading state
          card.classList.add("opacity-75", "pointer-events-none")

          // Navigate with smooth transition
          setTimeout(() => {
            location.hash = `#/product/${id}`
          }, 150)
        }
      })

    
    })
  }
}

// Export the class methods as the original function interface
export const renderProductList = SkeletonBuilder.renderProductList.bind(SkeletonBuilder)
export const showSkeletonThenProducts = SkeletonBuilder.showSkeletonThenProducts.bind(SkeletonBuilder)
export const setupProductSearch = SkeletonBuilder.setupProductSearch.bind(SkeletonBuilder)
