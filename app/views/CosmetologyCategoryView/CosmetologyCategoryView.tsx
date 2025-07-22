import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
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
import React from "react";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import { motion } from "framer-motion";
import { cosmetologyViewData } from "./data/cosmetologyViewData";
import { useNavigate } from "react-router";

export default function CosmetologyCategoryView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const navTo = useNavigate();

  return (
    <Container
      maxWidth="xl"
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
              {language.webLanguage === "PL" ? "Strona Główna" : "Main Page"}
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
              {language.webLanguage === "PL" ? "Kosmetologia" : "Cosmetology"}
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
            spacing={5}
          >
            <Grid size={12}>
              <SectionTitle
                title={
                  language.webLanguage === "PL" ? "Kosmetologia" : "Cosmetology"
                }
              />
            </Grid>
            <Grid size={12} container spacing={3}>
              {cosmetologyViewData.map((serviceData, index) => (
                <Grid
                  size={downMd ? 12 : 6}
                  container
                  key={index}
                  component={Paper}
                  variant="outlined"
                  p={2}
                >
                  <Grid size={12} alignSelf="start">
                    <Typography
                      variant={downMd ? "h6" : "h5"}
                      fontWeight="bold"
                    >
                      {language.webLanguage === "PL"
                        ? serviceData.pl.title
                        : serviceData.eng.title}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant={downMd ? "body2" : "body1"}>
                      {language.webLanguage === "PL"
                        ? serviceData.pl.description
                        : serviceData.eng.description}
                    </Typography>
                  </Grid>
                  <Grid size={12} alignSelf="end">
                    <Button
                      variant="contained"
                      disableElevation
                      onClick={() => navTo(serviceData.pl.navigateURL)}
                    >
                      {language.webLanguage === "PL" ? "Szczegóły" : "Details"}
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
