import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Button,
  Stack,
  IconButton,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import sygnet_wektorowy from "../../../public/images/sygnet_wektorowy.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import booksy_logo_black from "../../../public/images/booksy_logo_black.png";
import { useNavigate } from "react-router";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

import React from "react";

export default function FooterView() {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();
  const { language } = React.useContext(WebsiteLanguageContext)!;

  return (
    <Container maxWidth="xl">
      <Grid
        size={12}
        container
        paddingBottom={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid size={1}>
          <Box
            component="img"
            src={sygnet_wektorowy}
            alt="Moja Skóra"
            sx={{ width: "auto", height: "100px" }}
          />
        </Grid>
        <Grid size={3}>
          <Typography variant="body1" fontWeight="bold">
            {language.webLanguage === "PL" ? "Adres salonu" : "Address"}
          </Typography>
          <Typography variant="body2">
            Świętego Sebastiana 22/2C, 31-049 Kraków
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {language.webLanguage === "PL"
              ? "Godziny otwarcia"
              : "Opening Hours"}
          </Typography>
          <Typography variant="body2">
            Pon - Pt: 8:00 – 21:00 oraz Sb: 8:00 – 16:00
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {language.webLanguage === "PL" ? "Numer telefonu" : "Phone Number"}
          </Typography>
          <Typography variant="body1">518 456 332</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
