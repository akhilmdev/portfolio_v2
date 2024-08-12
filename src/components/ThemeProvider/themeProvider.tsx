import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material/styles";
import { ThemeKey, ThemeMapper } from "../../config/themeConfig";

const ThemeContext = createContext<{
  currentTheme: Theme;
  setTheme: (themeName: ThemeKey) => void;
}>({
  currentTheme: ThemeMapper.light, // default theme
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeKey>("light");

  const setTheme = (name: ThemeKey) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme: ThemeMapper[themeName], setTheme }}
    >
      <MuiThemeProvider theme={ThemeMapper[themeName]}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
