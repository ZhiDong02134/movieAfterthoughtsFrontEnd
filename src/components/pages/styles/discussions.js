import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundImage:
      "linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    justifySelf: "center",
    fontSize: "4rem",
    marginTop: "-1rem",
    marginBottom: "-1rem",
    fontWeight: "500",
    height: "auto",
    fontFamily: "'Nanum Pen Script', cursive",
    background:
      "gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )",
    color: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  },
  postList: {
    width: "100%",
  },
}));
