import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Logo from "../../assets/images/final-logo.png";
import { useSpring, animated, config } from 'react-spring'

const BannerHeader = () => {
  const styles = useStyles();

  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: false,
    from: { number: 1900 },
    number: 1960,
    delay: 300,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return (
    <Box position="relative">
      <img className={styles.banner} alt="" />
      <Box className={styles.center}>

        <img class={styles.animatedText} src={Logo} alt="" />
        <Box display="flex" justifyContent="center" alignItems="center">
        <Box mr={1}>
          <span className={styles.animatedSince}>Since </span>
        </Box>
        <animated.div className={styles.animatedSince}>{number.to(n => n.toFixed(0))}</animated.div>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerHeader;
