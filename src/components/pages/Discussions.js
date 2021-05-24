import React from "react";
import { useStyles } from "./styles/discussions";
import PostList from "./postInfos/PostList";

const Discussions = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <h1>Recent Posts</h1>
        </div>
        <div className={classes.postList}>
          <PostList />
        </div>
      </div>
    </>
  );
};

export default Discussions;
