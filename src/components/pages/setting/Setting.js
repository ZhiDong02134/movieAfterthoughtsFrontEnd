import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { deleteUser } from "../../../actions/user";
import AlertDialog from "../../general/AlertDialog";
import { useStyles } from "./styles/setting";

const Setting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id } = useSelector(state => state.user);

  const onDeleteClick = id => {
    dispatch(deleteUser(id));
  };

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Setting</div>
      <Button
        className={`${classes.btn} ${classes.btnTwo}`}
        variant="contained"
        component={Link}
        to="/myposts">
        My Posts
      </Button>
      <Button
        className={`${classes.btn} ${classes.btnTwo}`}
        variant="contained"
        component={Link}
        to="/likedposts">
        Liked Posts
      </Button>

      <AlertDialog
        btnText="Delete Account"
        title="Delete Account"
        details="Are you sure you want to delete this account?"
        action={() => onDeleteClick(id)}
      />
    </div>
  );
};

export default Setting;
