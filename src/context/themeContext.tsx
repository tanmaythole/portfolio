import React, { createContext } from "react";

export type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = React.PropsWithChildren & {
  value: ThemeContextType;
}

export const ThemeProvider = ({children, value}: Props) => (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
