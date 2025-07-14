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

export default function VoucherView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

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
                title="Podaruj bliskiej osobie wyjątkowy prezent"
              />
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                Voucher podarunkowy to coś więcej niż upominek -{" "}
                <b>
                  podaruj czas dla siebie, chwilę relaksu i profesjonalną
                  pielęgnację dopasowaną do indywidualnych potrzeb.
                </b>
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                To forma prezentu, która realnie wpływa na dobre samopoczucie –
                zarówno fizyczne, jak i emocjonalne. Efekty widać na zewnątrz w
                postaci zdrowszej, promiennej skóry, ale też czuć je wewnętrznie
                – w większym komforcie i pewności siebie.
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                Nasz voucher można zrealizować na dowolnie wybrane usługi: od
                konsultacji kosmetologicznej i analizy skóry, przez zabiegi
                pielęgnacyjne, aż po indywidualnie dobraną terapię.Dostępna jest
                również opcja vouchera kwotowego – osoba obdarowana sama
                zdecyduje, na co go wykorzysta.
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                To uniwersalny, elegancki prezent na każdą okazję – dla kobiety,
                dla mężczyzny, dla każdego, kto zasługuje na chwilę dla siebie.
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant={downMd ? "body2" : "body1"}
              >
                Szczegółowe zasady zakupu, wysyłki oraz wykorzystania Vouchera
                znajdują się w{" "}
              </Typography>
              <Button
                size="small"
                variant="text"
                sx={{ color: "secondary.main" }}
                onClick={() => navigate("/voucher_statute")}
              >
                Regulaminie
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
