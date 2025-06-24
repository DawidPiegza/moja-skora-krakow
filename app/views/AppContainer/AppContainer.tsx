import { Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import OurCompanyView from "../OurCompanyView/OurCompanyView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";

export default function AppContainer() {
  return (
    <Stack width="100vw" height="max-content" rowGap={3}>
      <LandingPageView />
      <OurCompanyView />
      <Divider />
      <Divider orientation="vertical" flexItem />
      <ServiceCategories />
    </Stack>
  );
}
