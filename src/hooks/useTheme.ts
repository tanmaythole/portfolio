import { useCallback, useContext } from "react";

import { ThemeContext } from "../context/themeContext";

const useTheme = () => {
  const theme = useContext(ThemeContext);

  const changeTheme = useCallback(() => {
    const updatedTheme = theme?.[0] === "dark" ? "light" : "dark";
    localStorage.setItem("theme", updatedTheme);
    document.documentElement.setAttribute('data-bs-theme', updatedTheme);
    theme?.[1]?.(updatedTheme)
  }, [theme]);

  return {
    theme: theme?.[0],
    isDarkTheme: theme?.[0] === "dark",
    changeTheme,
  }
};

export default useTheme;
