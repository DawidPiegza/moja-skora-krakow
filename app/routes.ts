import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("views/AppContainer/AppContainer.tsx"),
  route("/our_team", "./views/AboutUsView/AboutUsView.tsx"),
  route("/price_list", "./views/PriceListView/PriceListView.tsx"),
  route("/contact", "./views/ContactView/ContactView.tsx"),
  route("/statute", "./views/StatueView/StatueView.tsx"),
  route("/voucher_statute", "./views/VoucherStatueView/VoucherStatueView.tsx"),
  route("/voucher", "./views/ClinicVoucherView/ClinicVoucherView.tsx"),
  route(
    "/cosmetology",
    "./views/CosmetologyCategoryView/CosmetologyCategoryView.tsx"
  ),
  route(
    "/pernament_makeup",
    "./views/PernamentMakeupCategoryView/PernamentMakeupCategoryView.tsx"
  ),
  route(
    "/cosmetology/dr_cyj_filler_mesotherapy",
    "./views/Cosmetology/DrCyjFillerView/DrCyjFillerView.tsx"
  ),
  route(
    "/cosmetology/hair_growth_mesotherapy",
    "./views/Cosmetology/HairGrowthMesotherapy/HairGrowthMesotherapy.tsx"
  ),
  route(
    "/cosmetology/needle_mesotherapy",
    "./views/Cosmetology/NeedleMesotherapyView/NeedleMesotherapyView.tsx"
  ),
  route(
    "/cosmetology/nanofrax_mesotherapy",
    "./views/Cosmetology/NanofraxMesotherapyView/NanofraxMesotherapyView.tsx"
  ),
  route(
    "/cosmetology/nanofrax_nano_needle_mesotherapy",
    "./views/Cosmetology/NanofraxNanoNeedleMesotherapy/NanofraxNanoNeedleMesotherapy.tsx"
  ),
  route(
    "/consultation",
    "./views/Consultation/ConsultationServiceView/ConsultationServiceView.tsx"
  ),
] satisfies RouteConfig;
