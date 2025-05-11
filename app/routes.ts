import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("views/AppContainer/AppContainer.tsx"),
  route("/about_us", "./views/AboutUsView/AboutUsView.tsx"),
] satisfies RouteConfig;
