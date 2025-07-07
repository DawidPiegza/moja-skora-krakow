import { Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import OurCompanyView from "../OurCompanyView/OurCompanyView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import VoucherView from "../VoucherView/VoucherView";
import OpinionsView from "../OpinionsView/OpinionsView";

export default function AppContainer() {
  return (
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
    </Stack>
  );
}
