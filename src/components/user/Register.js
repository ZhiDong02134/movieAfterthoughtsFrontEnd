import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import FormikTextField from "../general/FormikTextField";
import Copyright from "../general/Copyright";
import movieIcon from "../../svg/movieIcon.svg";

import { registerationValidationSchema } from "../schemaValidation/schemaValidations";
import { registerUser } from "../../actions/user";
import { useStyles } from "./styles/registerStyles";

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.user);
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  if (isAuthenticated) {
    return <Redirect to="/discussion" />;
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerationValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(registerUser(values));
          resetForm();
        }, 1500);
      }}>
      {({ values, errors, isSubmitting }) => (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>
            <div className={classes.paper}>
              <Icon className={classes.mapRoot}>
                <img
                  className={classes.mapIcon}
                  src={movieIcon}
                  alt="Movie Icon"
                />
              </Icon>
              <Typography
                className={classes.signUp}
                component="h1"
                variant="h5">
                Sign Up
              </Typography>
              <Form className={classes.form}>
                <FormikTextField
                  label="First Name"
                  name="firstName"
                  type="input"
                />
                <FormikTextField
                  label="Last Name"
                  name="lastName"
                  type="input"
                />
                <FormikTextField
                  label="Email Address"
                  name="email"
                  type="email"
                />
                <FormikTextField
                  name="password"
                  label="Password"
                  type={showPw ? "text" : "password"}
                  className="passwordField"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton onClick={() => setShowPw(!showPw)}>
                          {showPw ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormikTextField
                  name="passwordConfirm"
                  label="Confirm Password"
                  type={showConfirmPw ? "text" : "password"}
                  className="passwordField"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={() => setShowConfirmPw(!showConfirmPw)}>
                          {showConfirmPw ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  className={classes.submit}>
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/login">Already have an account? Sign In</Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              </Form>
            </div>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default Register;
