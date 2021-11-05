import { Box, Typography, Grid, Link } from "@material-ui/core";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/index";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./components/Projects/Projects";
import TopAppBar from "./components/TopNavBar/TopNavBar";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

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
      <TopAppBar />
      <Home />
      {/* <Projects /> */}
      {/* <ProjectDetails /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
