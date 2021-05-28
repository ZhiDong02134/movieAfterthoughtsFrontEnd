import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Typography, CardContent, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { deleteComment } from "../../../actions/post";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "-2rem",
    backgroundImage: "linear-gradient(315deg, #E3FDF5, #FFE6FA)",
  },
  content: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  name: {
    fontSize: "0.75rem",
    marginTop: "1rem",
    marginLeft: "-0.75rem",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "-webkit-linear-gradient(45deg, #243949, #517fa4)",
  },
  date: {
    fontSize: "0.6875rem",
    marginTop: "-0.5rem",
    marginLeft: "-0.75rem",
    marginBottom: "-1.5rem",
  },
  commentDetails: {
    fontSize: "0.8125rem",
    marginTop: "-0.75rem",
    marginLeft: "-0.75rem",
  },
  comment: {
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    marginTop: "-1.5rem",
    marginRight: "-1rem",
    color: "#ff0000",
  },
});

const Comment = ({
  commentId,
  myComment,
  commentDate,
  commentor,
  commentDetails,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDeleteComment = id => {
    dispatch(deleteComment(id));
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <div className={classes.comment}>
          <Typography className={classes.commentDetails} component="p">
            {commentDetails}
          </Typography>
          {myComment ? (
            <IconButton
              className={classes.deleteIcon}
              onClick={() => handleDeleteComment(commentId)}>
              <DeleteIcon />
            </IconButton>
          ) : null}
        </div>
        <Typography className={classes.name} gutterBottom>
          {commentor}
        </Typography>
        <Typography
          className={classes.date}
          color="textSecondary"
          component="p">
          {commentDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
