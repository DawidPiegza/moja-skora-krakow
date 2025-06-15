import { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import Navbar from "../../shared/components/Navbar/Navbar";
import SideDrawer from "../../shared/components/SideDrawer/SideDrawer";
import LandingPageView from "../LandingPageView/LandingPageView";
import OfferView from "../OfferView/OfferView";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import VoucherView from "../VoucherView/VoucherView";
import OpinionsView from "../OpinionsView/OpinionsView";
import OurCompanyView from "../OurCompanyView/OurCompanyView";

export default function AppContainer() {
  return (
    <Stack width="100vw" height="100vh">
      <LandingPageView />
      <OurCompanyView />
      <Box
        sx={{ bgcolor: "secondary.main" }}
        width="100vw"
        height="max-content"
      >
        <OurBrandsView />
      </Box>
      <VoucherView />
      <Divider variant="middle" sx={{ bgcolor: "text.primary" }} />
      <OpinionsView />
    </Stack>
  );
}
