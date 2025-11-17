import { Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import OpinionsView from "../OpinionsView/OpinionsView";
import FooterView from "../FooterView/FooterView";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../shared/components/Navbar/Navbar";
import SideDrawer from "../../shared/components/SideDrawer/SideDrawer";

export default function AppContainer() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <Navbar setSideDrawerOpen={setSideDrawerOpen} />
      <SideDrawer
        open={isSideDrawerOpen}
        setSideDrawerOpen={setSideDrawerOpen}
      />
      {!isLoading && (
        <Stack width="100vw" height="max-content" rowGap={2}>
          <LandingPageView />
          <ServiceCategories />
          <Divider />
          <OurBrandsView />
          <Divider />
          <OpinionsView />
          <Divider />
          <Stack
            width="100vw"
            height="max-content"
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <FooterView />
          </Stack>
        </Stack>
      )}
    </React.Fragment>
  );
}
