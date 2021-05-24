import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../actions/user";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundImage:
      "radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)",
  },
  appName: {
    textDecoration: "none",
    background:
      "-webkit-linear-gradient(#fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 700,
    fontSize: "2.25rem",
  },
  btn: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: "1.1rem",
    background:
      "linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

const Navbar = ({ create = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title}>
            <Link to="/" className={classes.appName}>
              Movie Afterthoughts
            </Link>
          </Typography>

          {!create ? (
            <Button component={Link} to="/create" color="inherit">
              <div className={classes.btn}>Create Post</div>
            </Button>
          ) : null}
          <IconButton component={Link} to="/setting">
            <PersonIcon />
          </IconButton>
          <Button onClick={() => dispatch(logOut())} color="inherit">
            <div className={classes.btn}>Log out</div>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
