import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useFormContext } from "react-hook-form";
import { User } from "../../types/user";

const Step2: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<User>();

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      rowGap={3}
      paddingTop={2}
    >
      <Typography variant="h5">Security Question</Typography>
      <Typography variant="body2">
        A security question allows you to recover your account in case you are
        logged out of your account and have lost your password.
      </Typography>
      <Typography variant="body2">
        Please note that the answer is case sensitive, and is unrecoverable. We
        suggest keeping an answer which is easy to remember and is at most 2
        words long.
      </Typography>
      <TextField
        {...register("securityQuestion.question")}
        label="Question"
        fullWidth
        required
        autoFocus
        error={errors.securityQuestion?.question ? true : false}
        helperText={errors.securityQuestion?.question?.message}
      />
      <TextField
        {...register("securityQuestion.answer")}
        label="Answer"
        fullWidth
        required
        error={errors.securityQuestion?.answer ? true : false}
        helperText={errors.securityQuestion?.answer?.message}
      />
      {(errors.fullName ||
        errors.email ||
        errors.password ||
        errors.confirmPassword) && (
        <Alert severity="error" variant="filled">
          There are errors in the previous step, please review to complete
          account creation.
        </Alert>
      )}
    </Grid>
  );
};

export default Step2;
