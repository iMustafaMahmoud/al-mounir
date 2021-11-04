import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    backgroundColor: "black",
    transition: "transform .3s",
    "&:hover": {
      transform: "translateY(-1.5rem) scale(1.03)",
    },
    // color: "white",
  },
  media: {
    height: 250,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  header: {
    color: "black",
  },
  MuiCardHeader: {
    backgroundColor: "#D4B164",
  },
}));
