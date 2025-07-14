import { Box, Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import OurCompanyView from "../OurCompanyView/OurCompanyView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import VoucherView from "../VoucherView/VoucherView";
import OpinionsView from "../OpinionsView/OpinionsView";
import FooterView from "../FooterView/FooterView";
import { useEffect, useState } from "react";
import React from "react";

export default function AppContainer() {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <Stack width="100vw" height="max-content" rowGap={3}>
          <LandingPageView />
          <OurCompanyView />
          <Divider />
          <ServiceCategories />
          <Divider />
          <VoucherView />
          <Divider />
          <OurBrandsView />
          <Divider />
          <OpinionsView />
          <Stack
            width="100vw"
            height="max-content"
            bgcolor="primary.main"
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
