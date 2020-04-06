import { createTheme } from 'hacker-ui';

const theme = createTheme({
  // you can customize the there here.
  // your customizations will be merged with default theme
});

// export the theme's type so it's available to you later
export type Theme = typeof theme;

export default theme;