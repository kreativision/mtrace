import React from "react";
import { useLocation } from "react-router-dom";

const Step3: React.FC = () => {
  const { state } = useLocation();
  console.log(state);

  return <div>Some text</div>;
};

export default Step3;
