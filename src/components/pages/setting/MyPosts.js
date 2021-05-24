import React from "react";
import { useStyles } from "../styles/discussions";
import PostList from "../postInfos/PostList";

const MyPosts = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>My Posts</div>
        <div className={classes.postList}>
          <PostList myPosts={true} />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
