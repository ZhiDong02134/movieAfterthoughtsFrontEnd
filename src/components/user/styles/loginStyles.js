import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mapRoot: {
    textAlign: "center",
    height: "20rem",
    width: "20rem",
    marginBottom: "-5rem",
    display: "flex",
    justifyContent: "center",
  },
  mapIcon: {
    marginLeft: "-0.2rem",
    marginTop: "1rem",
    display: "flex",
    height: "7rem",
    width: "auto",
    filter:
      "brightness(0) saturate(100%) invert(90%) sepia(15%) saturate(6959%) hue-rotate(183deg) brightness(101%) contrast(98%)",
  },
  signIn: {
    marginTop: "-6rem",
  },
}));
