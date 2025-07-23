import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import salon_glowne_zdjecie from "../../../public/images/salon_glowne_zdjecie.jpeg";
import gabinet_1 from "../../../public/images/zdjecie_strona_glowna.jpg";
import gabinet_2 from "../../../public/images/zdjecie_strona_glowna.jpg";
import gabinet_3 from "../../../public/images/zdjecie_strona_glowna.jpg";

import * as motion from "motion/react-client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

export default function OurCompanyView() {
  const theme = useTheme();
  const { language } = React.useContext(WebsiteLanguageContext)!;
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [show, setShow] = useState(false);

  // Lista zdjęć do slideshow
  const imageList = [salon_glowne_zdjecie, gabinet_1, gabinet_2, gabinet_3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Pokazywanie komponentu przy wejściu w viewport
  useEffect(() => {
    if (inView) setShow(true);
    if (!inView) setShow(false);
  }, [inView]);

  // Zmiana zdjęcia co kilka sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000); // co 4 sekundy

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl" ref={ref}>
      <Grid container spacing={3} paddingY={2}>
        <Grid container size={12}>
          {show && (
            <Grid
              size={downMd ? 12 : 6}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              component={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1 }}
            >
              <SectionTitle
                alignTextTo={downMd ? "center" : "left"}
                title={
                  language.webLanguage === "PL"
                    ? "Gabinet Moja Skóra to miejsce, w którym zdrowie skóry łączy się z estetyką i nowoczesnym podejściem do pielęgnacji. "
                    : "Moja Skóra is a place where skin health meets aesthetics and modern skincare."
                }
              />
              <Typography
                marginTop={2}
                align={downMd ? "center" : "left"}
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL"
                  ? `Gabinet powstał z potrzeby oferowania skutecznych, bezpiecznych i dopasowanych indywidualnie terapii, które realnie poprawiają kondycję skóry i podkreślają naturalne piękno.`
                  : `Our clinic was created out of the need to offer effective, safe, and individually tailored treatments that genuinely improve skin condition and highlight natural beauty.`}
              </Typography>
              <Typography
                align={downMd ? "center" : "left"}
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL"
                  ? `Gabinet tworzą dyplomowane kosmetolożki z wieloletnią praktyką, dla których wykonywane zabiegi to nie tylko praca, ale również pasja i zaangażowanie. Działamy w oparciu o aktualną wiedzę medyczną i najnowsze trendy w kosmetologii, stawiając na jakość, bezpieczeństwo i profesjonalizm.`
                  : `We are a team of certified cosmetologists with years of hands-on experience. For us, each treatment is not just a service, but a true passion and commitment. We operate based on current medical knowledge and the latest trends in cosmetology, always prioritizing quality, safety, and professionalism.`}
              </Typography>
              <Typography
                align={downMd ? "center" : "left"}
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL"
                  ? `Specjalizujemy się w zabiegach z zakresu kosmetologii terapeutycznej, anti-aging, makijażu permanentnego oraz modelowaniu ust. Naszym priorytetem jest zdrowa skóra, dlatego każdy plan pielęgnacyjny opieramy na dokładnej diagnostyce i rzetelnej analizie potrzeb skóry. Nie stosujemy przypadkowych rozwiązań, każdy zabieg dobierany jest świadomie i z myślą o długofalowych efektach.Wyróżnia nas połączenie wiedzy, doświadczenia i indywidualnego podejścia.`
                  : `Our specialties include therapeutic skincare, anti-aging treatments, permanent makeup, and lip enhancement. Healthy skin is our top priority — every care plan begins with a detailed skin diagnosis and a thorough understanding of individual needs. We never take a one-size-fits-all approach — each procedure is chosen thoughtfully, with long-term results in mind. What sets us apart is the combination of knowledge, experience, and a personalized approach.`}
              </Typography>
              <Typography
                align={downMd ? "center" : "left"}
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL"
                  ? `W Moja Skóra koncentrujemy się na tym, co najważniejsze - zdrowiu, funkcjonalności i naturalnym pięknie skóry. Naszą misją jest tworzenie skutecznych, bezpiecznych i świadomych terapii kosmetologicznych, które nie tylko poprawiają wygląd, ale przede wszystkim wspierają prawidłowe funkcjonowanie skóry. Chcemy, aby każda osoba, która odwiedza nasz gabinet, miała pewność, że jest w dobrych rękach- zaopiekowana kompleksowo, profesjonalnie i z wyczuciem.`
                  : `At Moja Skóra, we focus on what truly matters — the health, functionality, and natural beauty of the skin. Our mission is to provide effective, safe, and conscious cosmetic therapies that not only improve appearance but also support the skin’s optimal functioning. We want every person who visits our clinic to feel fully cared for — with expertise, sensitivity, and a holistic approach.`}
              </Typography>
            </Grid>
          )}

          <Grid size={downMd ? 12 : 6}>
            {show && (
              <Card
                sx={{
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <CardMedia
                    component="img"
                    alt="Gabinet Moja Skóra"
                    image={imageList[currentImageIndex]}
                    sx={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </Card>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
