import { createTheme } from "@material-ui/core/styles";

const fonts = {
  h1: {
    // 42px
    fontSize: "2.625rem",
    fontWeight: 300,
  },
  h2: {
    // 34px
    fontSize: "2.1rem",
    fontWeight: 200,
  },
  h3: {
    // 20px
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  body1: {
    // 16px
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    // 14px
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  subtitle1: {
    // 28px
    fontSize: "1.75rem",
    fontWeight: 500,
  },
  subtitle2: {
    // 22px
    fontSize: "1.375rem",
    fontWeight: 400,
  },
  button: {
    // 16px
    color: "#2884FF",
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "unset",
  },
  h5: {
    // 18px
    fontSize: "1.125rem",
    fontWeight: 400,
  },
};

const { h1, h2, h3, h5, body1, body2, button, subtitle1, subtitle2 } = fonts;

const defaultTheme = createTheme();

export const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    h1,
    h2,
    h3,
    h5,
    body1,
    body2,
    subtitle1,
    subtitle2,
    button,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          [defaultTheme.breakpoints.up("xs")]: {
            fontSize: "7px",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "9px",
          },
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: "11px",
          },
          [defaultTheme.breakpoints.up("lg")]: {
            fontSize: "10px",
          },
          [defaultTheme.breakpoints.up("xl")]: {
            fontSize: "16px",
          },
        },
      },
    },
    MuiButton: {
      contained: {
        "&.header": {
          backgroundColor: "black",
          color: "white",
          transition: "0.4s",
          "&:hover": {
            backgroundColor: "black",
            color: "#FFD700",
            borderRadius: "5px",
          },
        },
      },
    },
  },
});
