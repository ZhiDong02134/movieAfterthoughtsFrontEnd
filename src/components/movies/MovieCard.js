import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "0.5rem",
    display: "flex",
    width: "70%",
    backgroundColor: "#F0F2F0",
    height: "auto",
    cursor: "pointer",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "auto",
    height: "auto",
    background: "cover",
  },
}));

const MovieCard = ({ movie, setSelectedMovie }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => setSelectedMovie(JSON.stringify(movie, null, 2))}>
      <CardMedia
        className={classes.cover}
        image={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
        component="img"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rating: {movie.vote_average}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Id: {movie.id}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Release Date: {movie.release_date}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieCard;
