import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import sygnet_wektorowy from "../../../../public/images/sygnet_wektorowy.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { WebsiteLanguageContext } from "../../contexts/LanguageContext";
import LanguageMenu from "./components/LanguageMenu/LanguageMenu";
import booksy_logo from "../../../../public/images/booksy_logo.png";

interface INavbarProps {
  setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSideDrawerOpen }: INavbarProps) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const { language } = React.useContext(WebsiteLanguageContext)!;

  const [isLoading, setLoading] = useState<boolean>(true);
  const navTo = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <AppBar position="sticky" color="inherit" elevation={1}>
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonBase
                onClick={() => navTo("/")}
                sx={{
                  padding: 1,
                  borderRadius: "10px",
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={sygnet_wektorowy}
                  alt="logo booksy"
                  height={downMd ? "30px" : "40px"}
                />
              </ButtonBase>
              {!downMd && (
                <Box>
                  <Button color="inherit" onClick={() => navTo("/")}>
                    {language.webLanguage === "PL"
                      ? "Strona Główna"
                      : "Main Page"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("our_team")}>
                    {language.webLanguage === "PL" ? "O Nas" : "About Us"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("/voucher")}>
                    {language.webLanguage === "PL" ? "Voucher" : "Voucher"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("/price_list")}>
                    {language.webLanguage === "PL" ? "Cennik" : "Price List"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("contact")}>
                    {language.webLanguage === "PL" ? "Kontakt" : "Contact"}
                  </Button>
                  <ButtonBase
                    href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow#ba_s=seo"
                    target="_blank"
                    sx={{
                      marginLeft: 1,
                      paddingY: "10px",
                      paddingX: "10px",
                      borderRadius: 1,
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                      },
                      outline: "1px solid rgba(0,0,0,0.3)", // standardowy outlin
                    }}
                  >
                    <Box
                      component="img"
                      src={booksy_logo}
                      alt="logo booksy"
                      height={"16px"}
                    />
                  </ButtonBase>
                  <LanguageMenu />
                </Box>
              )}
              {downMd && (
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => setSideDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </React.Fragment>
  );
}
