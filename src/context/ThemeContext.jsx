import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for theme management
export const ThemeContext = createContext();

// Custom hook to easily access theme values and functions
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check if user previously set a theme preference
  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Add or remove the 'dark' class from the document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Provide theme state and toggle function to all children
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 