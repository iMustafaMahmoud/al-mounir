import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";


export default function RecipeReviewCard({ project }) {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Card className={classes.root} onClick={() => navigate(`/projects/${project.id}`)}>
      <Box height="13px" width="100%" bgcolor="black" borderRadius="10px"></Box>
      <CardHeader
        className={classes.MuiCardHeader}
        title={
          <Typography variant="h2" align="center">
            <Box component="span" color="white">
              {project.projectName}
            </Box>
          </Typography>
        }
      />
      <CardMedia className={classes.media} image={project.prosureImage} />
      <CardContent className={classes.MuiCardHeader}>
        <Typography variant="subtitle2" align="center">
          <Box component="span" color="black">
            {project.location}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
