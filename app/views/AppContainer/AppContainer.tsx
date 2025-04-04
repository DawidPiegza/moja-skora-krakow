import { useState } from "react";
import { Stack } from "@mui/material";
import Navbar from "../../shared/components/Navbar/Navbar";
import SideDrawer from "../../shared/components/SideDrawer/SideDrawer";
import LandingPageView from "../LandingPageView/LandingPageView";
import OfferView from "../OfferView/OfferView";
import OurBrandsView from "../OurBrandsView/OurBrandsView";

export default function AppContainer() {
  const [isSideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  return (
    <Stack width="100vw" height="100vh">
      <SideDrawer
        open={isSideDrawerOpen}
        setSideDrawerOpen={setSideDrawerOpen}
      />
      <Navbar setSideDrawerOpen={setSideDrawerOpen} />
      <LandingPageView />
      <OfferView />
      <OurBrandsView />
    </Stack>
  );
}
