import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundImage: "linear-gradient(315deg, #83eaf1 0%, #63a4ff 74%)",
  },
  appName: {
    textDecoration: "none",
    color: "#ffffff",
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
  },
}));
