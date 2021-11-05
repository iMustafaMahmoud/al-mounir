import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "300px",
    position: "relative",
    backgroundSize: "cover",
    backgroundImage:
      "linear-gradient(to right bottom, rgba(128, 96, 36, 0.8), rgba(253, 224, 141, 0.8), rgba(200, 143, 36, 0.8))",
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

  gridItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
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
