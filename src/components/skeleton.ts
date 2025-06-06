export class SkeletonUI {
  static buildSkeletonHTML(): string {
    const skeletonCards = Array.from({ length: 12 }, (_, index) => `
      <div 
        class="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500"
        style="animation-delay: ${index * 50}ms"
      >
        <div class="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse-slow">
          <div class="w-full h-full flex items-center justify-center">
            <div class="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
        <div class="p-6 space-y-4">
          <div class="w-20 h-5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-full animate-pulse-slow"></div>
          <div class="space-y-2">
            <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse-slow"></div>
            <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg w-4/5 animate-pulse-slow"></div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="flex space-x-1">
              ${Array.from({ length: 5 }, () => `
                <div class="w-4 h-4 bg-yellow-200 dark:bg-yellow-800 rounded animate-pulse-slow"></div>
              `).join("")}
            </div>
            <div class="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow"></div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div class="space-y-1">
              <div class="w-16 h-6 bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-700 rounded-lg animate-pulse-slow"></div>
              <div class="w-12 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse-slow"></div>
            </div>
            <div class="w-28 h-10 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    `).join("");

    return `
      <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="w-64 h-10 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-2xl mx-auto mb-4 animate-pulse-slow"></div>
            <div class="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto animate-pulse-slow"></div>
          </div>
          <div class="max-w-md mx-auto mb-12">
            <div class="relative">
              <div class="w-full h-14 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm animate-pulse-slow"></div>
              <div class="absolute left-4 top-4 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 justify-center mb-12">
            ${Array.from({ length: 6 }, (_, i) => `
              <div class="w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse-slow" style="animation-delay: ${i * 100}ms"></div>
            `).join("")}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            ${skeletonCards}
          </div>
        </div>
      </section>
      ${this.getSkeletonStyles()}
    `;
  }

  static buildMinimalSkeletonHTML(): string {
    return `
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${Array.from({ length: 8 }, (_, index) => `
            <div 
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 animate-fade-in"
              style="animation-delay: ${index * 75}ms"
            >
              <div class="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 animate-pulse-slow"></div>
              <div class="space-y-3">
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse-slow"></div>
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 animate-pulse-slow"></div>
              </div>
              <div class="mt-6 flex justify-between items-center">
                <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-20 animate-pulse-slow"></div>
                <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl w-28 animate-pulse-slow"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  private static getSkeletonStyles(): string {
    return `
      <style>
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .dark ::-webkit-scrollbar-track { background: #1e293b; }
        .dark ::-webkit-scrollbar-thumb { background: #475569; }
        .dark ::-webkit-scrollbar-thumb:hover { background: #64748b; }
      </style>
    `;
  }
}
