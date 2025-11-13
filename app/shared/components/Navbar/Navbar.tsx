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
import booksy_icon from "../../../../public/images/booksy_icon.svg";

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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
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
                    src={booksy_icon}
                    alt="logo booksy"
                    height={"25px"}
                    onClick={() =>
                      window.open(
                        "https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow",
                        "_blank"
                      )
                    }
                  />
                </ButtonBase>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => setSideDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </React.Fragment>
  );
}
