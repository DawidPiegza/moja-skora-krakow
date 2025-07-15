import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import voucher_image from "../../../public/images/voucher_image.jpeg";
import { useNavigate } from "react-router";
import * as motion from "motion/react-client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

export default function VoucherView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();
  const { language } = React.useContext(WebsiteLanguageContext);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
    if (!inView) setShow(false);
  }, [inView]);

  return (
    <Container maxWidth="xl" ref={ref}>
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12} container>
          <Grid size={downMd ? 12 : 6}>
            {show && (
              <Card
                sx={{ width: "100%", height: "auto" }}
                component={motion.div}
                initial={{ opacity: 0.5, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="max-content"
                  image={voucher_image}
                />
              </Card>
            )}
          </Grid>
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
                    ? "Podaruj bliskiej osobie wyjątkowy prezent"
                    : "Give your loved one a truly special gift"
                }
              />
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL" &&
                  "Voucher podarunkowy to coś więcej niż upominek - podaruj czas dla siebie, chwilę relaksu i profesjonalną pielęgnację dopasowaną do indywidualnych potrzeb."}

                {language.webLanguage === "ENG" &&
                  `A gift voucher is more than just a present – it’s time for self-care, a moment of relaxation, and professional skincare tailored to individual needs.`}
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL" &&
                  "To forma prezentu, która realnie wpływa na dobre samopoczucie – zarówno fizyczne, jak i emocjonalne. Efekty widać na zewnątrz w postaci zdrowszej, promiennej skóry, ale też czuć je wewnętrznie – w większym komforcie i pewności siebie."}
                {language.webLanguage === "ENG" &&
                  "It’s a form of a gift that genuinely enhances well-being – both physical and emotional. The effects are visible on the outside as healthier, more radiant skin, and felt on the inside as increased comfort and self-confidence."}
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "PL" &&
                  "Nasz voucher można zrealizować na dowolnie wybrane usługi: od konsultacji kosmetologicznej i analizy skóry, przez zabiegi pielęgnacyjne, aż po indywidualnie dobraną terapię. Dostępna jest również opcja vouchera kwotowego – osoba obdarowana sama zdecyduje, na co go wykorzysta."}
                {language.webLanguage === "ENG" &&
                  "Our voucher can be used for any chosen service – from a skin consultation and analysis to advanced skincare treatments or a personalized therapy plan. A value-based voucher option is also available, allowing the recipient to decide how they would like to use it."}
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                {language.webLanguage === "ENG" &&
                  "It’s a universal, elegant gift for any occasion – for women, men, and anyone who deserves a moment of care and attention."}
                {language.webLanguage === "PL" &&
                  "To uniwersalny, elegancki prezent na każdą okazję – dla kobiety, dla mężczyzny, dla każdego, kto zasługuje na chwilę dla siebie."}
              </Typography>
              <Typography
                align="center"
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
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
