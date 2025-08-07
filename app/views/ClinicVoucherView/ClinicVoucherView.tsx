import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import voucher_image from "../../../public/images/voucher_image.jpeg";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function ClinicVoucherView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={(theme) => ({
                color: "text.secondary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              {language.webLanguage === "PL" ? "Strona Główna" : "Main Page"}
            </Link>
            <Typography
              sx={(theme) => ({
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              {language.webLanguage === "PL" ? "Voucher" : "Voucher"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container spacing={5} paddingY={2} alignItems={"stretch"}>
          <Grid size={12} container>
            <Grid
              size={downMd ? 12 : 6}
              display="flex"
              flexDirection="column"
              alignItems={downMd ? "center" : "flex-start"}
              justifyContent="center"
            >
              <SectionTitle
                alignTextTo={downMd ? "left" : "left"}
                title={
                  language.webLanguage === "PL"
                    ? "Podaruj bliskiej osobie wyjątkowy prezent"
                    : "Give your loved one a truly special gift"
                }
              />
              <Typography
                align="left"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
                marginTop={2}
              >
                {language.webLanguage === "PL" &&
                  "Voucher podarunkowy to coś więcej niż upominek - podaruj czas dla siebie, chwilę relaksu i profesjonalną pielęgnację dopasowaną do indywidualnych potrzeb."}

                {language.webLanguage === "ENG" &&
                  `A gift voucher is more than just a present – it’s time for self-care, a moment of relaxation, and professional skincare tailored to individual needs.`}
              </Typography>
              <Typography
                align="left"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL" &&
                  "To forma prezentu, która realnie wpływa na dobre samopoczucie – zarówno fizyczne, jak i emocjonalne. Efekty widać na zewnątrz w postaci zdrowszej, promiennej skóry, ale też czuć je wewnętrznie – w większym komforcie i pewności siebie."}
                {language.webLanguage === "ENG" &&
                  "It’s a form of a gift that genuinely enhances well-being – both physical and emotional. The effects are visible on the outside as healthier, more radiant skin, and felt on the inside as increased comfort and self-confidence."}
              </Typography>
              <Typography
                align="left"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL" &&
                  "Nasz voucher można zrealizować na dowolnie wybrane usługi: od konsultacji kosmetologicznej i analizy skóry, przez zabiegi pielęgnacyjne, aż po indywidualnie dobraną terapię. Dostępna jest również opcja vouchera kwotowego – osoba obdarowana sama zdecyduje, na co go wykorzysta."}
                {language.webLanguage === "ENG" &&
                  "Our voucher can be used for any chosen service – from a skin consultation and analysis to advanced skincare treatments or a personalized therapy plan. A value-based voucher option is also available, allowing the recipient to decide how they would like to use it."}
              </Typography>
              <Typography
                align="left"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "ENG" &&
                  "It’s a universal, elegant gift for any occasion – for women, men, and anyone who deserves a moment of care and attention."}
                {language.webLanguage === "PL" &&
                  "To uniwersalny, elegancki prezent na każdą okazję – dla kobiety, dla mężczyzny, dla każdego, kto zasługuje na chwilę dla siebie."}
              </Typography>
              <Typography
                align="left"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "ENG" &&
                  "Details regarding purchase, delivery, and redemption of the voucher can be found in the "}
                {language.webLanguage === "PL" &&
                  "Szczegółowe zasady zakupu, wysyłki oraz wykorzystania Vouchera znajdują się w "}
              </Typography>
              <Button
                size="small"
                variant="text"
                sx={{ color: "secondary.main" }}
                onClick={() => navigate("/voucher_statute")}
              >
                {language.webLanguage === "ENG"
                  ? "Terms & Conditions"
                  : "Regulaminie"}
              </Button>
            </Grid>
            <Grid size={downMd ? 12 : 6}>
              <Card sx={{ width: "100%", height: "auto" }}>
                <CardMedia
                  component="img"
                  alt="voucher_image"
                  height="max-content"
                  image={voucher_image}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        width="100%"
        position="absolute"
        bottom="1px"
        left={"0px"}
        component={Paper}
        variant="elevation"
      >
        <BottomNavigation sx={{ width: "100%" }} showLabels>
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
