import * as Yup from "yup";

// Not a proper TS integration.
// Need to understand how this works...
export const registerSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Please enter password again"),
  securityQuestion: Yup.object().shape({
    question: Yup.string().required("Security question is required."),
    answer: Yup.string()
      .required("Answer is required")
      .max(16, "Answer should not exceed 16 characters"),
  }),
});
