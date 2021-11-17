import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "600px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "top",
    // clipPath: "polygon(0 0 , 100% 0, 100% 75vh, 0 100%)",
    backgroundImage:
      "linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(9, 9, 9, 0.8), rgba(19, 19, 19, 0.8))",
  },
  center: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "black",
  },

  animatedText: {
    animation: `$moveRight 1.5s ease-out`,
  },

  animatedSince: {
    color: 'white',
    textAlign: 'center',
    fontSize: '3rem',
    animation: `$fadeIn 1.5s ease-out`,

  },

  "@keyframes fadeIn": {
    "0%": {
      transform: "translateY(-50px)",
      opacity: 0,
    },
    "80%": {
      transform: "translateY(10px)",
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
      transform: "translate(0)",

    },
  },

  "@keyframes moveRight": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200px)",
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
