import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setSelectedMovie }) => {
  const renderMovies = movies.map(movie => {
    return (
      <MovieCard
        movie={movie}
        key={movie.id}
        setSelectedMovie={setSelectedMovie}
      />
    );
  });

  return <>{renderMovies}</>;
};

export default MovieList;
