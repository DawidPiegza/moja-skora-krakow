import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/styles/MUIGlobalStyle";
import "./app.css";
import { useState } from "react";
import SideDrawer from "./shared/components/SideDrawer/SideDrawer";
import Navbar from "./shared/components/Navbar/Navbar";
import WebsiteLanguageProvider from "./shared/contexts/LanguageContext";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Moja Skóra Kosmetologia • Makijaż permanentny</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Moja Skóra to miejsce, w którym wiedza spotyka się z troską o Twoją skórę. Pracujemy w oparciu o doświadczenie i świadome terapie. Zawsze indywidualnie, z uważnością i szacunkiem dla potrzeb skóry. Wierzymy, że zdrowa skóra to proces, a naszą estetykę budujemy na naturalnych efektach, dlatego każdy etap prowadzimy z pełnym zaangażowaniem. Tutaj zaczyna się Twoja droga do promiennej, zadbanej cery."
        />
        <meta name="geo.placename" content="Kraków" />
        <meta name="geo.region" content="PL-MA" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Moja Skóra Kosmetologia • Makijaż permanentny"
        />
        <meta property="og:url" content="https://mojaskora.com/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:locale:alternate" content="en_US" />
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
      <WebsiteLanguageProvider>
        {typeof window !== "undefined" && window.location.pathname !== "/" && (
          <>
            <Navbar setSideDrawerOpen={setSideDrawerOpen} />
            <SideDrawer
              open={isSideDrawerOpen}
              setSideDrawerOpen={setSideDrawerOpen}
            />
          </>
        )}
        <Outlet />
      </WebsiteLanguageProvider>
    </ThemeProvider>
  );
}
