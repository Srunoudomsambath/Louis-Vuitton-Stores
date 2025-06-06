import { toggleDarkMode, isDarkMode, watchSystemTheme } from "../utils/Darkmode";

export function Navbar(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className = `
    fixed top-0 left-0 right-0 z-50 
    bg-white/70 dark:bg-gray-900/70 
    backdrop-blur-xl backdrop-saturate-150
    border-b border-gray-200/20 dark:border-gray-700/20
    shadow-sm shadow-gray-900/5 dark:shadow-gray-100/5
    transition-all duration-500 ease-out
  `.trim().replace(/\s+/g, ' ');

  const container = document.createElement("div");
  container.className = "max-w-6xl mx-auto px-6 lg:px-8";

  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center justify-between h-20";

  // Left section with logo and links
  const leftSection = document.createElement("div");
  leftSection.className = "flex items-center space-x-12";

  // Enhanced brand section
  const brand = document.createElement("a");
  brand.href = "#/";
  brand.className = `
    flex items-center space-x-3 group
    hover:scale-[1.02] active:scale-[0.98]
    transition-all duration-300 ease-out
  `.trim().replace(/\s+/g, ' ');

  const logoContainer = document.createElement("div");
  logoContainer.className = `
    relative overflow-hidden rounded-xl p-2
    bg-gradient-to-br from-blue-500/10 to-purple-500/10
    group-hover:from-blue-500/20 group-hover:to-purple-500/20
    dark:from-blue-400/10 dark:to-purple-400/10
    dark:group-hover:from-blue-400/20 dark:group-hover:to-purple-400/20
    transition-all duration-300
  `.trim().replace(/\s+/g, ' ');

  const logoImg = document.createElement("img");
  logoImg.src="https://i.imgur.com/tm3ogGy.png"
  logoImg.alt = "Louis Vuitton";
  logoImg.className = "h-8 w-8 object-contain";

  logoImg.onerror = () => {
    const fallbackIcon = document.createElement("div");
    fallbackIcon.className = `
      h-8 w-8 rounded-lg flex items-center justify-center
      bg-gradient-to-br from-blue-600 to-purple-600
      text-white font-bold text-sm
    `.trim().replace(/\s+/g, ' ');
    fallbackIcon.textContent = "LV";
    logoContainer.replaceChild(fallbackIcon, logoImg);
  };

  const brandText = document.createElement("div");
  brandText.className = "flex flex-col";

  const brandName = document.createElement("span");
  brandName.textContent = "Louis Vuitton";
  brandName.className = `
    text-lg font-bold tracking-tight
    bg-gradient-to-r from-gray-900 to-gray-700
    dark:from-white dark:to-gray-300
    bg-clip-text text-transparent
  `.trim().replace(/\s+/g, ' ');

  const brandTagline = document.createElement("span");
  brandTagline.textContent = "Premium Collection";
  brandTagline.className = `
    text-xs font-medium text-gray-500 dark:text-gray-400
    -mt-1 transition-colors duration-300
  `.trim().replace(/\s+/g, ' ');

  logoContainer.appendChild(logoImg);
  brandText.appendChild(brandName);
  brandText.appendChild(brandTagline);
  brand.appendChild(logoContainer);
  brand.appendChild(brandText);

  // Enhanced navigation links
  const navLinks = document.createElement("div");
  navLinks.className = "hidden lg:flex items-center space-x-2";

  const createNavLink = (href: string, text: string, isActive = false) => {
    const linkWrapper = document.createElement("div");
    linkWrapper.className = "relative";

    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.className = `
      relative px-5 py-2.5 rounded-xl font-medium text-sm
      transition-all duration-300 ease-out group
      ${isActive 
        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/30' 
        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
      }
      hover:bg-gray-50/80 dark:hover:bg-gray-800/50
      focus:outline-none focus:ring-2 focus:ring-blue-500/20
    `.trim().replace(/\s+/g, ' ');

    // Animated underline
    const underline = document.createElement("div");
    underline.className = `
      absolute bottom-0 left-1/2 transform -translate-x-1/2
      h-0.5 bg-gradient-to-r from-blue-600 to-purple-600
      dark:from-blue-400 dark:to-purple-400 rounded-full
      transition-all duration-300 ease-out
      ${isActive ? 'w-8' : 'w-0 group-hover:w-6'}
    `.trim().replace(/\s+/g, ' ');

    link.appendChild(underline);
    linkWrapper.appendChild(link);
    return linkWrapper;
  };

  // Right section with theme toggle and mobile menu
  const rightSection = document.createElement("div");
  rightSection.className = "flex items-center space-x-4";

  // Enhanced theme toggle
  const themeToggle = document.createElement("button");
  themeToggle.className = `
    relative p-3 rounded-xl
    bg-gray-100/80 dark:bg-gray-800/80
    hover:bg-gray-200/80 dark:hover:bg-gray-700/80
    active:scale-95 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    group overflow-hidden
  `.trim().replace(/\s+/g, ' ');

  const themeIconContainer = document.createElement("div");
  themeIconContainer.className = "w-5 h-5 relative";

  const sunIcon = document.createElement("div");
  sunIcon.innerHTML = `
    <svg class="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
    </svg>
  `;
  sunIcon.className = "absolute inset-0 transition-all duration-500 ease-out";

  const moonIcon = document.createElement("div");
  moonIcon.innerHTML = `
    <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  `;
  moonIcon.className = "absolute inset-0 transition-all duration-500 ease-out";

  themeIconContainer.appendChild(sunIcon);
  themeIconContainer.appendChild(moonIcon);
  themeToggle.appendChild(themeIconContainer);

  // Mobile menu button
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = `
    lg:hidden relative p-3 rounded-xl
    bg-gray-100/80 dark:bg-gray-800/80
    hover:bg-gray-200/80 dark:hover:bg-gray-700/80
    active:scale-95 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
  `.trim().replace(/\s+/g, ' ');

  const menuIcon = document.createElement("div");
  menuIcon.className = "w-6 h-6 flex flex-col justify-center space-y-1.5";

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.className = `
      h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full
      transition-all duration-300 ease-out
      ${i === 0 ? 'w-6' : i === 1 ? 'w-4' : 'w-5'}
    `.trim().replace(/\s+/g, ' ');
    menuIcon.appendChild(line);
  }

  mobileMenuBtn.appendChild(menuIcon);

  // Mobile menu overlay
  const mobileMenuOverlay = document.createElement("div");
  mobileMenuOverlay.className = `
    lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/40
    backdrop-blur-sm opacity-0 invisible
    transition-all duration-300 ease-out
  `.trim().replace(/\s+/g, ' ');

  // Mobile menu panel
  const mobileMenuPanel = document.createElement("div");
  mobileMenuPanel.className = `
    fixed top-0 right-0 h-full w-80 max-w-[85vw]
    bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
    border-l border-gray-200/30 dark:border-gray-700/30
    shadow-2xl shadow-gray-900/10 dark:shadow-black/20
    transform translate-x-full transition-transform duration-300 ease-out
    flex flex-col
  `.trim().replace(/\s+/g, ' ');

  const mobileMenuHeader = document.createElement("div");
  mobileMenuHeader.className = `
    flex items-center justify-between p-6
    border-b border-gray-200/30 dark:border-gray-700/30
  `.trim().replace(/\s+/g, ' ');

  const mobileMenuTitle = document.createElement("h3");
  mobileMenuTitle.textContent = "Navigation";
  mobileMenuTitle.className = "text-lg font-semibold text-gray-900 dark:text-white";

  const closeBtn = document.createElement("button");
  closeBtn.className = `
    p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
    transition-colors duration-200
  `.trim().replace(/\s+/g, ' ');
  closeBtn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  `;

  const mobileMenuContent = document.createElement("div");
  mobileMenuContent.className = "flex-1 p-6 space-y-2";

  const createMobileNavLink = (href: string, text: string) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.className = `
      block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300
      hover:bg-gray-100/80 dark:hover:bg-gray-800/50
      hover:text-blue-600 dark:hover:text-blue-400
      transition-all duration-200 font-medium
    `.trim().replace(/\s+/g, ' ');
    return link;
  };

  // State management
  let isMobileMenuOpen = false;
  let currentPath = window.location.hash || '#/';

  const updateActiveStates = () => {
    const links = navLinks.querySelectorAll('a');
    const mobileLinks = mobileMenuContent.querySelectorAll('a');
    
    [...links, ...mobileLinks].forEach(link => {
      const isActive = link.getAttribute('href') === currentPath;
      if (link.parentElement?.parentElement === navLinks) {
        // Desktop link
        link.className = link.className.replace(
          /text-blue-600.*?bg-blue-950\/30|text-gray-700.*?hover:text-blue-600/g,
          isActive 
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/30'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        );
        const underline = link.querySelector('div');
        if (underline) {
          underline.className = underline.className.replace(
            /w-8|w-0 group-hover:w-6/g,
            isActive ? 'w-8' : 'w-0 group-hover:w-6'
          );
        }
      }
    });
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
      mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
      mobileMenuPanel.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
      
      // Animate menu icon to X
      const lines = menuIcon.children;
      (lines[0] as HTMLElement).style.transform = 'rotate(45deg) translateY(6px)';
      (lines[1] as HTMLElement).style.opacity = '0';
      (lines[2] as HTMLElement).style.transform = 'rotate(-45deg) translateY(-6px)';
    } else {
      mobileMenuOverlay.classList.add('opacity-0', 'invisible');
      mobileMenuPanel.classList.add('translate-x-full');
      document.body.style.overflow = '';
      
      // Reset menu icon
      const lines = menuIcon.children;
      (lines[0] as HTMLElement).style.transform = '';
      (lines[1] as HTMLElement).style.opacity = '';
      (lines[2] as HTMLElement).style.transform = '';
    }
  };

  const updateThemeToggle = (isDark: boolean) => {
    sunIcon.style.transform = isDark ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)';
    moonIcon.style.transform = isDark ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)';
  };

  // Event listeners
  themeToggle.addEventListener('click', () => {
    const isDark = toggleDarkMode();
    updateThemeToggle(isDark);
  });

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  closeBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  // Navigation links
  const navLinksData = [
    { href: '#/', text: 'Home' },
    { href: '#/products', text: 'Products' },
    { href: '#/about', text: 'About' }
  ];

  navLinksData.forEach(({ href, text }) => {
    const isActive = href === currentPath;
    navLinks.appendChild(createNavLink(href, text, isActive));
    mobileMenuContent.appendChild(createMobileNavLink(href, text));
  });

  // Listen for route changes
  window.addEventListener('hashchange', () => {
    currentPath = window.location.hash || '#/';
    updateActiveStates();
  });

  // Assembly
  leftSection.appendChild(brand);
  leftSection.appendChild(navLinks);

  rightSection.appendChild(themeToggle);
  rightSection.appendChild(mobileMenuBtn);

  wrapper.appendChild(leftSection);
  wrapper.appendChild(rightSection);
  container.appendChild(wrapper);
  nav.appendChild(container);

  mobileMenuHeader.appendChild(mobileMenuTitle);
  mobileMenuHeader.appendChild(closeBtn);
  mobileMenuPanel.appendChild(mobileMenuHeader);
  mobileMenuPanel.appendChild(mobileMenuContent);
  mobileMenuOverlay.appendChild(mobileMenuPanel);
  nav.appendChild(mobileMenuOverlay);

  // Initialize theme
  updateThemeToggle(isDarkMode());
  updateActiveStates();

  // Watch system theme changes
  const cleanup = watchSystemTheme((isDark) => {
    updateThemeToggle(isDark);
  });

  (nav as any)._darkModeCleanup = cleanup;

  return nav;
}