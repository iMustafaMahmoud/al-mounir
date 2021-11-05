import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import PropertyCard from "../PropertyCard/PropertyCard";

const Projects = () => {
  const styles = useStyles();
  const indexes = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Box position="relative">
        <img className={styles.banner} alt="" />
        <Box className={styles.center}>
          <Typography class={styles.animatedText} variant="h1">
            <Box
              component="span"
              fontWeight="700"
              fontSize="5rem"
              color="black"
            >
              Our Projects
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box mt={4} width="100%">
        <Grid container spacing={2}>
          {indexes.map((i) => {
            return (
              <Grid className={styles.gridItem} item xs={12} lg={4}>
                <PropertyCard />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
