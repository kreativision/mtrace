import React from "react";
import { Route, Routes } from "react-router-dom";

// Register Routes
const Register = React.lazy(() => import("../register/Register"));
const RStep1 = React.lazy(() => import("../register/Step1"));
const RStep2 = React.lazy(() => import("../register/Step2"));
const RStep3 = React.lazy(() => import("../register/Step3"));

// TODO: Other Routes

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />}>
        <Route index element={<RStep1 />} />
        <Route path="step-0" element={<RStep1 />} />
        <Route path="step-1" element={<RStep2 />} />
        <Route path="step-2" element={<RStep3 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
