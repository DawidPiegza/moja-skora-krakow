import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import b_profilowe from "../../../public/images/b_profilowe.jpeg";
import k_profilowe from "../../../public/images/k_profilowe.jpeg";
import { useEffect, useState } from "react";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import EmployeeSection from "./components/EmployeeSection/EmployeeSection";
import { AboutBasiaText, AboutKarolinaText } from "./data/AboutMeText";
import gabinet_1 from "../../../public/images/beauty_salon_1.jpeg";
import gabinet_2 from "../../../public/images/beauty_salon_2.jpeg";
import gabinet_3 from "../../../public/images/beauty_salon_3.jpeg";
import gabinet_3_large from "../../../public/images/beauty_salon_3_large.jpeg";
import gabinet_4 from "../../../public/images/beauty_salon_4.jpeg";
import gabinet_4_large from "../../../public/images/beauty_salon_4_large.jpeg";
import gabinet_5 from "../../../public/images/beauty_salon_5.jpeg";
import gabinet_6 from "../../../public/images/beauty_salon_6.jpeg";
import gabinet_6_large from "../../../public/images/beauty_salon_6_large.jpeg";
import gabinet_7 from "../../../public/images/beauty_salon_7.jpeg";
import gabinet_7_large from "../../../public/images/beauty_salon_7_large.jpeg";
import gabinet_8 from "../../../public/images/beauty_salon_8.jpeg";
import gabinet_8_large from "../../../public/images/beauty_salon_8_large.jpeg";
import { AboutCompanyText } from "./data/AboutCompanyText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AnimatePresence, motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moja_skora_movie from "../../../public/images/moja_skora_movie.mp4";

