import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import FormikTextField from "../general/FormikTextField";
import Copyright from "../general/Copyright";
import movieIcon from "../../svg/movieIcon.svg";
import { loginValidationSchema } from "../schemaValidation/schemaValidations";
import { loginUser } from "../../actions/user";
import { useStyles } from "./styles/loginStyles";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPw, setShowPw] = useState(false);
  const { isAuthenticated } = useSelector(state => state.user);

  if (isAuthenticated) {
    return <Redirect to="/discussion" />;
  }

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(loginUser(values));
          resetForm();
        }, 1500);
      }}>
      {({ isSubmitting }) => (
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
                className={classes.signIn}
                component="h1"
                variant="h5">
                Sign In
              </Typography>
              <Form className={classes.form}>
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  className={classes.submit}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/register">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </Form>
            </div>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default Login;
