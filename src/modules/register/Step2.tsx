import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useFormContext } from "react-hook-form";
import { QUESTIONS } from "../../constants/questions";
import { User } from "../../types/user";

const Step2: React.FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
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
        select
        fullWidth
        required
        autoFocus
        defaultValue=""
        label="Select Question"
        error={errors.securityQuestion?.question ? true : false}
        helperText={errors.securityQuestion?.question?.message}
      >
        {QUESTIONS.map((q, i) => (
          <MenuItem
            key={i}
            value={q}
            selected={getValues("securityQuestion.question") === q}
          >
            <ListItemText sx={{ whiteSpace: "break-spaces" }}>{q}</ListItemText>
          </MenuItem>
        ))}
      </TextField>
      <TextField
        {...register("securityQuestion.answer")}
        label="Answer"
        fullWidth
        required
        error={errors.securityQuestion?.answer ? true : false}
        helperText={errors.securityQuestion?.answer?.message}
      />
      {(errors.name ||
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
