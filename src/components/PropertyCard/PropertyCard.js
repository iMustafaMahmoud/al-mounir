import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import ter3et from "../../assets/images/ter3et.jpeg";
import { useStyles } from "./styles";

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => console.log("hello")}>
      <Box height="13px" width="100%" bgcolor="black" borderRadius="10px"></Box>
      <CardHeader
        className={classes.MuiCardHeader}
        title={
          <Typography variant="h2" align="center">
            <Box component="span" color="black">
              Abrag El-Mounir
            </Box>
          </Typography>
        }
      />
      <CardMedia className={classes.media} image={ter3et} />
      <CardContent className={classes.MuiCardHeader}>
        <Typography variant="subtitle2" align="center">
          <Box component="span" color="black">
            92 El-Zeiton metro station street
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
