import { Box, Typography, Grid, Link } from "@material-ui/core";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/index";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./components/Home/Home";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "600px",
    width: "600px",
  },
  facebookIcon: {
    color: "#0879E9",
  },
  whatsAppIcon: {
    color: "#06D755",
  },
  facebookLink: {
    color: "white",
  },
}));

function App() {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
