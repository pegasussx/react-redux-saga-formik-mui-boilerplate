import { COLORS_LIGHT_MODE } from './theme-colors';

/**
 * Define Theme Config Values
 */
export const BREAK_POINTS: object = {
  breakpoints: {
    values: {
      ls: 360,
      xs: 390,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1366,
      mobile: 450,
      tablet: 640,
      laptop: 890,
      desktop: 1200,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body2: 'span',
        },
      },
    },
  },
};

// Light Theme
export const LIGHT_THEME: object = {
  ...BREAK_POINTS,
  palette: {
    mode: 'light',
    ...COLORS_LIGHT_MODE,
  },
};
