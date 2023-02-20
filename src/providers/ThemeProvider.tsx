import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { type Theme, type ThemeOptions } from '@mui/material/styles';

import { LIGHT_THEME } from 'config/theme.config';

/**
 * Material UI theme for Light and Dark modes
 */
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    ls: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  export function createTheme(options?: ThemeOptions): Theme;
}

// Define Theme Provider
interface Props {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
  const theme = createTheme(LIGHT_THEME);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /* Material UI Styles */ />
      {children}
    </ThemeProvider>
  );
};