export default function AboutUsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [lastDirection, setLastDirection] = useState<
    "forward" | "backward" | null
  >(null);
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    if (!downMd) return;
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!downMd) return;
    const t = e.touches[0];
    touchEndX.current = t.clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!downMd) return;
    if (touchStartX.current == null || touchEndX.current == null) {
      touchStartX.current = null;
      touchStartY.current = null;
      touchEndX.current = null;
      return;
    }

    const dx = touchEndX.current - touchStartX.current;
    const dy = e.changedTouches[0].clientY - (touchStartY.current ?? 0);
    const absDX = Math.abs(dx);
    const absDY = Math.abs(dy);
    const SWIPE_THRESHOLD = 50;

    if (absDX > SWIPE_THRESHOLD && absDX > absDY) {
      const direction = dx > 0 ? "backward" : "forward";
      setLastDirection(direction);
      changePhoto(direction);
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
  };

  const companyScreens = [
    gabinet_1,
    gabinet_2,
    gabinet_3_large,
    gabinet_4_large,
    gabinet_5,
    gabinet_6_large,
    gabinet_7_large,
    gabinet_8_large,
  ];

  const companyScreensSmallScreens = [
    gabinet_1,
    gabinet_2,
    gabinet_3,
    gabinet_4,
    gabinet_5,
    gabinet_6,
    gabinet_7,
    gabinet_8,
  ];

  const changePhoto = (direction: "forward" | "backward") => {
    setLastDirection(direction);
    setCurrentPhotoIndex((prev) => {
      if (direction === "forward") {
        return prev ===
          (downMd ? companyScreensSmallScreens : companyScreens).length - 1
          ? 0
          : prev + 1;
      }
      if (direction === "backward") {
        return prev === 0
          ? (downMd ? companyScreensSmallScreens : companyScreens).length - 1
          : prev - 1;
      }
      return prev;
    });
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: any, isExpanded: any) => {
    setExpanded(isExpanded);
  };

  const summaryText =
    language.webLanguage === "PL"
      ? AboutCompanyText[0].PL
      : AboutCompanyText[0].ENG;

  const getShortText = (text: any) =>
    text.length > 200 ? text.slice(0, 200) + "..." : text;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <Container maxWidth="xl">
          <Grid container spacing={2} paddingTop={2}>
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
                  {language.webLanguage === "PL"
                    ? "Strona Główna"
                    : "Main Page"}
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
                  {language.webLanguage === "PL" ? "O nas" : "About us"}
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
                py={downMd ? 1 : 4}
                px={2}
              >
                <Typography
                  gutterBottom
                  width={"100%"}
                  variant={"h4"}
                  textAlign="left"
                  sx={{ fontWeight: "350" }}
                >
                  {language.webLanguage === "PL"
                    ? "Poznaj Moja Skóra".toUpperCase()
                    : "Meet Moja Skóra".toUpperCase()}
                </Typography>
              </Grid>
              <Grid size={12} container alignItems={"flex-start"}>
                {downMd ? (
                  <Grid size={12}>
                    <Accordion
                      expanded={expanded}
                      onChange={handleChange}
                      sx={{
                        boxShadow: "none",
                        border: "none",
                        borderRadius: 0,
                        "&::before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <ExpandMoreIcon
                              sx={{
                                fontSize: 24,
                                width: 24,
                                height: 24,
                              }}
                            />
                          </Box>
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography
                          variant={downMd ? "body2" : "body1"}
                          sx={{ flex: 1 }}
                        >
                          {expanded ? summaryText : getShortText(summaryText)}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        {(language.webLanguage === "PL"
                          ? AboutCompanyText
                          : AboutCompanyText
                        ).map((text, index) =>
                          index !== 0 ? (
                            <Typography
                              key={index}
                              variant={downMd ? "body2" : "body1"}
                              gutterBottom
                            >
                              {language.webLanguage === "PL"
                                ? text.PL
                                : text.ENG}
                            </Typography>
                          ) : null
                        )}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ) : (
                  <Grid
                    size={downMd ? 12 : 6}
                    container
                    display={"flex"}
                    alignItems={"center"}
                    rowGap={2}
                    px={2}
                  >
                    {language.webLanguage === "PL" &&
                      AboutCompanyText.map((text, index) => (
                        <Typography variant="body1" key={index}>
                          {text.PL}
                        </Typography>
                      ))}
                    {language.webLanguage === "ENG" &&
                      AboutCompanyText.map((text, index) => (
                        <Typography variant="body1" key={index}>
                          {text.ENG}
                        </Typography>
                      ))}
                  </Grid>
                )}

                <Grid size={downMd ? 12 : 6} container px={2}>
                  <Grid
                    size={12}
                    height={downMd ? "450px" : "600px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    position={"relative"}
                    component={Paper}
                    elevation={6}
                  >
                    <IconButton
                      sx={{
                        height: "100%",
                        borderRadius: "0px",
                        p: "1em",
                        zIndex: "10",
                      }}
                      onClick={() => changePhoto("backward")}
                    >
                      <ArrowBackIosIcon sx={{ color: "white" }} />
                    </IconButton>
                    <AnimatePresence>
                      <Box
                        component={motion.div}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        key={currentPhotoIndex}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: downMd
                            ? `url(${companyScreensSmallScreens[currentPhotoIndex]})`
                            : `url(${companyScreens[currentPhotoIndex]})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          zIndex: 0,
                        }}
                        initial={
                          downMd
                            ? {
                                x:
                                  lastDirection === "forward"
                                    ? 80
                                    : lastDirection === "backward"
                                    ? -80
                                    : 0,
                                opacity: 0,
                                scale: 0.98,
                              }
                            : { opacity: 0, scale: 1.02 }
                        }
                        animate={
                          downMd
                            ? {
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                  x: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                  },
                                  opacity: { duration: 0.25 },
                                },
                              }
                            : {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.8, ease: "easeOut" },
                              }
                        }
                        exit={
                          downMd
                            ? {
                                x:
                                  lastDirection === "forward"
                                    ? -80
                                    : lastDirection === "backward"
                                    ? 80
                                    : 0,
                                opacity: 0,
                                scale: 0.96,
                                transition: {
                                  x: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 35,
                                  },
                                  opacity: { duration: 0.2 },
                                },
                              }
                            : {
                                opacity: 0,
                                scale: 0.98,
                                transition: {
                                  duration: 0.6,
                                  ease: "easeInOut",
                                },
                              }
                        }
                      />
                    </AnimatePresence>

                    <IconButton
                      sx={{
                        height: "100%",
                        borderRadius: "0px",
                        p: "1em",
                        zIndex: "10",
                      }}
                      onClick={() => changePhoto("forward")}
                    >
                      <ArrowForwardIosIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid
              container
              size={12}
              direction={downMd ? "column" : "row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
              spacing={1}
            >
              <Grid
                size={12}
                display="flex"
                justifyContent={"flex-start"}
                py={downMd ? 1 : 4}
                px={2}
              >
                <Typography
                  gutterBottom
                  width={"100%"}
                  variant={"h4"}
                  textAlign="left"
                  sx={{ fontWeight: "350" }}
                >
                  {language.webLanguage === "PL"
                    ? "Poznaj naszych specjalistów".toUpperCase()
                    : "Meet our specialists".toUpperCase()}
                </Typography>
              </Grid>

              <EmployeeSection
                photoURL={k_profilowe}
                name={"Karolina Sałdan"}
                academicTittle={{
                  PL: "mgr kosmetologii",
                  ENG: "M.Sc. in Cosmetology",
                }}
                aboutMeText={AboutKarolinaText}
              />
              <Grid
                size={downMd ? 12 : 0.5}
                display={!downMd ? "flex" : "unset"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Divider orientation={downMd ? "horizontal" : "vertical"} />
              </Grid>
              <EmployeeSection
                photoURL={b_profilowe}
                name={"Barbara Żelazo"}
                academicTittle={{
                  PL: "mgr kosmetologii",
                  ENG: "M.Sc. in Cosmetology",
                }}
                aboutMeText={AboutBasiaText}
              />
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid
              size={downMd ? 12 : 6}
              display={"flex"}
              alignItems="center"
              justifyContent={"flex-start"}
              p={1}
            >
              <Card sx={{ padding: 1, width: "100%" }}>
                <CardMedia
                  component="video"
                  sx={{
                    height: "auto",
                    position: "relative",
                    zIndex: 0,
                    overflow: "hidden",
                    WebkitTransform: "translateZ(0)",
                  }}
                  src={moja_skora_movie}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </Card>
            </Grid>
            <Grid
              size={downMd ? 12 : 6}
              p={3}
              container
              direction={"column"}
              spacing={3}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Grid size={12}>
                <Typography
                  variant={downMd ? "body1" : "h6"}
                  textAlign="left"
                  sx={{ fontWeight: "200" }}
                  width={"100%"}
                  fontStyle="italic"
                  gutterBottom
                >
                  {language.webLanguage === "PL" &&
                    "Moja Skóra to miejsce, w którym wiedza spotyka się z troską o Twoją skórę. Pracujemy w oparciu o doświadczenie i świadome terapie. Zawsze indywidualnie, z uważnością i szacunkiem dla potrzeb skóry. "}
                  {language.webLanguage === "ENG" &&
                    "Moja Skóra is a place where knowledge meets care for your skin. We work based on experience and conscious therapies. Always individually, with attention and respect for the skin's needs. "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography
                  variant={downMd ? "body1" : "h6"}
                  textAlign="left"
                  sx={{ fontWeight: "200" }}
                  width={"100%"}
                  fontStyle="italic"
                  gutterBottom
                >
                  {language.webLanguage === "PL" &&
                    "Wierzymy, że zdrowa skóra to proces, a naszą estetykę budujemy na naturalnych efektach, dlatego każdy etap prowadzimy z pełnym zaangażowaniem. "}
                  {language.webLanguage === "ENG" &&
                    "We believe that healthy skin is a process, and we build our aesthetics on natural results, which is why we approach every step with full commitment. "}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography
                  variant={downMd ? "body1" : "h6"}
                  textAlign="left"
                  sx={{ fontWeight: "200" }}
                  width={"100%"}
                  fontStyle="italic"
                  gutterBottom
                >
                  {language.webLanguage === "PL" &&
                    "Tutaj zaczyna się Twoja droga do promiennej, zadbanej cery."}
                  {language.webLanguage === "ENG" &&
                    "This is where your journey to radiant, well-cared-for skin begins."}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
}
