import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage:
      "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
    backgroundSize: "cover",
    minHeight: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },

  postForm: {
    marginTop: "-1.5rem",
    paddingBottom: "3rem",
    backgroundImage: "linear-gradient(135deg, #f3e7e9, #e3eeff)",
  },
}));
