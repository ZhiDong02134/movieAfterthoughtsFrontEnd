import React from "react";
import { useField } from "formik";
import TextField from "@material-ui/core/TextField";

//ErrorMessage will render error message if a field has been visited and an error is present.
const FormikTextField = props => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      {...field}
      {...props}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      autoComplete="off"
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default FormikTextField;
