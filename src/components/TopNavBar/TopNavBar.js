import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { Box, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../assets/images/final-logo.png";
import { NavLink } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    color: "white",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    "$:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  iconButtonFacebook: {
    color: "white",
    transition: "0.2s",
    "&:hover": {
      color: "#149EF9",
    },
  },
  iconButtonWhatsapp: {
    color: "white",
    transition: "0.2s",
    "&:hover": {
      color: "#06D755",
    },
  },
  Logo: {
    height: "120px",
    width: "120px",
  },
}));

export default function TopAppBar(props) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={styles.appBar}>
          <Toolbar>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box>
                <NavLink to="/">
                  <img className={styles.Logo} src={Logo} alt="" />
                </NavLink>
              </Box>
              <Box display="flex" justifyContent="space-between" width="400px">
                <NavLink to="/projects" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className="header">
                    <Typography variant="subtitle2">Projects</Typography>
                  </Button>
                </NavLink>
                <NavLink to="/projects" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className="header">
                    <Typography variant="subtitle2">Mission</Typography>
                  </Button>
                </NavLink>
                <NavLink to="/projects" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className="header">
                    <Typography variant="subtitle2">Vision</Typography>
                  </Button>
                </NavLink>
                <NavLink to="/projects" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className="header">
                    <Typography variant="subtitle2">Contact Us</Typography>
                  </Button>
                </NavLink>
              </Box>
              <Box>
                <IconButton className={styles.iconButtonFacebook}>
                  <FacebookIcon fontSize="large" />
                </IconButton>

                <IconButton className={styles.iconButtonWhatsapp}>
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
