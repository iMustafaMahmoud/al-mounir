import React from "react";
import TopAppBar from "../TopNavBar/TopNavBar";
import BannerHeader from "../Banner/Banner";
import PropertyCard from "../PropertyCard/PropertyCard";
import Footer from "../Footer/Footer";
import { Box, Typography, Grid, Link } from "@material-ui/core";

const Home = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default Home;
