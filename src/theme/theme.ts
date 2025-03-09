import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#231f20',
  secondary: '#ffb634',
  secondaryLighter: '#FFDA99',
  background: '#ffffff',
  textPrimary: '#231f20',
  textSecondary: '#f6fdff',
  footer: '#231f20',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background,
        },
      },
    },
  },
});

export { theme, colors };
