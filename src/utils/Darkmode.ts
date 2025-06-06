// Dark mode utility functions for theme management
// Handles theme detection, toggling, persistence, and system theme watching

type ThemePreference = 'light' | 'dark' | 'system';
type ThemeChangeCallback = (isDark: boolean) => void;

const THEME_STORAGE_KEY = 'theme-preference';
const DARK_CLASS = 'dark';

// Store active listeners for cleanup
const themeListeners = new Set<ThemeChangeCallback>();
let systemThemeQuery: MediaQueryList | null = null;

/**
 * Get the current system theme preference
 */
function getSystemTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Get the stored theme preference from localStorage
 */
function getStoredTheme(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read theme preference from localStorage:', error);
  }
  return 'system'; // Default to system preference
}

/**
 * Store theme preference in localStorage
 */
function setStoredTheme(theme: ThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to store theme preference:', error);
  }
}

/**
 * Apply the dark mode class to the document
 */
function applyTheme(isDark: boolean): void {
  const htmlElement = document.documentElement;
  
  if (isDark) {
    htmlElement.classList.add(DARK_CLASS);
  } else {
    htmlElement.classList.remove(DARK_CLASS);
  }
  
  // Update meta theme-color for mobile browsers
  updateMetaThemeColor(isDark);
}

/**
 * Update the meta theme-color tag for mobile browser chrome
 */
function updateMetaThemeColor(isDark: boolean): void {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  
  // Set appropriate theme colors
  const lightColor = '#ffffff';
  const darkColor = '#111827'; // gray-900
  
  metaThemeColor.setAttribute('content', isDark ? darkColor : lightColor);
}

/**
 * Determine if dark mode should be active based on current preference
 */
function shouldUseDarkMode(preference: ThemePreference = getStoredTheme()): boolean {
  switch (preference) {
    case 'dark':
      return true;
    case 'light':
      return false;
    case 'system':
    default:
      return getSystemTheme();
  }
}

/**
 * Check if dark mode is currently active
 */
export function isDarkMode(): boolean {
  return document.documentElement.classList.contains(DARK_CLASS);
}

/**
 * Get the current theme preference
 */
export function getCurrentTheme(): ThemePreference {
  return getStoredTheme();
}

/**
 * Toggle between light and dark mode
 * Returns the new dark mode state
 */
export function toggleDarkMode(): boolean {
  const currentPreference = getStoredTheme();
  let newPreference: ThemePreference;
  
  // Cycle through: system -> light -> dark -> system
  if (currentPreference === 'system') {
    newPreference = getSystemTheme() ? 'light' : 'dark';
  } else if (currentPreference === 'light') {
    newPreference = 'dark';
  } else {
    newPreference = 'system';
  }
  
  setTheme(newPreference);
  return isDarkMode();
}

/**
 * Set a specific theme preference
 */
export function setTheme(theme: ThemePreference): void {
  setStoredTheme(theme);
  const isDark = shouldUseDarkMode(theme);
  applyTheme(isDark);
  
  // Notify all listeners
  themeListeners.forEach(callback => {
    try {
      callback(isDark);
    } catch (error) {
      console.error('Theme change callback error:', error);
    }
  });
}

/**
 * Initialize dark mode on page load
 * Call this when your app starts
 */
export function initializeDarkMode(): void {
  const preference = getStoredTheme();
  const isDark = shouldUseDarkMode(preference);
  applyTheme(isDark);
  
  // Set up system theme monitoring
  setupSystemThemeWatcher();
  
  // Notify listeners of initial state
  themeListeners.forEach(callback => {
    try {
      callback(isDark);
    } catch (error) {
      console.error('Theme initialization callback error:', error);
    }
  });
}

/**
 * Watch for system theme changes
 * Returns a cleanup function to remove the listener
 */
export function watchSystemTheme(callback: ThemeChangeCallback): () => void {
  themeListeners.add(callback);
  
  // Return cleanup function
  return () => {
    themeListeners.delete(callback);
  };
}

/**
 * Set up system theme change detection
 */
function setupSystemThemeWatcher(): void {
  if (systemThemeQuery) {
    return; // Already set up
  }
  
  systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    // Only apply system theme if user preference is set to 'system'
    if (getStoredTheme() === 'system') {
      applyTheme(e.matches);
      
      // Notify listeners
      themeListeners.forEach(callback => {
        try {
          callback(e.matches);
        } catch (error) {
          console.error('System theme change callback error:', error);
        }
      });
    }
  };
  
  // Use the newer addEventListener if available, fallback to addListener
  if (systemThemeQuery.addEventListener) {
    systemThemeQuery.addEventListener('change', handleSystemThemeChange);
  } else {
    // Fallback for older browsers
    systemThemeQuery.addListener(handleSystemThemeChange);
  }
}

/**
 * Clean up all theme listeners and watchers
 * Call this when your app is being destroyed
 */
export function cleanupDarkMode(): void {
  themeListeners.clear();
  
  if (systemThemeQuery) {
    // Remove system theme listener
    if (systemThemeQuery.removeEventListener) {
      systemThemeQuery.removeEventListener('change', () => {});
    } else {
      // Fallback for older browsers
      systemThemeQuery.removeListener(() => {});
    }
    systemThemeQuery = null;
  }
}

/**
 * Get theme information for debugging
 */
export function getThemeDebugInfo(): {
  currentPreference: ThemePreference;
  systemPreference: boolean;
  isDarkActive: boolean;
  listenerCount: number;
} {
  return {
    currentPreference: getStoredTheme(),
    systemPreference: getSystemTheme(),
    isDarkActive: isDarkMode(),
    listenerCount: themeListeners.size
  };
}

// Auto-initialize when module is imported (optional)
// Comment out if you prefer manual initialization
if (typeof document !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDarkMode);
  } else {
    initializeDarkMode();
  }
}