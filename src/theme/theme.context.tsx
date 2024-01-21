import { Provider, createContext, useContext } from "react";
import * as styles from "./styles";

export type Theme = {
  components: ThemeComponents;
};

export type ThemeComponents = {
  Button: typeof styles.buttonStyles;
  Loader: typeof styles.loaderStyles;
  Tooltip: typeof styles.tooltipStyles;
};

const defaultTheme: Theme = {
  components: {
    Button: styles.buttonStyles,
    Loader: styles.loaderStyles,
    Tooltip: styles.tooltipStyles,
  },
};

export type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: Provider<ThemeContextType> = ThemeContext.Provider;

export const useTheme = (): Theme => {
  return useContext(ThemeContext).theme;
};

export const useComponentTheme = <C extends keyof ThemeComponents>(
  component: C
) => {
  const theme = useTheme();

  return theme.components[component];
};
