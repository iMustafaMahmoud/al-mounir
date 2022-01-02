import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    padding: "15px",
    minHeight: "35vh",
    boxShadow: "16px 12px 20px #008dc84d",
    textAlign: "center",
    background:
      "transparent linear-gradient(to right bottom, rgba(128, 96, 36, 0.8), rgba(253, 224, 141, 0.8),rgba(200, 143, 36, 0.8) ) no-repeat padding-box",
  },
  MuiButtonactive: {
    fontSize: "1.625rem !important",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  },
  MuiButton: {
    fontSize: "1.625rem !important",
    color: "white",
    padding: "10px",
  },

  cell: {
    color: "white",
    fontSize: "1.4rem",
  },
  searchDiv: {
    minHeight: "100px",
  },
  btn: {
    margin: "20px",
    padding: "12px",
    fontSize: "1.25rem",
    width: "90%",
    background:
      "transparent linear-gradient(to right bottom, rgba(128, 96, 36, 0.8), rgba(253, 224, 141, 0.8),rgba(200, 143, 36, 0.8) ) no-repeat padding-box",
  },
  bck: {
    marginTop: "20px",
    background: "#ab8434",
  },
  input: {
    border: "1px solid white",
    color: "white !important",
    fontSize: "1.2rem",
  },
}));
