import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import AppRoutes from "./modules/router/AppRoutes";

const App: React.FC = () => {
  return (
    <Box className="App">
      {/* TODO: Make this global loading look better */}
      <Suspense fallback={<CircularProgress size={100} />}>
        <AppRoutes />
      </Suspense>
    </Box>
  );
};

export default App;
