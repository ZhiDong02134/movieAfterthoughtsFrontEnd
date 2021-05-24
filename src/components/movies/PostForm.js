import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";

import FormikTextField from "../general/FormikTextField";
import { postFormValidation } from "../schemaValidation/schemaValidations";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "auto",
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  title: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: "3rem",
  },
  submit: {
    backgroundColor: "#F3A183",
    margin: theme.spacing(3, 0, 2),
    "&:focus, &:hover, &:visited, &:link, &:active": {
      backgroundColor: "#F3A183",
    },
  },
  cancel: {
    backgroundColor: "#acb6e5",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      backgroundColor: "#acb6e5",
    },
  },
}));

/**
 *
 * @param [movie] - the movie user selected that will be included in the form
 * @returns
 */
const PostForm = ({ selectedMovie = "" }) => {
  const movie = JSON.parse(selectedMovie);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    title: movie.title,
    movieId: movie.id,
    overallRating: movie.vote_average,
    releaseDate: movie.release_date,
    posterSrc: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
    rating: "",
    postDetails: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postFormValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          dispatch(createPost(values));
          setSubmitting(false);
          resetForm();
          history.push("/discussion");
        }, 1000);
      }}>
      {({ isSubmitting }) => (
        <Container component="main" maxWidth="xs" className={classes.root}>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Create Post
            </Typography>
            <Form className={classes.form} noValidate>
              <FormikTextField
                id="title"
                label="Movie Title"
                name="title"
                disabled={true}
              />
              <FormikTextField
                id="movieId"
                label="Movie Id (TMDB)"
                name="movieId"
                disabled={true}
              />
              <FormikTextField
                id="overallRating"
                label="Overall Rating"
                name="overallRating"
                disabled={true}
              />
              <FormikTextField
                id="release_date"
                label="Release Date"
                name="releaseDate"
                disabled={true}
              />
              <FormikTextField
                id="posterSrc"
                label="Poster"
                name="posterSrc"
                disabled={true}
              />
              <FormikTextField
                id="rating"
                label="Your Rating"
                name="rating"
                type="number"
                placeholder="0 - 10"
              />
              <FormikTextField
                label="Write post here"
                placeholder="It’s the feel-good movie of the year – I found it very touching."
                multiline
                rows={5}
                rowsMax={Infinity}
                name="postDetails"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                color="primary"
                className={classes.submit}>
                Post
              </Button>
              <Button
                fullWidth
                variant="contained"
                className={classes.cancel}
                disabled={isSubmitting}
                color="secondary"
                onClick={() => history.push("/discussion")}>
                Cancel
              </Button>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
};

export default PostForm;
