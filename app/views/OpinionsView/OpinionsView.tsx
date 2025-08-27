import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import google_logo from "../../../public/images/google_logo.png";
import { googleOpinions } from "./data/googleOpinions";
import { useEffect, useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

export default function OpinionsView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % googleOpinions.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={5} py={2} px={2}>
        <Grid size={12}>
          <Typography
            variant={downMd ? "h5" : "h4"}
            textAlign="left"
            sx={{ fontWeight: "100" }}
          ></Typography>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "Opinie naszych klientów są dla nas najważniejsze".toUpperCase()
              : "Our clients feedback is the most important to us.".toUpperCase()}
          </Typography>
        </Grid>

        <Grid size={12} container justifyContent="center" alignItems="center">
          <Grid size={downMd ? 12 : 8}>
            <Box
              width="100%"
              height={downMd ? "350px" : "250px"}
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              overflow="hidden"
              textAlign="center"
              sx={{
                transition: "opacity 0.5s ease",
                opacity: fade ? 1 : 0,
              }}
              rowGap={downMd ? 0.5 : 1}
            >
              <Typography variant={"body2"} gutterBottom>
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
            height={downMd ? "35px" : "50px"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
