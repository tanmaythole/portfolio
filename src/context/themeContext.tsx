import React, { createContext } from "react";

export const ThemeContext = createContext("light");

type Props = React.PropsWithChildren & {
  value: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const ThemeProvider = ({children, value}: Props) => (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
