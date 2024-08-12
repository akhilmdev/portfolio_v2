import { createTheme, Theme } from "@mui/material/styles";

// Base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#F7F7F8",
    },
  },
  // Other common properties
});

const themeLight = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#F7F7F8",
    },
    // Overridden properties
  },
});

const themeDark = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#3A1078",
    },
    // Overridden properties
  },
});

const themeGreen = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#3795BD",
    },
    // Overridden properties
  },
});

export const defaultTheme = "light";
export const Themes = ["light", "dark", "green"] as const;

export type ThemeKey = (typeof Themes)[number];
export const ThemeMapper: Record<ThemeKey, Theme> = {
  light: themeLight,
  dark: themeDark,
  green: themeGreen,
};
