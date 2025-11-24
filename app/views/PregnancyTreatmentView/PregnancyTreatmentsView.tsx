import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";
import { useNavigate } from "react-router";
import safe_treatments_for_pregnant_2 from "../../../public/images/safe_treatments_for_pregnant_2.jpg";

export default function PregnancyTreatmentsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  const dataLinks = [
    {
      linkName: "Oxygenating trio solo lub w połączeniu z maską Hydrate",
      linkNameENG: "Oxygenating Trio solo or combined with Hydrate mask",
      url: "/cosmetology/oxygenating_trio",
    },
    {
      linkName: `Autorski zabieg ProXN I stopnia - ”Zabieg regenerująco-kojący na twarz”`,
      linkNameENG: `ProXN Level I proprietary treatment - "Regenerating and soothing facial treatment"`,
      url: "/cosmetology/pro_xn",
    },
    {
      linkName: "Mezoterapia nanoigłowa NanoFrax",
      linkNameENG: "Nanofrax nano-needle mesotherapy",
      url: "/cosmetology/nanofrax_mesotherapy",
    },
    {
      linkName: "Lifting rzęs",
      linkNameENG: "Lash lift",
      url: "/eyebrow_and_eyelash_styling/lash_lift",
    },
    {
      linkName: "Regulacja brwi + koloryzacja",
      linkNameENG: "Eyebrow shaping + tinting",
      url: "/eyebrow_and_eyelash_styling/eyebrow_lamination",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1} paddingTop={2} paddingBottom={"60px"}>
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
              {language.webLanguage === "PL"
                ? "Bezpieczne zabiegi dla kobiet w ciąży i kobiet karmiących"
                : "Safe treatments for pregnant and breastfeeding women"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} paddingTop={downMd ? 3 : 4} px={2}>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "Bezpieczne zabiegi dla kobiet w ciąży i kobiet karmiących".toUpperCase()
              : "Safe treatments for pregnant and breastfeeding women".toUpperCase()}
          </Typography>
        </Grid>
        <Grid container size={12} spacing={5} paddingBottom={2} paddingTop={5}>
          <Grid size={downMd ? 12 : 5} px={2}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              src={safe_treatments_for_pregnant_2}
            />
          </Grid>
          <Grid
            size={downMd ? 12 : 7}
            px={2}
            container
            direction={"column"}
            rowGap={4}
          >
            <Grid size={12}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width="100%"
                gutterBottom
              >
                {language.webLanguage !== "PL"
                  ? "Pregnancy and later breastfeeding are moments in a woman's life when everything is dedicated to caring for the little one. However, this does not mean that you have to give up professional skincare. In our clinic, we have created a special selection of treatments designed to provide maximum safety and comfort for you and your baby – while remaining fully effective."
                  : "Ciąża i późniejsze karmienie piersią to momenty w życiu kobiety, kiedy wszystko podporządkowane jest trosce o maluszka. Nie oznacza to jednak, że musisz rezygnować z profesjonalnej pielęgnacji skóry. W naszym gabinecie stworzyliśmy specjalną ofertę zabiegów dobranych tak, by zapewniać maksimum bezpieczeństwa i komfortu Tobie oraz Twojemu dziecku – a przy tym w pełni skuteczne."}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} container direction={"column"} rowGap={0.5}>
              <Grid size={12} paddingBottom={2}>
                <Typography
                  variant={downMd ? "body1" : "h6"}
                  textAlign="left"
                  sx={{ fontWeight: "200" }}
                  width={"100%"}
                  fontStyle="italic"
                  gutterBottom
                >
                  {language.webLanguage === "PL"
                    ? " LISTA ZABIEGÓW BEZPIECZNYCH DLA KOBIET W CIĄŻY I KOBIET KARMIĄCYCH:"
                    : "LIST OF SAFE TREATMENTS FOR PREGNANT AND BREASTFEEDING WOMEN:"}
                </Typography>
              </Grid>
              {dataLinks.map((link, index) => (
                <Grid key={index} size={12}>
                  <Button
                    onClick={() => navigate(link.url)}
                    fullWidth
                    variant="text"
                    color="inherit"
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      textAlign: "left",
                      p: 1,
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      component="span"
                      variant={downMd ? "body2" : "body1"}
                    >
                      {language.webLanguage === "PL"
                        ? link.linkName
                        : link.linkNameENG}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12}>
              <Typography
                variant={"caption"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "Pamiętaj: każda ciąża jest inna. Jeżeli masz jakiekolwiek wątpliwości, skonsultuj plan pielęgnacji ze swoim lekarzem prowadzącym. Podczas konsultacji chętnie przygotujemy dla Ciebie indywidualny plan zabiegów odpowiadający Twojemu samopoczuciu i potrzebom skóry w kolejnych trymestrach oraz podczas karmienia."
                  : "Remember: every pregnancy is different. If you have any doubts, consult your care plan with your attending doctor. During the consultation, we will be happy to prepare an individual treatment plan tailored to your well-being and skin needs in the following trimesters and during breastfeeding."}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        width="100%"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        component={Paper}
        zIndex={11}
        elevation={1}
      >
        <BottomNavigation sx={{ width: "100%" }} showLabels>
          <BottomNavigationAction
            component="a"
            href="https://www.facebook.com/people/Moja-Sk%C3%B3ra-Kosmetologia-Makija%C5%BC-permanentny/61561822193882/"
            target="_blank"
            rel="noopener noreferrer"
            label="Facebook"
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://maps.app.goo.gl/DthUc2eKTyvEEHFN8?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            label="Google"
            icon={<GoogleIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://www.instagram.com/mojaskora.krakow/"
            target="_blank"
            rel="noopener noreferrer"
            label="Instagram"
            icon={<InstagramIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
