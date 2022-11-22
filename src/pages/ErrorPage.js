import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      ErrorPage
      <Button variant="dark" onClick={() => navigate("/", { replace: true })}>
        Back
      </Button>
    </div>
  );
};
