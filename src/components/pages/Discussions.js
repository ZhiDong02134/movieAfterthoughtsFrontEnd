import React from "react";
import { useStyles } from "./styles/discussions";
import PostList from "./postInfos/PostList";

const Discussions = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>Recent Posts</div>
        <div className={classes.postList}>
          <PostList />
        </div>
      </div>
    </>
  );
};

export default Discussions;
