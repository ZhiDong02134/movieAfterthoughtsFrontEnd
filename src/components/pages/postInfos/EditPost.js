import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../actions/post";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";

import FormikTextField from "../../general/FormikTextField";
import { postFormValidation } from "../../schemaValidation/schemaValidations";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundImage: "linear-gradient(135deg, #f3e7e9, #e3eeff)",
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
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

const EditPost = ({ post = "", setShowHeading }) => {
  useEffect(() => {
    setShowHeading(false);
  }, [setShowHeading]);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const postId = post.id;
  const initialValues = {
    movieId: post.movieId,
    rating: post.rating,
    postDetails: post.postDetails,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postFormValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          dispatch(editPost(postId, values));
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
              Edit Post
            </Typography>
            <Form className={classes.form} noValidate>
              <FormikTextField
                id="movieId"
                label="Movie Id (TMDB)"
                name="movieId"
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
                label="Edit Post"
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

export default EditPost;
