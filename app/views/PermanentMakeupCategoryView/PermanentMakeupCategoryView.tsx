import {
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import { useNavigate } from "react-router";

export default function PermanentMakeupCategoryView() {
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
              {language.webLanguage === "PL"
                ? "Makijaż permanentny"
                : "Permanent makeup"}
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
                  ? "Makijaż permanentny".toUpperCase()
                  : "Permanent Makeup".toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
          <Grid size={12} container spacing={2}>
            {/* {cosmetologyViewData.map((el, index) => (
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
                    {language.webLanguage === "PL" ? el.pl.title : el.eng.title}
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
                    {language.webLanguage === "PL" ? "wybierz" : "choose"}
                  </Button>
                </Grid>
              </Grid>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
