import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import LoginForm from "../LoginForm"

function LoginPage() {
  const auth = useContext(AuthContext);

  let navigate = useNavigate;
  let from = navigate.state?.from?.pathname || "/";
  const cb = () => {
    navigate(from, { replace: true });
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        overflow: "scroll",
        position: "absolute",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 360,
        color: "white",
        bgcolor: "#757C86",
        boxShadow: 24,
        p: 4,
        "@media (max-width: 375px)": {
          width: 320,
        },
      }}
    >
      <LoginForm callback={cb}/>
      
    </Stack>
  );
}

export default LoginPage;
