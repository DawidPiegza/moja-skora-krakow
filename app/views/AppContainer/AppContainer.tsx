import React, { useState } from "react";
import { Stack } from "@mui/material";
import Navbar from "../../shared/components/Navbar/Navbar";
import SideDrawer from "../../shared/components/SideDrawer/SideDrawer";

export default function AppContainer() {
  const [isSideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  return (
    <Stack width="100vw" height="100vh">
      <SideDrawer
        open={isSideDrawerOpen}
        setSideDrawerOpen={setSideDrawerOpen}
      />
      <Navbar setSideDrawerOpen={setSideDrawerOpen}></Navbar>
    </Stack>
  );
}
