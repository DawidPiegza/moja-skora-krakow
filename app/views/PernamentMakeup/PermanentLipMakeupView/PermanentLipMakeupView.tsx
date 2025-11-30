import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import RepeatIcon from "@mui/icons-material/Repeat";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import permanent_lip_makeup_effect_0 from "../../../../public/images/permanent_lip_makeup_effect_0.png";
import permanent_lip_makeup_effect_3 from "../../../../public/images/permanent_lip_makeup_effect_3.jpg";
import permanent_lip_makeup_effect_4 from "../../../../public/images/permanent_lip_makeup_effect_4.jpg";
import permanent_lip_makeup_effect_11 from "../../../../public/images/permanent_lip_makeup_effect_11.png";
import permanent_lip_makeup_effect_2 from "../../../../public/images/permanent_lip_makeup_effect_2.png";
import permanent_lip_makeup_effect_5 from "../../../../public/images/permanent_lip_makeup_effect_5.png";
import permanent_lip_makeup_effect_6 from "../../../../public/images/permanent_lip_makeup_effect_6.png";
import permanent_lip_makeup_effect_7 from "../../../../public/images/permanent_lip_makeup_effect_7.png";
import permanent_lip_makeup_effect_8 from "../../../../public/images/permanent_lip_makeup_effect_8.png";
import permanent_lip_makeup from "../../../../public/images/permanent_lip_makeup.png";
import permanent_lip_makeup_2 from "../../../../public/images/permanent_lip_makeup_2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  permanentLipMakeupDataPL,
  permanentLipMakeupDataEN,
} from "./data/permanentLipMakeupData";

