import React from "react";
import { Stack } from "@mui/material";
import Navbar from "../../shared/components/Navbar/Navbar";

export default function AppContainer() {
  return (
    <Stack width="100vw" height="100vh" bgcolor="yellow">
      <Navbar></Navbar>
    </Stack>
  );
}
