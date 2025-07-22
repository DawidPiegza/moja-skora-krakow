import {
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import basia_profilowe from "../../../public/images/basia_profilowe.jpg";
import karolina_profilowe from "../../../public/images/karolina_profilowe.jpg";
import { useEffect, useState } from "react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

export default function AboutUsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const [isLoading, setLoading] = useState<boolean>(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
    if (!inView) setShow(false);
  }, [inView]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
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
                  {language.webLanguage === "PL" ? "Nasz zespół" : "Our Team"}
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid size={12}>
              <Grid
                container
                direction={downMd ? "column" : "row"}
                sx={{
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
              >
                <Grid size={12}>
                  <Grid
                    container
                    width="100%"
                    display="flex"
                    justifyContent="space-evenly"
                  >
                    <Grid size={12}>
                      <Divider
                        variant="fullWidth"
                        sx={{ bgcolor: "text.primary" }}
                      />
                    </Grid>
                    <Grid size={downMd ? 12 : 5} py={1}>
                      <Grid container direction="column" spacing={1}>
                        <Grid size={12}>
                          <Typography
                            variant="h2"
                            fontStyle="italic"
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.h4,
                              [theme.breakpoints.up("md")]: {
                                ...theme.typography.h3,
                              },
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h2,
                              },
                            })}
                          >
                            Karolina <br /> Sałdan
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.h6,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h5,
                              },
                            })}
                            fontStyle="italic"
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? "mgr kosmetologi"
                              : "M.Sc. in Cosmetology"}
                          </Typography>
                        </Grid>
                        <Grid size={12}>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? `Jestem dyplomowanym kosmetologiem i certyfikowaną linergistką. Ukończyłam kosmetologię na Krakowskiej Wyższej Szkole Promocji Zdrowia, a po latach pracy w gabinecie postanowiłam stworzyć własną przestrzeń “Moja Skóra” miejsce świadomej, nowoczesnej pielęgnacji.`
                              : `I’m a certified cosmetologist and licensed permanent makeup artist. I graduated with a degree in Cosmetology from the Krakow School of Health Promotion, and after several years of working in the field, I decided to create my own space — Moja Skóra, a clinic dedicated to conscious, modern skincare.`}
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? `Specjalizuję się w pigmentacji ust i brwi metodą Ombre oraz modelowaniu ust techniką na płasko. W pracy kieruję się zasadą „mniej znaczy więcej”, stawiam na subtelne efekty, które podkreślają indywidualne piękno, a nie je przerysowują.`
                              : `I specialize in ombré lip and eyebrow pigmentation as well as lip enhancement using the flat technique. My approach is guided by the principle “less is more” — I focus on subtle, refined results that enhance natural beauty without exaggeration.`}
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "ENG"
                              ? `I’m also passionate about working with problematic skin. I support individuals struggling with skin conditions and provide anti-aging treatments based on knowledge, experience, and a deep understanding of the skin’s needs. In my studio, trust, comfort, and unconditional respect for every person who entrusts me with their skin are my top priorities.`
                              : `Moją pasją jest także praca ze skórą problematyczną. Wspieram osoby zmagające się z trudnościami skórnymi oraz profilaktyce anti-aging, opierając terapię na wiedzy, doświadczeniu i pełnym zrozumieniu potrzeb skóry. W gabinecie najważniejsze są dla mnie: zaufanie, komfort i bezwarunkowy szacunek dla każdej osoby, która powierza mi swoją skórę.`}
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? `Poza pracą czerpię energię z natury, fotografii, tańca, jogi i długich spacerów z moim psem. To właśnie te chwile dają mi balans, który przekładam na jakość i spokój w pracy z klientkami.`
                              : `Outside of work, I recharge through nature, photography, dance, yoga, and long walks with my dog. These moments of balance translate directly into the calm and quality I bring to every client interaction.`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {!downMd && (
                      <Grid size={1}>
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Divider
                            orientation="vertical"
                            sx={{
                              width: "1px",
                              backgroundColor: "text.primary",
                            }}
                          />
                        </Box>
                      </Grid>
                    )}
                    <Grid
                      size={downMd ? 12 : 5}
                      display={"flex"}
                      alignItems="center"
                      justifyContent={
                        betweenMdAndLg ? "flex-start" : "flex-end"
                      }
                      py={1}
                      ref={ref}
                    >
                      {show && (
                        <Card
                          sx={{ padding: 2 }}
                          component={motion.div}
                          initial={{ opacity: 0, x: 500 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.5,
                              type: "spring",
                              visualDuration: 1,
                              bounce: 0.4,
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              height: {
                                lg: "auto",
                                md: "600px",
                                sm: "500px",
                                xs: "auto",
                              },
                            }}
                            image={karolina_profilowe}
                            alt="Description of the image"
                          />
                        </Card>
                      )}
                    </Grid>
                    <Grid size={12}>
                      <Divider
                        variant="fullWidth"
                        sx={{ bgcolor: "text.primary" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid
                    container
                    width="100%"
                    display="flex"
                    justifyContent="space-evenly"
                  >
                    <Grid size={downMd ? 12 : 5} py={1}>
                      <Grid container direction="column" spacing={1}>
                        <Grid size={12}>
                          <Typography
                            variant="h2"
                            fontStyle="italic"
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.h4,
                              [theme.breakpoints.up("md")]: {
                                ...theme.typography.h3,
                              },
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h2,
                              },
                            })}
                          >
                            Barbara <br /> Żelazo
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.h6,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h5,
                              },
                            })}
                            fontStyle="italic"
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? "mgr kosmetologi"
                              : "M.Sc. in Cosmetology"}
                          </Typography>
                        </Grid>
                        <Grid size={12}>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? `Jestem dyplomowanym kosmetologiem i certyfikowaną linergistką, absolwentką Krakowskiej Wyższej Szkoły Promocji Zdrowia oraz Górnośląskiej Wyższej Szkoły Handlowej. Od wielu lat rozwijam się w kosmetologii estetycznej, zdobywając doświadczenie w gabinetach, gdzie zrodziła się moja pasja do zabiegów anti-aging oraz pracy ze skórami problematycznymi. Specjalizuję się w makijażu permanentnym ust oraz brwi metodą ombre, a także modelowaniu ust na płasko. Skupiam się na naturalnych efektach – dopracowanych z wyczuciem, precyzją i dopasowanych do urody.`
                              : `I am a certified cosmetologist and licensed permanent makeup artist, a graduate of the Krakow School of Health Promotion and the University of Upper Silesia. For many years, I have been developing my skills in aesthetic cosmetology, gaining experience in professional clinics where I discovered my passion for anti-aging treatments and working with problematic skin. I specialize in permanent lip and ombré brow pigmentation, as well as lip enhancement using the flat technique. My focus is on achieving natural results — refined with precision, sensitivity, and always tailored to individual beauty.`}
                          </Typography>
                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? "Z pasją realizuje swoje cele, czego efektem jest powstanie mojego gabinetu – Moja Skóra. Zajmuje się terapią skór trądzikowych i wrażliwych oraz profilaktyką starzenia, łącząc holistyczne podejście z dokładną analizą skóry. W pracy kieruję się spokojem, empatią i uważnym słuchaniem – dzięki nim tworzę atmosferę zaufania i komfortu, a każda wizyta staje się nie tylko krokiem ku zdrowej skórze, ale też chwilą relaksu i dobrego samopoczucia.."
                              : `Driven by passion and dedication, I founded my own clinic— Moja Skóra. I work with acne-prone and sensitive skin and provide preventive care against skin aging, combining a holistic approach with thorough skin analysis. My work is guided by calmness, empathy, and attentive listening — these values help me create a space of trust and comfort, turning each visit into a step toward healthy skin and a moment of true relaxation.`}
                          </Typography>

                          <Typography
                            sx={(theme) => ({
                              color: "text.primary",
                              ...theme.typography.body1,
                              [theme.breakpoints.up("xl")]: {
                                ...theme.typography.h6,
                              },
                            })}
                            gutterBottom
                          >
                            {language.webLanguage === "PL"
                              ? `Po pracy odpoczywam w podróżach, poznawaniu nowych kultur, tańcu i klimacie kina kostiumowego – to mój sposób na oddech i inspirację.`
                              : `Outside of work, I find joy in traveling, exploring new cultures, dancing, and the unique atmosphere of historical cinema — my way to unwind and stay inspired.`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {!downMd && (
                      <Grid size={1}>
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Divider
                            orientation="vertical"
                            sx={{
                              width: "1px",
                              backgroundColor: "text.primary",
                            }}
                          />
                        </Box>
                      </Grid>
                    )}
                    <Grid
                      size={downMd ? 12 : 5}
                      display={"flex"}
                      alignItems="center"
                      justifyContent={
                        betweenMdAndLg ? "flex-start" : "flex-end"
                      }
                      py={1}
                    >
                      {show && (
                        <Card
                          sx={{ padding: 2 }}
                          component={motion.div}
                          initial={{ opacity: 0, x: 500 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.5,
                              type: "spring",
                              visualDuration: 1,
                              bounce: 0.4,
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              height: {
                                lg: "auto",
                                md: "600px",
                                sm: "500px",
                                xs: "auto",
                              },
                            }}
                            image={basia_profilowe}
                            alt="Description of the image"
                          />
                        </Card>
                      )}
                    </Grid>
                    <Grid size={12}>
                      <Divider
                        variant="fullWidth"
                        sx={{ bgcolor: "text.primary" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
}
