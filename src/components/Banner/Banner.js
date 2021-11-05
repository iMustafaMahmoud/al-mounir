import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Logo from "../../assets/images/final-logo.png";

const BannerHeader = () => {
  const styles = useStyles();

  return (
    <Box position="relative">
      <img className={styles.banner} alt="" />
      <Box className={styles.center}>
        {/* <Typography class={styles.animatedText} variant="h1">
          <Box component="span" fontWeight="700" fontSize="5rem" color="black">
            Al-Mounir Developments
          </Box>
        </Typography> */}
        <img class={styles.animatedText} src={Logo} />
      </Box>
    </Box>
  );
};

export default BannerHeader;
