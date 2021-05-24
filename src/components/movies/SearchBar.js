import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles/search";
import MovieList from "./MovieList";
import user from "../../apis/user";

const SearchBar = ({ setSelectedMovie }) => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = async movieName => {
      const { data } = await user.get(`/movies/${movieName}`);
      setMovies(data);
    };

    if (debouncedInput) {
      search(debouncedInput);
    } else {
      search("dragon ball");
    }
  }, [debouncedInput]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [input]);

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <TextField
              placeholder="Search for movies..."
              className={classes.inputInput}
              InputProps={{ disableUnderline: true }}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.movieList}>
        <h1 className={classes.heading}>
          <i>Select a movie</i>
        </h1>
        <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      </div>
    </div>
  );
};

export default SearchBar;
