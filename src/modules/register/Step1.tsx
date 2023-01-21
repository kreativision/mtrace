import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { User } from "../../types/user";

const Step1: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<User>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      rowGap={3}
      paddingTop={2}
    >
      <Typography variant="h5">Basic Information</Typography>
      <TextField
        {...register("fullName")}
        label="Full Name"
        fullWidth
        required
        autoFocus
        error={errors.fullName ? true : false}
        helperText={errors.fullName?.message}
      />
      <TextField
        {...register("email")}
        label="Email Address"
        fullWidth
        required
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          error={errors.password ? true : false}
          {...register("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <FormHelperText error={true}>
            {errors.password?.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Confirm Password</InputLabel>
        <OutlinedInput
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          label="Confirm Password"
          error={errors.confirmPassword ? true : false}
          {...register("confirmPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.confirmPassword && (
          <FormHelperText error={true}>
            {errors.confirmPassword?.message}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};

export default Step1;
