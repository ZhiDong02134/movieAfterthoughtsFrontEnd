import React, { useState } from "react";
import { useStyles } from "../styles/discussions";
import PostList from "../postInfos/PostList";

const MyPosts = () => {
  const classes = useStyles();

  const [showHeading, setShowHeading] = useState(true);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>{showHeading ? "My Posts" : ""}</div>
        <div className={classes.postList}>
          <PostList setShowHeading={setShowHeading} myPosts={true} />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
