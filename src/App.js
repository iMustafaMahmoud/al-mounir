import TopAppBar from "./components/TopNavBar/TopNavBar";
import { Box, Typography, Grid } from "@material-ui/core";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/index";
import { makeStyles } from "@material-ui/core/styles";

import BannerHeader from "./components/Banner/Banner";
import PropertyCard from "./components/PropertyCard/PropertyCard";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "600px",
    width: "600px",
  },
}));

function App() {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box color="F5E8B8" bgcolor="black">
        <TopAppBar />
        <BannerHeader />
        <Box
          width="100%"
          height="150px"
          bgcolor="#D4AF37"
          mt={8}
          mb={5}
          display="flex"
          color="white"
          alignItems="center"
          justifyContent="center"
          fontSize="48px"
        >
          <Typography variant="h1">CURRENT PROJECTS</Typography>
        </Box>
        <Box mt={3} mb={5} overflow="hidden">
          <Grid container spacing={6}>
            <Grid item xs={12} lg={12}>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <PropertyCard />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <Box display="flex" height="500px" width="100%">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PropertyCard />
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PropertyCard />
          </Box>
        </Box> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
