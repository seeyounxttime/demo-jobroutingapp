import * as React from "react";
import Container from "@mui/material/Container";

function AppContainer(props) {
  return (
    <Container
      sx={{
        color: (theme) => theme.palette.background.paper,
        backgroundColor: "transparent",
        width: "90%",
        height: "90vh",
        minHeight: "80vh",
        maxWidth: "100vw",
        display: "block",
        flexDirection: "row",
        justifyContent: "center",
        mt: -3,
      }}
      disableGutters
      {...props}
    />
  );
}

export default AppContainer;
