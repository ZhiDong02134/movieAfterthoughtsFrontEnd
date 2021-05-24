import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
});

const Comment = ({ commentDate, commentor, commentDetails }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.commentDetails} component="p">
          {commentDetails}
        </Typography>
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
