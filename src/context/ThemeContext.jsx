import { createContext, useEffect ,useContext ,useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") return true;
        if (theme === "light") return false;

        return  window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() =>{
        document.documentElement.setAttribute("data-theme", isDarkMode ? 'dark' : 'light');
        localStorage.setItem("theme", isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
