import React, { useEffect, useState } from "react";
import TopAppBar from "../TopNavBar/TopNavBar";
import BannerHeader from "../Banner/Banner";
import PropertyCard from "../PropertyCard/PropertyCard";
import Footer from "../Footer/Footer";
import { Box, Typography, Grid, Link } from "@material-ui/core";
import { getRequest } from "../../Network/CRUD";

const Home = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    (async () => {
      const response = await getRequest("Project");
      console.log("response", response);
      if (response.status === 200) {
        setProjects(response.data);
        console.log("seett");
      }
    })();
  }, []);
  return (
    <>
      <BannerHeader />
      <Box
        width="100%"
        height="150px"
        bgcolor="#B48731"
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
        <Grid container spacing={2}>
          {projects?.map((item) => {
            return (
              <Grid item xs={12} lg={4}>
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <PropertyCard key={item.id} project={item} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
