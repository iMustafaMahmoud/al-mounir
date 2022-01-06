import React from "react";
import { Box, Typography, Grid, Button, Link } from "@material-ui/core";
import { useStyles } from "./styles";
import image from "../../assets/images/contact-us.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


const ContactUs = () => {
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
              Contact Us
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box mt={3} display="flex" alignItems="center" justifyContent="between" width="100%">
        {/* <img className={styles.projectImage} src={image} alt="" /> */}
        <Box color="white" width="40%" pr={2} ml={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h1">CONTACT US</Typography>
            <Box mt={2}>
                <Typography variant="h3">You can contact us on whatsapp</Typography>
            </Box>
            <Box alignItems="center" mt={2}>
            <Button variant="contained" size="large"  className={styles.whatsAppButton} startIcon={<WhatsAppIcon/>}>
                <Link
                    className={styles.link}
                    href="//api.whatsapp.com/send?phone=201006362242&text=Hello"
                  >
                  Say Hello
                  </Link>
            </Button>
            </Box>
        </Box>
        <Box width="50%">
        <Zoom>
          <img
            className={styles.projectImage}
            alt="that wanaka tree"
            src={image}
          />
        </Zoom>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
