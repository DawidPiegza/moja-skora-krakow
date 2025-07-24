import {
  AppBar,
  Box,
  Button,
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
        <AppBar position="sticky" color="inherit">
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                component="img"
                src={sygnet_wektorowy}
                alt="logo booksy"
                height={downMd ? "30px" : "40px"}
              />
              {!downMd && (
                <Box>
                  <Button color="inherit" onClick={() => navTo("/")}>
                    {language.webLanguage === "PL"
                      ? "Strona Główna"
                      : "Main Page"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("/")}>
                    {language.webLanguage === "PL" ? "Zabiegi" : "Treatments"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("our_team")}>
                    {language.webLanguage === "PL" ? "Nasz zespół" : "Our Team"}
                  </Button>
                  <Button color="inherit" onClick={() => navTo("contact")}>
                    {language.webLanguage === "PL" ? "Kontakt" : "Contact"}
                  </Button>
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
