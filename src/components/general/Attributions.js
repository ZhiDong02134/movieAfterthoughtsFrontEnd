import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
  },
  tmdb: {
    padding: "2rem",
    color: "#696969",
  },
  movieData: {
    color: "#585858",
  },
  logo: {
    height: "auto",
    width: "8rem",
  },
}));

const Attributions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tmdb}>
        <h2 className={classes.movieData}>Movie Data</h2>
        <p>
          All movie-related metadata used in Movie Afterthoughts, including
          rating, movie names and movie id, release dates and poster art is
          supplied by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.themoviedb.org/">
            The Movie Database
          </a>{" "}
          (TMDb).
        </p>
        <img
          className={classes.logo}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="TMDb logo"
        />
        <p>
          <i>
            Movie Afterthoughts uses the TMDb API but is not endorsed or
            certified by TMDb.
          </i>
        </p>
        <p>
          To add missing movies or correct inaccuracies for existing movies,
          please use TMDb’s interface (you’ll need to create an account there
          too). Changes to movie data on TMDb will be visible in Movie
          Afterthoughts within 30 hours.
        </p>
      </div>
    </div>
  );
};

export default Attributions;
