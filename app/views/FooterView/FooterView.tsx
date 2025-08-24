import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import sygnet_wektorowy from "../../../public/images/sygnet_wektorowy.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
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
        container
        width={"100%"}
        rowSpacing={domwMd ? 1 : 2}
        paddingBottom={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid>
          <Box
            component="img"
            src={sygnet_wektorowy}
            alt="Moja Skóra"
            sx={{ width: "auto", height: domwMd ? "40px" : "70px" }}
          />
        </Grid>
        <Grid
          display="flex"
          size={domwMd && 12}
          flexDirection="column"
          textAlign="left"
          alignItems={domwMd ? "center" : "auto"}
        >
          <Typography
            sx={{
              fontSize: domwMd ? "12px" : "13px",
            }}
            component={Button}
            color="text.primary"
            width="max-content"
            onClick={() => navigate("/statute")}
          >
            {language.webLanguage === "PL" ? "Regulamin" : "Terms & Conditions"}
          </Typography>
          <Typography
            sx={{
              fontSize: domwMd ? "12px" : "13px",
            }}
            component={Button}
            color="text.primary"
            width="max-content"
            onClick={() => navigate("/voucher_statute")}
          >
            {language.webLanguage === "PL"
              ? "Regulamin vouchera"
              : "Voucher Policy"}
          </Typography>
          <Typography
            sx={{
              fontSize: domwMd ? "12px" : "13px",
            }}
            component={Button}
            color="text.primary"
            width="max-content"
            onClick={() => navigate("/price_list")}
          >
            {language.webLanguage === "PL" ? "Cennik" : "Pricing"}
          </Typography>
          <Typography
            sx={{
              fontSize: domwMd ? "12px" : "13px",
            }}
            component={Button}
            color="text.primary"
            width="max-content"
            href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow"
          >
            Booksy
          </Typography>
        </Grid>
        {!domwMd && (
          <Grid>
            <Typography variant="body2" fontWeight={700}>
              {language.webLanguage === "PL" ? "Adres salonu" : "Address"}
            </Typography>
            <Typography variant="body2">
              Świętego Sebastiana 22/2C, 31-049 Kraków
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              {language.webLanguage === "PL"
                ? "Godziny otwarcia"
                : "Opening Hours"}
            </Typography>
            <Typography variant="body2">
              Pon - Pt: 8:00 – 21:00 oraz Sb: 8:00 – 16:00
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              {language.webLanguage === "PL"
                ? "Numer telefonu"
                : "Phone Number"}
            </Typography>
            <Typography variant="body1">518 456 332</Typography>
          </Grid>
        )}
        <Grid display={"flex"} flexDirection={domwMd ? "row" : "column"}>
          <IconButton
            size="large"
            sx={{ width: "max-content" }}
            href="https://www.facebook.com/people/Moja-Sk%C3%B3ra-Kosmetologia-Makija%C5%BC-permanentny/61561822193882/"
            target="blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{ width: "max-content" }}
            target="blank"
            href="https://www.instagram.com/mojaskora.krakow/"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{ width: "max-content" }}
            href="https://share.google/32LRhJnCcYcSInxw7"
            target="blank"
          >
            <GoogleIcon />
          </IconButton>
        </Grid>
        <Grid size={12} display={"flex"} justifyContent={"center"}>
          <Typography
            textAlign={"center"}
            variant="caption"
            fontWeight="bold"
            color="text.primary"
            width="max-content"
          >
            Copywright © 2025 – Moja Skóra Kosmetologia • Makijaż permanentny
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
