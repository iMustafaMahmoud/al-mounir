import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import image from "../../assets/images/170m.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectDetails = () => {
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
              Project Details
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box mt={3} display="flex" alignItems="center" justifyContent="center">
        {/* <img className={styles.projectImage} src={image} alt="" /> */}
        <Zoom>
          <img
            className={styles.projectImage}
            alt="that wanaka tree"
            src={image}
          />
        </Zoom>
      </Box>
    </>
  );
};

export default ProjectDetails;
