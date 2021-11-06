import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import PropertyCard from "../PropertyCard/PropertyCard";
import { getRequest } from "../../Network/CRUD";

const Projects = () => {
  var indexes = [];
  useEffect(() => {
    (async () => {
      let projects = [];
      let response = await getRequest(`Project`);
      console.log(response);
    })();
  }, []);
  const styles = useStyles();
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
          {indexes.map((element) => {
            return (
              <Grid className={styles.gridItem} item xs={12} lg={4}>
                <PropertyCard project={element} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
