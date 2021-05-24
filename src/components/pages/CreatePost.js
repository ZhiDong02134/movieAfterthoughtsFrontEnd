import React, { useState } from "react";
import Navbar from "../Navbars/general/Navbar";

import SearchBar from "../movies/SearchBar";
import PostForm from "../movies/PostForm";
import { useStyles } from "./styles/post";

const CreatePost = () => {
  const classes = useStyles();

  const [selectedMovie, setSelectedMovie] = useState("");

  return (
    <>
      <Navbar
        create={true}
        bgImg="linear-gradient(315deg, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
      />
      {selectedMovie ? (
        <div className={classes.postForm}>
          <PostForm selectedMovie={selectedMovie} />
        </div>
      ) : (
        <div className={classes.root}>
          <SearchBar setSelectedMovie={setSelectedMovie} />
        </div>
      )}
    </>
  );
};

export default CreatePost;
