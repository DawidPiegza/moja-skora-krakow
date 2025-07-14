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

export default function AboutUsView() {
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
        <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
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
                  Strona Główna
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
                  Nasz zespół
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
                            mgr kosmetolog
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
                            Jestem dyplomowanym kosmetologiem i certyfikowaną
                            linergistką. Ukończyłam kosmetologię na Krakowskiej
                            Wyższej Szkole Promocji Zdrowia, a po latach pracy w
                            gabinecie postanowiłam stworzyć własną przestrzeń
                            “Moja Skóra” miejsce świadomej, nowoczesnej
                            pielęgnacji.{" "}
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
                            Specjalizuję się w pigmentacji ust i brwi metodą
                            Ombre oraz modelowaniu ust techniką na płasko. W
                            pracy kieruję się zasadą „mniej znaczy więcej”,
                            stawiam na subtelne efekty, które podkreślają
                            indywidualne piękno, a nie je przerysowują. Moją
                            pasją jest także praca ze skórą problematyczną.
                            Wspieram osoby zmagające się z trudnościami skórnymi
                            oraz profilaktyce anti-aging, opierając terapię na
                            wiedzy, doświadczeniu i pełnym zrozumieniu potrzeb
                            skóry. W gabinecie najważniejsze są dla mnie:
                            zaufanie, komfort i bezwarunkowy szacunek dla każdej
                            osoby, która powierza mi swoją skórę.
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
                            {" "}
                            Poza pracą czerpię energię z natury, fotografii,
                            tańca, jogi i długich spacerów z moim psem. To
                            właśnie te chwile dają mi balans, który przekładam
                            na jakość i spokój w pracy z klientkami.
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
                            mgr kosmetologi
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
                            Jestem magistrem kosmetologii i certyfikowaną
                            linergistką, absolwentką Krakowskiej Wyższej Szkoły
                            Promocji Zdrowia oraz Górnośląskiej Wyższej Szkoły
                            Handlowej. Od dziewięciu lat rozwijam się w
                            kosmetologii estetycznej, zdobywając doświadczenie w
                            gabinetach, gdzie zrodziła się moja pasja do
                            zabiegów anti-aging oraz pracy ze skórami
                            problematycznymi. Specjalizuję się w makijażu
                            permanentnym ust oraz brwi metodą ombre, a także
                            modelowaniu ust na płasko. Skupiam się na
                            naturalnych efektach – dopracowanych z wyczuciem,
                            precyzją i dopasowując do urody oraz potrzeb
                            klienta.{" "}
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
                            Z pasją dążę do realizacji swoich celów, co
                            zaowocowało powstaniem mojego gabinetu – Moja Skóra.
                            Każdy zabieg wykonuję z pełnym skupieniem i
                            zaangażowaniem wsłuchując się w potrzeby i historię
                            skóry. Na co dzień tworzę indywidualne plany
                            zabiegowe, zaczynając od konsultacji i analizy skóry
                            – by wspólnie dobrać skuteczny plan działania,
                            również w pielęgnacji domowej.{" "}
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
                            W pracy kieruję się spokojem, empatią i uważnym
                            słuchaniem – to właśnie one pozwalają mi budować
                            relacje oparte na zaufaniu i poczuciu komfortu.
                            Zależy mi, aby każda wizyta była nie tylko krokiem w
                            stronę zdrowej skóry, ale również przyjemnym
                            doświadczeniem, które poprawia nastrój.
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
                            Po pracy odpoczywam w podróżach, poznawaniu nowych
                            kultur, tańcu i klimacie kina kostiumowego – to mój
                            sposób na oddech i inspirację.
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
