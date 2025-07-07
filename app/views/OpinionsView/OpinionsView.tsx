import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Paper,
  Typography,
  Rating,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import google_logo from "../../../public/images/google_logo.png";
import { googleOpinions } from "./data/googleOpinions";
import { useEffect, useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function OpinionsView() {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % googleOpinions.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingY={2}>
        <Grid size={12}>
          <SectionTitle title="Opinie naszych klientów są dla nas najważniejsze" />
        </Grid>
        <Grid size={12} container justifyContent="center" alignItems="center">
          <Grid size={domwMd ? 12 : 8}>
            <Box
              width="100%"
              height={domwMd ? "350px" : "250px"}
              component={Paper}
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              overflow="hidden"
              textAlign="center"
              p={2}
              sx={{
                transition: "opacity 0.5s ease",
                opacity: fade ? 1 : 0,
              }}
              rowGap={domwMd ? 0.5 : 1}
            >
              <Typography variant={domwMd ? "body2" : "body1"} gutterBottom>
                {googleOpinions[currentIndex].opinionContent}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {googleOpinions[currentIndex].author}
              </Typography>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <StarRateIcon fontSize="small" />
                <StarRateIcon fontSize="small" />
                <StarRateIcon fontSize="small" />
                <StarRateIcon fontSize="small" />
                <StarRateIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12} display="flex" justifyContent="center">
          <Box
            component="img"
            alt="google logo"
            src={google_logo}
            height={domwMd ? "35px" : "50px"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
