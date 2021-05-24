import React from "react";
import { useStyles } from "../styles/discussions";
import PostList from "../postInfos/PostList";

const MyPosts = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <h1>My Posts</h1>
        </div>
        <div className={classes.postList}>
          <PostList myPosts={true} />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
