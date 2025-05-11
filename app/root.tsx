import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/styles/MUIGlobalStyle";

import "./app.css";
import { useState } from "react";
import SideDrawer from "./shared/components/SideDrawer/SideDrawer";
import Navbar from "./shared/components/Navbar/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isSideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <SideDrawer
        open={isSideDrawerOpen}
        setSideDrawerOpen={setSideDrawerOpen}
      />
      <Navbar setSideDrawerOpen={setSideDrawerOpen} />
      <Outlet />
    </ThemeProvider>
  );
}
