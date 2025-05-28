import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function VoucherView() {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} paddingY={5}>
        <Grid size={12}>
          <Typography
            variant={downXl ? "h5" : "h4"}
            align="center"
            fontStyle="italic"
          >
            Voucher – idealny prezent dla bliskiej osoby{" "}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction={downMd ? "column" : "row"}
            spacing={downMd ? 3 : 5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size={downMd ? 12 : 6}>
              <Box
                component={Paper}
                width="100%"
                height={downMd ? "200px" : "300px"}
              ></Box>
            </Grid>
            <Grid size={downMd ? 12 : 6}>
              <Typography variant="body1" gutterBottom>
                Szukasz wyjątkowego prezentu, który sprawi radość i pozwoli na
                chwilę relaksu? Voucher do salonu Moja Skóra Kosmetologia to
                doskonały wybór! To nie tylko upominek, ale także wyraz troski i
                dbałości o dobre samopoczucie osoby obdarowanej.{" "}
              </Typography>
              <Typography variant="body1" gutterBottom>
                W naszej ofercie znajdziesz vouchery na konkretne zabiegi
                kosmetologiczne lub na wybraną kwotę, którą można wykorzystać
                według własnych potrzeb i preferencji. Dzięki temu masz pewność,
                że prezent będzie w pełni dopasowany do oczekiwań obdarowanej
                osoby.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nie jesteś pewien, który zabieg wybrać? Z przyjemnością
                pomożemy! Nasz zespół chętnie doradzi i pomoże dopasować idealną
                usługę, uwzględniając indywidualne potrzeby skóry oraz
                oczekiwania klienta.
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                fontStyle="italic"
                gutterBottom
              >
                Zakup voucherów możliwy jest wyłącznie w siedzibie naszego
                salonu. Zapraszamy serdecznie!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
