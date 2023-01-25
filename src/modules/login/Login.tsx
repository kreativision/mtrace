import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { APP_TITLE } from "../../constants/app";
import { User } from "../../types/user";
import { loginSchema } from "../../utils/login.validator";

type LoginFormFields = Pick<User, "email" | "password">;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormFields>({
    mode: "onBlur",
    shouldFocusError: true,
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormFields> = async (values) => {
    console.log(values);
  };

  return (
    <Container
      maxWidth="md"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        padding: [1, 2],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">{APP_TITLE}</Typography>
      <Typography variant="body1">Login to your account</Typography>

      <Stack spacing={3} justifyContent="center" marginTop={2}>
        <TextField
          {...register("email")}
          label="Email Address"
          fullWidth
          required
          autoFocus
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          label="Password"
          fullWidth
          required
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />
        <Button variant="contained" disabled={!isValid}>
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
