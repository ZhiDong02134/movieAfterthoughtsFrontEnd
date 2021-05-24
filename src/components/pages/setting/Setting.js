import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { deleteUser } from "../../../actions/user";
import AlertDialog from "../../general/AlertDialog";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  btnText: {
    fontSize: "2rem",
    color: "#fff",
    fontFamily: "'Nanum Pen Script', cursive",
  },
  btnOne: {
    height: "15rem",
    width: "15rem",
    backgroundRepeat: "no-repeat",
    background:
      "linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #6e45e2, #88d3ce, #97d9e1, #d9afd9)",
    borderRadius: "50%",
    animationDuration: "10s",
    animationIterationCount: "infinite",
    animationName: "$rainbowOne",
    animationTimingFunction: "ease",
    backgroundSize: "1800% 1800%",
  },
  "@keyframes rainbowOne": {
    "0%": { backgroundPosition: "0% 82%" },
    "50%": { backgroundPosition: "100% 20%" },
    "100%": { backgroundPosition: "0% 85%" },
  },
  btnTwo: {
    marginTop: "5rem",
    height: "15rem",
    width: "15rem",
    backgroundRepeat: "no-repeat",
    background:
      "linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #6e45e2, #88d3ce, #97d9e1, #d9afd9)",
    borderRadius: "50%",
    animationDuration: "8s",
    animationIterationCount: "infinite",
    animationName: "$rainbowTwo",
    animationTimingFunction: "ease",
    backgroundSize: "1800% 1800%",
  },
  "@keyframes rainbowTwo": {
    "0%": { backgroundPosition: "100% 20%" },
    "50%": { backgroundPosition: "0% 80%" },
    "100%": { backgroundPosition: "95% 15%" },
  },
  deleteBtn: {
    width: "20rem",
    position: "absolute",
    bottom: "0.5rem",
    paddingLeft: "0.5rem",
  },
}));

const Setting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id } = useSelector(state => state.user);

  const onDeleteClick = id => {
    dispatch(deleteUser(id));
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.btnOne}
        variant="contained"
        component={Link}
        to="/myposts">
        <Typography className={classes.btnText}>My Posts</Typography>
      </Button>
      <Button
        className={classes.btnTwo}
        variant="contained"
        component={Link}
        to="/likedposts">
        <Typography className={classes.btnText}>Liked Posts</Typography>
      </Button>
      <div className={classes.deleteBtn}>
        <AlertDialog
          btnText="Delete Account"
          title="Delete Account"
          details="Are you sure you want to delete this account?"
          action={() => onDeleteClick(id)}
        />
      </div>
    </div>
  );
};

export default Setting;
