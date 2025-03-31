import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import React from "react";

interface ISideDrawerProps {
  open: boolean;
  setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideDrawer({
  open,
  setSideDrawerOpen,
}: ISideDrawerProps) {
  const menuItems = [
    {
      name: "Strona Główna",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Ofeta",
      link: "/",
      icon: <LocalOfferIcon />,
    },
    {
      name: "Cennik",
      link: "/",
      icon: <ContactPageIcon />,
    },
    {
      name: "Kontakt",
      link: "/",
      icon: <ContactPageIcon />,
    },
  ];

  return (
    <Drawer open={open} onClose={() => setSideDrawerOpen(false)}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
              <Divider variant="middle" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
