import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(160deg, #e0c3fc 0%, #8ec5fc 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "'Kaushan Script', cursive",
    fontSize: "8rem",
    marginBottom: "1rem",
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 160%) #989898",
    backgroundBlendMode: "multiply,multiply",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  btn: {
    height: "16rem",
    width: "16rem",
    borderRadius: "50%",
    fontSize: "2rem",
    color: "#fff",
    fontFamily: "'Nanum Pen Script', cursive",
    marginBottom: "3rem",
    background:
      "linear-gradient(124deg, #FF0000,#ff2400, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ffb199, #F578DC)",
    animationDuration: "21s",
    animationIterationCount: "infinite",
    animationName: "$rainbow",
    animationTimingFunction: "ease",
    backgroundSize: "3000% 3000%",
  },
  "@keyframes rainbow": {
    "0%": { backgroundPosition: "0% 82%" },
    "50%": { backgroundPosition: "100% 19%" },
    "100%": { backgroundPosition: "0% 82%" },
  },
}));
