import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import { WebsiteLanguageContext } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router";
import TranslateIcon from "@mui/icons-material/Translate";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import booksy_logo from "../../../../public/images/booksy_logo.png";
import booksy_icon from "../../../../public/images/booksy_icon.svg";

import ShopIcon from "@mui/icons-material/Shop";

interface ISideDrawerProps {
  open: boolean;
  setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideDrawer({
  open,
  setSideDrawerOpen,
}: ISideDrawerProps) {
  const { language, setPL_Language, setENG_Language } = React.useContext(
    WebsiteLanguageContext
  )!;
  const navTo = useNavigate();
  const [languageMenuOpen, setLanguageMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: language.webLanguage === "PL" ? "Strona Główna" : "Main Page",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: language.webLanguage === "PL" ? "O Nas" : "About Us",
      link: "/our_team",
      icon: <ContactPageIcon />,
    },
    {
      name: language.webLanguage === "PL" ? "Voucher" : "Voucher",
      link: "/voucher",
      icon: <CardGiftcardIcon />,
    },
    {
      name: language.webLanguage === "PL" ? "Cennik" : "Price list",
      link: "/price_list",
      icon: <LocalOfferIcon />,
    },
    {
      name: language.webLanguage === "PL" ? "Kontakt" : "Contact",
      link: "/contact",
      icon: <CallIcon />,
    },
  ];

  return (
    <Drawer open={open} onClose={() => setSideDrawerOpen(false)}>
      <Box
        sx={{ width: 250, height: "100%" }}
        role="presentation"
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                onClick={() => {
                  navTo(item.link);
                  setSideDrawerOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                setLanguageMenuOpen(!languageMenuOpen);
              }}
            >
              <ListItemIcon>
                <TranslateIcon />
              </ListItemIcon>
              <ListItemText
                primary={language.webLanguage === "PL" ? "Język" : "Language"}
              />
            </ListItemButton>
          </ListItem>

          {languageMenuOpen && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setPL_Language();
                    setSideDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="Polski" sx={{ pl: 4 }} />
                </ListItemButton>
              </ListItem>
              {languageMenuOpen && <Divider variant="middle" />}

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setENG_Language();
                    setSideDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="English" sx={{ pl: 4 }} />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
        <ButtonBase
          href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow#ba_s=seo"
          target="_blank"
          sx={{
            paddingY: 2,
            paddingX: 1,
            marginX: 3,
            marginBottom: 15,
            borderRadius: 1,
            transition: "background-color 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
            },
            outline: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          <Box
            component="img"
            src={booksy_logo}
            alt="logo booksy"
            height={"16px"}
          />
        </ButtonBase>
      </Box>
    </Drawer>
  );
}
