import { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';

const ThemeContext = createContext(null);

// Reducer handles the single "toggle" action
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': return { isDark: !state.isDark };
    default:       return state;
  }
};

export const ThemeProvider = ({ children }) => {
  // Read saved preference from localStorage on first render
  const [state, dispatch] = useReducer(themeReducer, {
    isDark: localStorage.getItem('theme') === 'dark',
  });

  // Apply or remove the .dark class on <html> whenever isDark changes
  useEffect(() => {
    const root = document.documentElement;
    if (state.isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [state.isDark]);

  // Stable toggle function — won't cause child re-renders
  const toggleTheme = useCallback(() => dispatch({ type: 'TOGGLE' }), []);

  // Memoized context value — only re-creates when isDark changes
  const value = useMemo(() => ({ isDark: state.isDark, toggleTheme }), [state.isDark, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
};
