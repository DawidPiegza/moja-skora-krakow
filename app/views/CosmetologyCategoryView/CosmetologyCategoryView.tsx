import {
  Breadcrumbs,
  Button,
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
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import { cosmetologyViewData } from "./data/cosmetologyViewData";
import { useNavigate } from "react-router";

export default function CosmetologyCategoryView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const navTo = useNavigate();

  return (
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
          <Divider />
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction={downMD ? "column" : "row"}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
            spacing={3}
          >
            <Grid size={12} paddingBottom={5} py={downMD ? 1 : 4} px={2}>
              <Typography
                gutterBottom
                width={"100%"}
                variant={"h4"}
                textAlign="left"
                sx={{ fontWeight: "350" }}
              >
                {language.webLanguage === "PL"
                  ? "Kosmetologia".toUpperCase()
                  : "Cosmetology".toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={12}
            container
            spacing={2}
            component={Paper}
            p={1}
            variant="outlined"
            marginBottom={3}
          >
            <Grid size={12} textAlign={"center"}>
              <Typography
                variant={downMD ? "h6" : "h5"}
                sx={{ fontWeight: "400" }}
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "TERAPIE SKÓRY"
                  : "SKIN THERAPIES"}
              </Typography>
              <Divider variant="middle" />
            </Grid>
            {cosmetologyViewData.map(
              (el, index) =>
                el.pl.subcategories === "skin_therapy" && (
                  <Grid
                    key={index}
                    size={downMD ? 12 : 6}
                    container
                    component={Paper}
                    variant="outlined"
                    p={2}
                  >
                    <Grid size={12}>
                      <Typography variant="body1" fontWeight={400}>
                        {language.webLanguage === "PL"
                          ? el.pl.title
                          : el.eng.title}
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      {downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                      {!downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                    </Grid>
                    <Grid size={12} display={"flex"} alignItems={"flex-end"}>
                      <Button
                        variant="outlined"
                        onClick={() => navTo(el.pl.navigateURL)}
                        sx={{
                          color: "text.primary",
                          borderColor: "text.primary",
                          "&:hover": {
                            borderColor: "text.primary",
                            backgroundColor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        {language.webLanguage === "PL" ? "sprawdź" : "check"}
                      </Button>
                    </Grid>
                  </Grid>
                )
            )}
          </Grid>

          <Grid
            size={12}
            container
            spacing={2}
            component={Paper}
            p={1}
            variant="outlined"
            marginBottom={3}
          >
            <Grid size={12} textAlign={"center"}>
              <Typography
                variant={downMD ? "h6" : "h5"}
                sx={{ fontWeight: "400" }}
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "ZABIEGI IGŁOWE"
                  : "NEEDLE TREATMENTS"}
              </Typography>
              <Divider variant="middle" />
            </Grid>
            {cosmetologyViewData.map(
              (el, index) =>
                el.pl.subcategories === "needle_treatments" && (
                  <Grid
                    key={index}
                    size={downMD ? 12 : 6}
                    container
                    component={Paper}
                    variant="outlined"
                    p={2}
                  >
                    <Grid size={12}>
                      <Typography variant="body1" fontWeight={400}>
                        {language.webLanguage === "PL"
                          ? el.pl.title
                          : el.eng.title}
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      {downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                      {!downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                    </Grid>
                    <Grid size={12} display={"flex"} alignItems={"flex-end"}>
                      <Button
                        variant="outlined"
                        onClick={() => navTo(el.pl.navigateURL)}
                        sx={{
                          color: "text.primary",
                          borderColor: "text.primary",
                          "&:hover": {
                            borderColor: "text.primary",
                            backgroundColor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        {language.webLanguage === "PL" ? "sprawdź" : "check"}
                      </Button>
                    </Grid>
                  </Grid>
                )
            )}
          </Grid>
          <Grid
            size={12}
            container
            spacing={2}
            component={Paper}
            p={1}
            variant="outlined"
            marginBottom={3}
          >
            <Grid size={12} textAlign={"center"}>
              <Typography
                variant={downMD ? "h6" : "h5"}
                sx={{ fontWeight: "400" }}
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "ZABIEGI LASEROWE"
                  : "LASER TREATMENTS"}
              </Typography>
              <Divider variant="middle" />
            </Grid>
            {cosmetologyViewData.map(
              (el, index) =>
                el.pl.subcategories === "laser_treatments" && (
                  <Grid
                    key={index}
                    size={downMD ? 12 : 6}
                    container
                    component={Paper}
                    variant="outlined"
                    p={2}
                  >
                    <Grid size={12}>
                      <Typography variant="body1" fontWeight={400}>
                        {language.webLanguage === "PL"
                          ? el.pl.title
                          : el.eng.title}
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      {downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                      {!downMD && (
                        <Typography variant="body2" fontWeight={300}>
                          {language.webLanguage === "PL"
                            ? el.pl.description.slice(0, 300) + "..."
                            : el.eng.description.slice(0, 300) + "..."}
                        </Typography>
                      )}
                    </Grid>
                    <Grid size={12} display={"flex"} alignItems={"flex-end"}>
                      <Button
                        variant="outlined"
                        onClick={() => navTo(el.pl.navigateURL)}
                        sx={{
                          color: "#757575",
                          borderColor: "#bdbdbd",
                          "&:hover": {
                            borderColor: "#757575",
                            backgroundColor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        {language.webLanguage === "PL" ? "sprawdź" : "check"}
                      </Button>
                    </Grid>
                  </Grid>
                )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
