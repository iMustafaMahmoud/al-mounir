import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "600px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "top",
    clipPath: "polygon(0 0 , 100% 0, 100% 75vh, 0 100%)",
    backgroundImage:
      "linear-gradient(to right bottom, rgba(128, 96, 36, 0.8), rgba(253, 224, 141, 0.8), rgba(200, 143, 36, 0.8)), url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "black",
  },

  animatedText: {
    animation: `$moveRight 1s ease-out`,
  },

  "@keyframes moveRight": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    "80%": {
      transform: "translateX(10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translate(0)",
    },
  },
}));