export default function PermanentLipMakeupView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingTop={2} paddingBottom={"80px"}>
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
              {language.webLanguage === "PL"
                ? "Makijaż permanentny"
                : "Permanent makeup"}
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
                ? "Makijaż permanentny ust"
                : "Permanent lip makeup"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} container>
          <Grid
            size={12}
            display="flex"
            justifyContent={"flex-start"}
            py={downMd ? 1 : 2}
          >
            <Typography
              gutterBottom
              width={"100%"}
              variant={"h4"}
              textAlign="left"
              sx={{ fontWeight: "350" }}
            >
              {language.webLanguage === "PL"
                ? "Makijaż permanentny ust".toUpperCase()
                : "Permanent lip makeup".toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12} container>
          <Grid size={downMd ? 12 : 4}>
            <Box
              p={1}
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              component={Paper}
              variant="outlined"
              textAlign="center"
              alignItems="center"
              rowGap={0.5}
              height={"100%"}
            >
              <AccessTimeIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? permanentLipMakeupDataPL.infoTable.timeOfTreatment
                  : permanentLipMakeupDataEN.infoTable.timeOfTreatment}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "CZAS TRWANIA ZABIEGU"
                  : "DURATION OF THE TREATMENT"}
              </Typography>
            </Box>
          </Grid>
          <Grid size={downMd ? 12 : 4}>
            <Box
              p={1}
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              component={Paper}
              variant="outlined"
              textAlign="center"
              alignItems="center"
              rowGap={0.5}
              height={"100%"}
            >
              <RepeatIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? permanentLipMakeupDataPL.infoTable.recommendedNumber
                  : permanentLipMakeupDataEN.infoTable.recommendedNumber}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "REKOMENDOWANA LICZBA ZABIEGÓW"
                  : "RECOMMENDED NUMBER OF TREATMENTS"}
              </Typography>
            </Box>
          </Grid>
          <Grid size={downMd ? 12 : 4}>
            <Box
              p={1}
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              component={Paper}
              variant="outlined"
              textAlign="center"
              alignItems="center"
              rowGap={0.5}
              height={"100%"}
            >
              <EventRepeatIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? permanentLipMakeupDataPL.infoTable.intervals
                  : permanentLipMakeupDataEN.infoTable.intervals}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "ODSTĘPY POMIĘDZY ZABIEGAMI"
                  : "INTERVALS BETWEEN TREATMENTS"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12} container p={1} alignItems={"stretch"}>
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: downMd ? "auto" : "100%",
                width: "auto",
              }}
              src={permanent_lip_makeup}
            />
          </Grid>
          <Grid size={downMd ? 12 : 8} p={1} container spacing={3}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
              >
                {language.webLanguage === "PL"
                  ? permanentLipMakeupDataPL.overview
                  : permanentLipMakeupDataEN.overview}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "Dla kogo przeznaczony jest zabieg makijażu permanentnego ust?".toUpperCase()
                  : "WHO IS THE PERMANENT LIP MAKEUP PROCEDURE FOR?".toUpperCase()}
              </Typography>
              {language.webLanguage === "PL" &&
                permanentLipMakeupDataPL.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
                    </Typography>
                  )
                )}
              {language.webLanguage === "ENG" &&
                permanentLipMakeupDataEN.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
                    </Typography>
                  )
                )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={8}
          display="flex"
          flexDirection={"column"}
          rowGap={2}
          justifyContent={"space-between"}
        >
          <Typography
            variant={downMd ? "body1" : "h6"}
            textAlign="left"
            sx={{ fontWeight: "200" }}
            width={"100%"}
            fontStyle="italic"
          >
            {language.webLanguage === "PL"
              ? "JAK PRZEBIEGA ZABIEG?"
              : "HOW DOES THE TREATMENT WORK?"}
          </Typography>
          {language.webLanguage === "PL" &&
            permanentLipMakeupDataPL.courseOfTreatment.map((item, index) => (
              <React.Fragment key={index}>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                >
                  {index + 1}. {item.title}
                </Typography>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  fontWeight={300}
                >
                  {item.description}
                </Typography>
              </React.Fragment>
            ))}
          {language.webLanguage === "ENG" &&
            permanentLipMakeupDataEN.courseOfTreatment.map((item, index) => (
              <React.Fragment key={index}>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                >
                  {index + 1}. {item.title}
                </Typography>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  fontWeight={300}
                >
                  {item.description}
                </Typography>
              </React.Fragment>
            ))}
        </Grid>
        <Grid size={downMd ? 12 : 4}>
          <Box
            component="img"
            sx={{
              height: downMd ? "auto" : "100%",
              width: "auto",
            }}
            src={permanent_lip_makeup_2}
          />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} p={1} container spacing={3}>
          <Grid
            size={downMd ? 12 : 5}
            display="flex"
            flexDirection={"column"}
            rowGap={2}
          >
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL"
                ? "PRZECIWWSKAZANIA BEZWZGLĘDNE:"
                : "ABSOLUTE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.contraindications.absolute.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.contraindications.absolute.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
          </Grid>
          {downMd && (
            <Grid size={12}>
              <Divider />
            </Grid>
          )}
          {!downMd && (
            <Grid size={2} display={"flex"} justifyContent={"center"}>
              <Divider orientation="vertical" />
            </Grid>
          )}
          <Grid
            size={downMd ? 12 : 5}
            display="flex"
            flexDirection={"column"}
            rowGap={2}
          >
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL"
                ? "PRZECIWWSKAZANIA WZGLĘDNE:"
                : "RELATIVE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.contraindications.relative.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.contraindications.relative.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL"
                ? "JAK PRZYGOTOWAĆ SIĘ DO ZABIEGU?"
                : "HOW TO PREPARE FOR THE PROCEDURE?"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.preparationForTreatment.map(
                (preparation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {preparation}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.preparationForTreatment.map(
                (preparation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {preparation}
                  </Typography>
                )
              )}
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL"
                ? "ZALECENIA POZABIEGOWE"
                : "POST-TREATMENT RECOMMENDATIONS"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
                  </Typography>
                )
              )}
            {language.webLanguage !== "PL" &&
              permanentLipMakeupDataEN.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
                  </Typography>
                )
              )}
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL" ? "DOPIGMENTOWANIE" : "TOUCH-UP"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? permanentLipMakeupDataPL.pigmentationInfo.overview
                : permanentLipMakeupDataEN.pigmentationInfo.overview}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? "Jak się przygotować do dopigmentowania?"
                : "How to prepare for touch-up?"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.pigmentationInfo.treatmentPreparation.map(
                (pigmentationInfo, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {pigmentationInfo}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.pigmentationInfo.treatmentPreparation.map(
                (pigmentationInfo, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {pigmentationInfo}
                  </Typography>
                )
              )}
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Accordion
              disableGutters
              component={Paper}
              sx={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#fafafa" }}
              >
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  sx={{ fontWeight: "400" }}
                  width={"100%"}
                >
                  {language.webLanguage === "PL"
                    ? "REGULAMIN".toUpperCase()
                    : "TERMS AND CONDITIONS".toUpperCase()}
                </Typography>
              </AccordionSummary>
              {language.webLanguage === "PL" && (
                <AccordionDetails>
                  <Grid
                    size={12}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    rowGap={1}
                    py={1}
                  >
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      1. Dokonanie zapisu na zabieg oznacza pełną akceptację
                      regulaminu oraz wymienione poniżej zasady.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      2. Rezerwując termin należy się upewnić, że nie ma żadnych
                      przeciwwskazań do wykonania zabiegu. (lista dostępna na
                      Instagramie w wyróżnionych relacjach lub w poście na
                      Facebooku
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      3. Konsultacja dotycząca wykonania zabiegu makijażu
                      permanentnego wynosi 50 zł. Jeśli klient zdecyduje się na
                      wykonanie zabiegu w naszym gabinecie, koszt makijażu
                      permanentnego pomniejszony jest o koszt konsultacji.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      4. Klientka ma prawo do zmiany terminu wizyty najpóźniej
                      na 24h przed planowaną wizytą, rezygnacja z terminu w
                      ostatniej chwili tj. tego samego dnia powoduje, że przy
                      zapisie kolejnej wizyty obowiązuje przedpłata. Rozumiemy
                      sytuacje wyjątkowe i przypadki losowe (należy okazać
                      dowód, że dana sytuacja miała miejsce.).
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      5. Klientki, które miały kiedykolwiek wykonywany makijaż
                      permanentny na danym obszarze (nawet mało widoczny) są
                      zobowiązane przy zapisie powiadomić o tym fakcie, ponieważ
                      zdarza się, że zabieg makijażu permanentnego powinien
                      zostać poprzedzony laserowym usuwaniem śladów po starym, a
                      to wymaga innego czasu oraz sprzętu. Należy zapisać się
                      wtedy na konsultację i ustalić plan działania z
                      linergistką.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      6. Podczas zabiegu makijażu permanentnego wykonywana jest
                      wizualizacja lub rysunek techniczny. Pigmenty wybierane są
                      przez linergistkę i dopasowane do naturalnej urody
                      Klientki. Nie wykonujemy tatuażowych brwi.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      7. Linergistka ma prawo do odmowy wykonania usługi, jeżeli
                      oczekiwania Klientki co do kształtu są niezgodne z
                      klasycznym układem brwi.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      8. Decydując się na zabieg należy zapoznać się z pracami,
                      stylem i techniką linergistki. Kompromis kształtu czy
                      odcienia jest możliwy, jednak w granicach rozsądku.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      9. W przypadku, gdy Klientka nie akceptuje zaproponowanego
                      kształtu, metody i koloru pigmentu oraz decyduje o
                      rezygnacji z pigmentacji podczas wizyty wówczas pobierana
                      jest opłata za czas pracy linergistki w wysokości 100 zł.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      10. Jeśli Klientka ma umówioną darmową korektę
                      przysługującą w ciągu 60 dni od daty zabiegu makijażu i na
                      tą wizytę nie przyjdzie/nie odwoła na 24 godz. to kolejna
                      umówiona korekta jest już płatna – dokładną cenę usługi w
                      tej sytuacji ustala linergistka podczas wizyty.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      11. Jeżeli Klientka jest zza granicy i nie może odbyć
                      korekty w ciągu 60 dni od daty pierwszego zabiegu, to
                      istnieje możliwość wydłużenia umownego okresu do 3
                      miesięcy po pierwszej pigmentacji, należy jednak zgłosić
                      fakt przebywania za granicą linergistce, która zanotuje
                      informacje w systemie/karcie i tylko na tej podstawie
                      okres korekty się wydłuża. Jeśli Klientka nie zgłosi się w
                      terminie 3 miesięcy od dnia pierwszej wizyty na korektę
                      makijażu, to po tym czasie korekta jest już płatna. Cenę
                      ustala linergistka podczas wizyty.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      12. Jeżeli Klientka, która wykonywała zabieg makijażu
                      permanentnego brwi w naszym gabinetu po zabiegu dowiaduje
                      się o ciąży i odkłada korektę makijażu do okresu po
                      porodzie (do 1 roku od zabiegu ) to wówczas cena zabiegu
                      to 70% aktualnej ceny makijażu permanentnego.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      13. Makijaż permanentny zmienia swoją intensywność w
                      kolejnych miesiącach po zabiegu dlatego po roku zaleca się
                      wykonanie korekty płatnej, której koszt zgodnie z
                      cennikiem to 50% aktualnej ceny makijażu permanentnego.
                      Jeżeli natomiast będzie potrzebna dodatkowa pigmentacja
                      jej koszt to 200zł.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      14. Korekta po upływie min. 1,5 roku od ostatniego zabiegu
                      makijażu permanentnego to koszt 70% aktualnej ceny lub w
                      wyjątkowych sytuacjach wycena indywidualna. Każda
                      dodatkowa korekta oprócz wymienionych powyżej jest
                      wyceniana indywidualnie.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      15. Jeżeli w ciągu 1 roku od zabiegu, klientka decyduje
                      się na odświeżenie koloru, ale potrzebne jest usunięcie
                      makijażu permanentnego, to po zabiegach laserowych koszt
                      nowego makijażu dla naszych klientek, to 600 zł za 2
                      wizyty. Jeżeli linergistka oceni, że niezbędne jest
                      wykonanie zabiegu usuwania lub ocieplenia makijażu
                      permanentnego, wówczas ten zabieg jest bezpłatny dla
                      klientek, które miały wykonany makijaż permanentny w
                      naszym gabinecie..
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      16. Zastrzegamy sobie prawo do zmiany poszczególnych
                      punktów regulaminu.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      17. Zastrzegamy sobie prawo do zmiany ustalonego wcześniej
                      terminu wizyty po ustaleniu z klientką innego, dogodnego
                      dla obu stron.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      * Korekta po około roku dotyczy głównie makijażu
                      permanentnego brwi, ponieważ pigment w innych częściach
                      utrzymuje się dłużej w związku z tym np. usta po roku są
                      wyraźnie zabarwione i nie wymagają korekty. Brwi natomiast
                      znajdują się w strefie T, co skutkuje szybszym
                      wypłukiwaniem barwnika
                    </Typography>
                  </Grid>
                </AccordionDetails>
              )}
              {language.webLanguage === "ENG" && (
                <AccordionDetails>
                  <Grid
                    size={12}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    rowGap={1}
                    py={1}
                  >
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      1. When booking your appointment, make sure that there are
                      no contraindications to the procedure (the full list is
                      available on our Instagram highlights or in a Facebook
                      post).
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      2. A consultation for permanent makeup costs 50 PLN. If
                      the client decides to undergo the procedure, the
                      consultation fee will be deducted from the total cost of
                      the treatment.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      3. The client has the right to reschedule their
                      appointment no later than 24 hours before the scheduled
                      time. Cancelling on the same day will require a prepayment
                      for the next booking. We understand emergencies – in such
                      cases, documentation confirming the situation must be
                      provided.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      4. Clients who have had permanent makeup in the area
                      before (even if barely visible) must inform us when
                      booking, as removal of old pigment may be necessary. This
                      requires different equipment and timing, and thus a
                      consultation appointment is mandatory.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      5. During the appointment, a brow mapping or pre-draw is
                      created. Pigments are chosen by the practitioner and
                      matched to the client’s natural features. We do not
                      perform tattoo-style brows.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      6. The practitioner has the right to decline the service
                      if the client's expectations for shape are inconsistent
                      with natural brow design.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      7. By booking the treatment, the client agrees with the
                      style and technique of the practitioner. While compromise
                      is possible, it must remain within reason.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      8. If the client refuses to proceed with the pigmenting
                      process after the design, shape, or color has been
                      presented and decides to cancel the treatment during the
                      visit, a 100 PLN fee will be charged to cover the
                      practitioner's time.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      9. If a client has a free touch-up appointment scheduled
                      within 60 days of the original treatment and fails to
                      attend or cancel in time (24h notice required), the next
                      correction becomes paid – the price will be determined
                      during the visit.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      10. If the client lives abroad and cannot attend the
                      touch-up within 60 days, the period can be extended up to
                      3 months, provided that the client informs the
                      practitioner in advance. If no touch-up is scheduled
                      within 3 months, it will be charged according to regular
                      touch-up prices.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      11. If the client becomes pregnant after the procedure and
                      postpones the touch-up until after childbirth (within 1
                      year of the procedure), the price for the touch-up is 70%
                      of the current permanent makeup rate.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      12. Pigment naturally fades over time, especially in the
                      brow area, due to its location in the T-zone. A paid color
                      boost is recommended after 1 year and costs 50% of the
                      current price. If an additional session is needed, it
                      costs 200 PLN.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      13. A touch-up after 1.5 years will be 70% of the current
                      price or individually priced in special cases. All
                      additional corrections outside of the scheduled ones are
                      priced individually.
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      14. If within 1 year from the initial procedure the client
                      needs a pigment removal, they can undergo laser removal
                      and then receive a new PMU treatment for 600 PLN (includes
                      2 sessions).
                    </Typography>
                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      15. If our practitioner determines that removal or
                      warming-up of the pigment is required for clients
                      previously treated in our clinic, this removal session
                      will be free of charge.
                    </Typography>

                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      We reserve the right to:
                      <br /> – Modify any part of the terms and conditions
                      <br /> – Reschedule appointments with mutual agreement of
                      both parties
                    </Typography>

                    <Typography
                      textAlign="left"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
                      Note: The yearly correction applies primarily to brows.
                      Pigment in lips or other areas lasts longer and often
                      doesn't require a refresh after a year.
                    </Typography>
                  </Grid>
                </AccordionDetails>
              )}
            </Accordion>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} container spacing={2}>
            <Grid size={12}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "EFEKTY ZABIEGU"
                  : "TREATMENT EFFECTS"}
              </Typography>
            </Grid>
            <Grid size={12} container spacing={3}>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_0}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_3}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_4}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_11}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_2}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_5}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_6}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_7}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_lip_makeup_effect_8}
                />
              </Grid>
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
