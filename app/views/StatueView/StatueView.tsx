import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import { statueDataEng, statueDataPL } from "./data/statueData";

export default function StatueView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{
                color: "text.secondary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: theme.typography.body1,
              }}
            >
              {language.webLanguage === "PL" ? "Strona Główna" : "Main Page"}
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: theme.typography.body1,
              }}
            >
              {language.webLanguage === "PL"
                ? "Regulamin gabinetu Moja Skóra"
                : "Terms and conditions of the Moja Skóra cosmetology clinic"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={2}
        >
          <SectionTitle
            title={
              language.webLanguage === "ENG"
                ? "Terms and conditions of the Moja Skóra cosmetology clinic"
                : "Regulamin gabinetu Moja Skóra"
            }
            alignTextTo="center"
          />
          {(language.webLanguage === "PL"
            ? statueDataPL
            : statueDataEng
          ).sections.map((section) => (
            <React.Fragment key={section.id}>
              <Typography
                variant={!downMd ? "h6" : "body1"}
                fontWeight="bold"
                textAlign="center"
              >
                {section.title}
              </Typography>

              {section.entries.map((entry, index) => {
                if (typeof entry === "string") {
                  return (
                    <Typography key={index} textAlign="center" variant="body1">
                      {entry}
                    </Typography>
                  );
                }

                return null;
              })}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
