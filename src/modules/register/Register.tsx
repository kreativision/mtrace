import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { Suspense, useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../hooks/api/auth";
import { User } from "../../types/user";
import { registerSchema } from "../../utils/register.validator";

const Register: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const activeStep = useMemo<number>(() => {
    return pathname.includes("step")
      ? parseInt(pathname.charAt(pathname.length - 1))
      : 0;
  }, [pathname]);

  const form = useForm<User>({
    mode: "onBlur",
    shouldFocusError: true,
    resolver: yupResolver(registerSchema),
  });

  const { mutate: registerUser, isLoading: registering } = useRegisterUser({
    onSuccess: (res) => {
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate("step-2", {
        state: { completed: true, message: res.data.message },
      });
      form.reset();
    },
    // TODO: not getting type info here for some reason.
    // onError: (err) => {
    //   enqueueSnackbar(err.response)
    // }
  });

  const onSubmit: SubmitHandler<User> = async (values) => {
    registerUser(values);
  };

  const handleNext = (): void => {
    navigate(`/register/step-${activeStep + 1}`);
  };

  const handlePrev = (): void => {
    navigate(`/register/step-${activeStep - 1}`);
  };

  return (
    <Container
      maxWidth="md"
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        padding: [1, 2],
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h4">MTrace</Typography>
      <Typography variant="body1">Create a New Account</Typography>
      <Divider sx={{ margin: "1rem 0 0 0" }} />
      <Box sx={{ flexGrow: 1, overflow: "auto", margin: "0.5rem 0" }}>
        <FormProvider {...form}>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </FormProvider>
      </Box>
      {activeStep !== 2 && (
        <MobileStepper
          position="static"
          variant="dots"
          steps={2}
          activeStep={activeStep}
          sx={{ padding: 0 }}
          backButton={
            <Button
              size="small"
              onClick={handlePrev}
              disabled={[0, 2].includes(activeStep)}
              sx={{ visibility: activeStep === 0 ? "hidden" : "" }}
            >
              Back
            </Button>
          }
          nextButton={
            activeStep === 1 ? (
              <LoadingButton
                type="submit"
                size="small"
                disabled={!form.formState.isValid}
                loading={registering}
                loadingPosition="center"
              >
                {!registering && "Sign Up"}
              </LoadingButton>
            ) : (
              <Button size="small" onClick={handleNext}>
                Next
              </Button>
            )
          }
        />
      )}
    </Container>
  );
};

export default Register;
