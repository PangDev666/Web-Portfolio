'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ isDarkMode: false, toggleTheme: () => {} });

// Runs in <head> before hydration so the page doesn't flash light first.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle('dark', isDarkMode);
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {}
  }, [isDarkMode, ready]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
