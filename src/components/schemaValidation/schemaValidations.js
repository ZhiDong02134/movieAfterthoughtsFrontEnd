import * as yup from "yup";

export const registerationValidationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "First name is too short!")
    .required("First name is required!"),
  lastName: yup
    .string()
    .min(2, "Last name is too short!")
    .required("Last name is required!"),
  email: yup
    .string()
    .lowercase()
    .email("Email is not valid")
    .required("Email is required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password be at least 8 characters longs, contains at least one lowercase charater, one uppercase character, one digit and one special character"
    )
    .required("Password is required!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Passwords do not match."),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .lowercase()
    .email("Email is not valid")
    .required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

export const postFormValidation = yup.object({
  rating: yup
    .number("Rating must be a number")
    .min(0, "Rating must be a number between 0 and 10")
    .max(10, "Rating must be a number between 0 and 10")
    .integer("Rating must be a whole number")
    .required("Rating is required!"),
  postDetails: yup
    .string()
    .min(150, "Post must be at least 150 characters long")
    .max(400, "Post can't be more than 400 characters")
    .required("Post is required!"),
});
