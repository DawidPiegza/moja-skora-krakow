import { Box, Divider, Stack } from "@mui/material";
import LandingPageView from "../LandingPageView/LandingPageView";
import OurCompanyView from "../OurCompanyView/OurCompanyView";
import ServiceCategories from "../ServiceCategoriesView/ServiceCategories";
import OurBrandsView from "../OurBrandsView/OurBrandsView";
import VoucherView from "../VoucherView/VoucherView";
import OpinionsView from "../OpinionsView/OpinionsView";
import FooterView from "../FooterView/FooterView";

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
      <Divider />
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
  );
}
