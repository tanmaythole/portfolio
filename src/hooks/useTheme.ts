import { useCallback, useContext } from "react";

import { ThemeContext } from "../context/themeContext";

const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = useCallback(() => {
    const updatedTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute('data-bs-theme', updatedTheme);
    setTheme?.(updatedTheme)
  }, [theme, setTheme]);

  return {
    theme,
    isDarkTheme: theme === "dark",
    changeTheme,
  }
};

export default useTheme;
