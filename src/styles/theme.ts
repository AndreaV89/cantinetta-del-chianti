import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FDFAF6", // crema caldo
      paper: "#F8F5F0", // sezioni alternate
    },
    text: {
      primary: "#3A2E28", // marrone scuro
      secondary: "#736156", // marrone medio
    },
    primary: {
      main: "#8B1A2F", // merlot — CTA, bottoni primari
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C9A86C", // oro antico — accenti, label, divider
      contrastText: "#3A2E28",
    },
    divider: "#E0D8CE", // bordo sottile
  },

  typography: {
    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',

    h1: {
      fontFamily: '"Apple Chancery", Palatino, "Palatino Linotype", serif',
      fontWeight: 400,
      fontSize: "4.5rem", // 72px
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Apple Chancery", Palatino, "Palatino Linotype", serif',
      fontWeight: 400,
      fontSize: "2.75rem", // 44px
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: '"Apple Chancery", Palatino, "Palatino Linotype", serif',
      fontWeight: 400,
      fontSize: "1.5rem", // 24px
      lineHeight: 1.35,
    },
    h4: {
      fontFamily: '"Apple Chancery", Palatino, "Palatino Linotype", serif',
      fontWeight: 400,
      fontSize: "1.25rem", // 20px
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 300,
      fontSize: "1.0625rem", // 17px
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 300,
      fontSize: "0.9375rem", // 15px
      lineHeight: 1.75,
    },
    caption: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: "0.6875rem", // 11px
      letterSpacing: "0.15em",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      fontSize: "0.75rem", // 12px
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },

  shape: {
    borderRadius: 2,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "12px 28px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#8B1A2F",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#7a1728",
          },
        },
        outlined: {
          borderColor: "rgba(58, 46, 40, 0.35)",
          color: "#3A2E28",
          "&:hover": {
            borderColor: "#3A2E28",
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #FDFAF6;
    color: #3A2E28;
    font-family: var(--font-dm-sans), "DM Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Apple Chancery", Palatino, "Palatino Linotype", serif;
  }
      `,
    },
  },
});

export default theme;
