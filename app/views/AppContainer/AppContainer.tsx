import { Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
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
