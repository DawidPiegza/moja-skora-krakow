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
import gabinet_1 from "../../../public/images/gabinet_1.jpeg";
import gabinet_3 from "../../../public/images/gabinet_3.jpeg";
import gabinet_4 from "../../../public/images/gabinet_4.jpeg";
import gabinet_5 from "../../../public/images/gabinet_5.jpeg";
import gabinet_6 from "../../../public/images/gabinet_6.jpeg";
import gabinet_1_small from "../../../public/images/gabinet_1_small.jpeg";
import gabinet_2_small from "../../../public/images/gabinet_2_small.jpeg";
import gabinet_3_small from "../../../public/images/gabinet_3_small.jpeg";
import gabinet_4_small from "../../../public/images/gabinet_4_small.jpeg";
import gabinet_5_small from "../../../public/images/gabinet_5_small.jpeg";
import gabinet_6_small from "../../../public/images/gabinet_6_small.jpeg";

import { AboutCompanyText } from "./data/AboutCompanyText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AnimatePresence, motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
export default function AboutUsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  const companyScreens = [
    gabinet_1,
    gabinet_3,
    gabinet_4,
    gabinet_5,
    gabinet_6,
  ];

  const companyScreensSmallScreens = [
    gabinet_1_small,
    gabinet_2_small,
    gabinet_3_small,
    gabinet_4_small,
    gabinet_5_small,
    gabinet_6_small,
  ];

  const changePhoto = (direction: "forward" | "backward") => {
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
          <Grid container spacing={2} paddingTop={2} paddingBottom={"60px"}>
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
                        bgcolor: "rgba(0, 0, 0, 0.1)",
                      }}
                      onClick={() => changePhoto("backward")}
                    >
                      <ArrowBackIosIcon sx={{ color: "white" }} />
                    </IconButton>
                    <AnimatePresence>
                      <Box
                        component={motion.div}
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
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.8, ease: "easeOut" },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.98,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                      />
                    </AnimatePresence>

                    <IconButton
                      sx={{
                        height: "100%",
                        borderRadius: "0px",
                        p: "1em",
                        zIndex: "10",
                        bgcolor: "rgba(0, 0, 0, 0.1)",
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
                label="Facebook"
                icon={<FacebookIcon />}
              />
              <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
              <BottomNavigationAction
                label="Instagram"
                icon={<InstagramIcon />}
              />
            </BottomNavigation>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
}
