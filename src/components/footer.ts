export function Footer(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'relative bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto';

  // Container for better responsive layout
  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';

  // Main content grid
  const contentGrid = document.createElement('div');
  contentGrid.className = 'grid grid-cols-1 md:grid-cols-4 gap-8 mb-8';

  // Company info section
  const companySection = document.createElement('div');
  companySection.className = 'md:col-span-2';
  
  const brandName = document.createElement('h3');
  brandName.className = 'text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4';
  brandName.textContent = 'Louis Vuitton';

  const description = document.createElement('p');
  description.className = 'text-gray-600 dark:text-gray-400 mb-4 max-w-md leading-relaxed';
  description.textContent = 'Delivering exceptional products and experiences with modern technology and innovative design.';

  // Social links
  const socialContainer = document.createElement('div');
  socialContainer.className = 'flex space-x-4';

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ];

  socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.href = social.href;
    link.className = 'w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1';
    link.innerHTML = social.icon;
    link.setAttribute('aria-label', social.name);
    socialContainer.appendChild(link);
  });

  // Quick links section
  const quickLinksSection = document.createElement('div');
  quickLinksSection.innerHTML = `
    <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
    <ul class="space-y-2">
      <li><a href="#/" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</a></li>
      <li><a href="#/products" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Products</a></li>
      <li><a href="#/about" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</a></li>
    </ul>
  `;

  // Support section
  const supportSection = document.createElement('div');
  supportSection.innerHTML = `
    <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
    <ul class="space-y-2">
      <li><a href="#/help" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
      <li><a href="#/privacy" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
      <li><a href="#/terms" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
      <li><a href="#/cookies" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Cookie Policy</a></li>
    </ul>
  `;

  // Bottom section with copyright and tech stack
  const bottomSection = document.createElement('div');
  bottomSection.className = 'border-t border-gray-200/50 dark:border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0';

  const copyrightText = document.createElement('p');
  copyrightText.className = 'text-sm text-gray-600 dark:text-gray-400';
  copyrightText.innerHTML = `&copy; ${new Date().getFullYear()} My Store. All rights reserved.`;

 

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-4 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';
  backToTopBtn.innerHTML = `
    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  backToTopBtn.setAttribute('aria-label', 'Back to top');

  // Show/hide back to top button based on scroll
  const toggleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.transform = 'translateY(0)';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.transform = 'translateY(1rem)';
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Newsletter signup section
  const newsletterSection = document.createElement('div');
  newsletterSection.className = 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8 border border-blue-100 dark:border-blue-800/50';
  
  const newsletterTitle = document.createElement('h4');
  newsletterTitle.className = 'font-semibold text-gray-900 dark:text-white mb-2 text-center';
  newsletterTitle.textContent = 'Stay Updated';

  const newsletterDesc = document.createElement('p');
  newsletterDesc.className = 'text-sm text-gray-600 dark:text-gray-400 text-center mb-4';
  newsletterDesc.textContent = 'Get the latest updates and exclusive offers delivered to your inbox.';

  const newsletterForm = document.createElement('div');
  newsletterForm.className = 'flex flex-col sm:flex-row gap-3 max-w-md mx-auto';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Enter your email';
  emailInput.className = 'flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200';

  const subscribeBtn = document.createElement('button');
  subscribeBtn.textContent = 'Subscribe';
  subscribeBtn.className = 'px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

  subscribeBtn.addEventListener('click', () => {
    if (emailInput.value) {
      subscribeBtn.textContent = 'Subscribed! ✓';
      subscribeBtn.className = subscribeBtn.className.replace('from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700', 'from-green-600 to-green-600 hover:from-green-700 hover:to-green-700');
      emailInput.value = '';
      setTimeout(() => {
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.className = subscribeBtn.className.replace('from-green-600 to-green-600 hover:from-green-700 hover:to-green-700', 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700');
      }, 2000);
    }
  });

  // Assemble the footer
  companySection.appendChild(brandName);
  companySection.appendChild(description);
  companySection.appendChild(socialContainer);

  contentGrid.appendChild(companySection);
  contentGrid.appendChild(quickLinksSection);
  contentGrid.appendChild(supportSection);

  newsletterForm.appendChild(emailInput);
  newsletterForm.appendChild(subscribeBtn);
  newsletterSection.appendChild(newsletterTitle);
  newsletterSection.appendChild(newsletterDesc);
  newsletterSection.appendChild(newsletterForm);

  bottomSection.appendChild(copyrightText);

  container.appendChild(newsletterSection);
  container.appendChild(contentGrid);
  container.appendChild(bottomSection);

  footer.appendChild(container);
  footer.appendChild(backToTopBtn);

  return footer;
}