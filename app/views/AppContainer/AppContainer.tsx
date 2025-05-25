import { useState } from "react";
import { Divider, Stack } from "@mui/material";
import Navbar from "../../shared/components/Navbar/Navbar";
import SideDrawer from "../../shared/components/SideDrawer/SideDrawer";
import LandingPageView from "../LandingPageView/LandingPageView";
import OfferView from "../OfferView/OfferView";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import VoucherView from "../VoucherView/VoucherView";

export default function AppContainer() {
  return (
    <Stack width="100vw" height="100vh">
      <LandingPageView />
      <OfferView />
      <Divider variant="middle" sx={{ bgcolor: "text.primary" }} />
      <OurBrandsView />
      <Divider variant="middle" sx={{ bgcolor: "text.primary" }} />
      <VoucherView />
    </Stack>
  );
}
