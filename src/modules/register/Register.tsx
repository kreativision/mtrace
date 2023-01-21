import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Divider, MobileStepper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Suspense, useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import { registerSchema } from "../../utils/validators/register";

const Register: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  const onSubmit: SubmitHandler<User> = async (values) => {
    console.log(values);
    form.reset();
    navigate("step-2", { state: { completed: true } });
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
              <Button
                type="submit"
                size="small"
                disabled={!form.formState.isValid}
              >
                Sign Up
              </Button>
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
