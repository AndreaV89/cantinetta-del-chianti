import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FEFCFB",
      paper: "#F5F0EF",
    },
    text: {
      primary: "#1E1414",
      secondary: "#5E4444",
    },
    primary: {
      main: "#6B1A28",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C4A882",
      contrastText: "#1E1414",
    },
    divider: "#E5DADA",
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
          backgroundColor: "#6B1A28",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#9E3347",
          },
        },
        outlined: {
          borderColor: "rgba(30, 20, 20, 0.35)",
          color: "#1E1414",
          "&:hover": {
            borderColor: "#1E1414",
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
    background-color: #FEFCFB;
    color: #1E1414;
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
