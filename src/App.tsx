import { Box, Typography } from "@mui/material";
import React from "react";

const App: React.FC = () => {
  return (
    <Box className="App">
      <Box component="header" className="App-header">
        <Typography paragraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Typography
          component="a"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
