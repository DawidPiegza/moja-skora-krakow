import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("views/AppContainer/AppContainer.tsx"),
  route("/our_team", "./views/AboutUsView/AboutUsView.tsx"),
  route("/price_list", "./views/PriceListView/PriceListView.tsx"),
  route("/contact", "./views/ContactView/ContactView.tsx"),
  route("/statute", "./views/StatueView/StatueView.tsx"),
  route("/voucher_statute", "./views/VoucherStatueView/VoucherStatueView.tsx"),
] satisfies RouteConfig;
