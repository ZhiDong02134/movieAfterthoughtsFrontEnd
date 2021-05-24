import React, { useState } from "react";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    color: "#d558c8",
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
});

const PostDetails = ({ postDetails }) => {
  const classes = useStyles();

  //show more link should appear on initial render if post length is less than 248 characters
  const [showMore, setShowMore] = useState(true);

  let post = postDetails;

  if (post.length < 248) {
    post += " ".repeat(248 - post.length);
  }

  const link = showMore ? "expand" : "collapse";

  const handleLinkClick = e => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <>
      {postDetails.length < 248 ? (
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            whiteSpace: "break-spaces",
          }}>
          {post}
        </Typography>
      ) : (
        <Typography variant="body2" color="textSecondary" component="p">
          {post.slice(0, 248)}
          {showMore ? "..." : post.slice(248)}
          <Link
            className={classes.link}
            href="#"
            onClick={handleLinkClick}
            color="inherit">
            {showMore ? (
              link
            ) : (
              <span className={classes.collapse}> {link}</span>
            )}
          </Link>
        </Typography>
      )}
    </>
  );
};

export default PostDetails;
