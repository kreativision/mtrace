import { CheckCircleTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

const Step3: React.FC = () => {
  const { state } = useLocation();

  return state ? (
    <Stack spacing={3} justifyContent="center" sx={{ height: "100%" }}>
      <Typography textAlign="center">
        <CheckCircleTwoTone color="success" sx={{ fontSize: "12rem" }} />
      </Typography>
      <Typography variant="h5" color="green" textAlign="center">
        Success
      </Typography>
      <Typography variant="body1" textAlign="center">
        {state.message}
      </Typography>
      <Button component={Link} to="/login" size="large">
        Login
      </Button>
    </Stack>
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default Step3;
