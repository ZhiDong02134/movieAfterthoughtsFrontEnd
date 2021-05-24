import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "21.5rem",
    height: "100%",
    margin: "1rem",
  },
  media: {
    height: "auto",
    width: "100%",
  },
  head: {
    display: "flex",
    backgroundColor: "#FFEEEE",
  },
  editDeleteIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginLeft: "auto",
    marginTop: "0.5rem",
  },
  editBtn: {
    color: "#04befe",
  },
  deleteBtn: {
    color: "#c43a30",
  },
  title: {
    color: "#764ba2",
    fontSize: "0.95rem",
  },
  subtitle: {
    fontSize: "0.8rem",
  },
  share: {
    marginLeft: "auto",
  },
  actions: {
    marginTop: "auto",
    backgroundImage: "linear-gradient(45deg, #f5f7fa, #c3cfe2 74%)",
  },
  expandAllComments: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandCommentBox: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  chatbox: {
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    position: "relative",
    width: "100%",
    display: "inline-block",
  },
  input: {
    height: "10%",
    width: "100%",
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 0),
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  postBtn: {
    backgroundImage: "linear-gradient(45deg, #ED7B84, #9055FF)",
    borderRadius: "2rem",
  },
  postBtnText: {
    color: "#fff",
  },
  rating: {
    marginLeft: "0.5rem",
    fontSize: "0.8rem",
  },
  comment: {
    marginTop: "2.5rem",
  },
  commentList: {
    backgroundImage:
      "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)",
  },
  postDetails: {
    marginBottom: "auto",
  },
  postDate: {
    fontSize: "0.7rem",
    color: "#696969",
  },
  likeCount: {
    fontSize: "0.8rem",
  },
}));
