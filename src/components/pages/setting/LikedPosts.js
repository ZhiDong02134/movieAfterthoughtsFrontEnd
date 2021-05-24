import React from "react";
import { useStyles } from "../styles/discussions";
import PostList from "../postInfos/PostList";

const LikedPosts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Liked Posts</div>
      <div className={classes.postList}>
        <PostList likedPosts={true} />
      </div>
    </div>
  );
};

export default LikedPosts;
