import { Box, Typography, Grid } from "@material-ui/core";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/index";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./components/Projects/Projects";
import TopAppBar from "./components/TopNavBar/TopNavBar";
import Admin from "./components/AdminPanel/Admin";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Login from "./components/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import BannerHeader from "./components/Banner/Banner";
import PropertyCard from "./components/PropertyCard/PropertyCard";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
   </ThemeProvider>
  );
}

export default App;
