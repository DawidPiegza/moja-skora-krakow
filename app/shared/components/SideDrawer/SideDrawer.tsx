import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
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
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { serviceCategoriesList } from "../../../views/ServiceCategoriesView/data/serviceCategoriesList";

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
  const [isServicesListOpen, setIsServicesListOpen] = React.useState(false);

  const handleClick = () => {
    setIsServicesListOpen(!isServicesListOpen);
  };

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
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                language.webLanguage === "PL" ? "Lista zabiegów" : "Treatments"
              }
            />
            {isServicesListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isServicesListOpen} timeout="auto" unmountOnExit>
            <List component="div">
              {serviceCategoriesList.map((category, index) => (
                <React.Fragment key={index}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      setSideDrawerOpen((prev) => !prev);
                      setIsServicesListOpen((prev) => !prev);
                      navTo(category.categoryURL);
                    }}
                  >
                    <ListItemText
                      primary={
                        language.webLanguage === "PL"
                          ? category.title
                          : category.titleENG
                      }
                    />
                  </ListItemButton>
                  <Divider variant="middle" />
                </React.Fragment>
              ))}
            </List>
          </Collapse>
          <ListItemButton onClick={() => setLanguageMenuOpen((prev) => !prev)}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.webLanguage === "PL" ? "Język" : "Language"}
            />
            {languageMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={languageMenuOpen} timeout="auto" unmountOnExit>
            <List component="div">
              {[
                {
                  title: "Polski",
                  titleENG: "Polish",
                  setLanguageFunction: setPL_Language,
                },
                {
                  title: "English",
                  titleENG: "English",
                  setLanguageFunction: setENG_Language,
                },
              ].map((category, index) => (
                <React.Fragment key={index}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      category.setLanguageFunction();
                    }}
                  >
                    <ListItemText
                      primary={
                        language.webLanguage === "PL"
                          ? category.title
                          : category.titleENG
                      }
                    />
                  </ListItemButton>
                  <Divider variant="middle" />
                </React.Fragment>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
}
