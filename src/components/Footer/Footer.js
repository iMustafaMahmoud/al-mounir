import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
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

const Footer = () => {
  const styles = useStyles();

  return (
    <Box
      mt={6}
      padding="20px 50px"
      borderTop={1}
      xborderColor="#D4AF37"
      color="white"
      width="100%"
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100px"
          >
            <Typography variant="h1">Al-Mounir</Typography>
            <Typography variant="h3">About Us</Typography>
            <Typography variant="h3">All Projects</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box>
            <Typography variant="h1">Social Links</Typography>
            <Box mt={1} display="flex">
              <WhatsAppIcon className={styles.whatsAppIcon} fontSize="large" />
              <Box ml={1}>
                <Typography variant="h3">01007020083</Typography>
              </Box>
            </Box>
            <Box mt={1} display="flex">
              <FacebookIcon className={styles.facebookIcon} fontSize="large" />
              <Box ml={1}>
                <Typography variant="h3">
                  <Link
                    className={styles.facebookLink}
                    href="https://web.facebook.com/AlMounirdevelopment"
                  >
                    Al-Mounir Developments
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="h1">Visit Us</Typography>
          <Box alignItems="center" mt={1} display="flex">
            <LocationOnIcon className={styles.whatsAppIcon} fontSize="large" />
            <Box ml={1}>
              <Typography variant="h3">
                92 Mahtet Metro El-Zeitoun Street
              </Typography>
            </Box>
          </Box>
          <Box mt={1}>
            <Typography variant="h1">Contact Us</Typography>
            <Box mt={1} display="flex" alignItems="center">
              <PhoneIcon className={styles.facebookIcon} fontSize="large" />
              <Box ml={1}>
                <Typography variant="h3">01007020083</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        mt={3}
        mb={2}
      >
        <Typography variant="h3">© Al-Mounir ‐ All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
