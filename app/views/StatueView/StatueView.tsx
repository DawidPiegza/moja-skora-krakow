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

export default function StatueView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
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
              Strona Główna
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: theme.typography.body1,
              }}
            >
              Regulamin
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
              language.webLanguage === "PL"
                ? "Regulamin "
                : "TERMS AND CONDITIONS OF THE “MOJA SKÓRA” COSMETOLOGY CLINIC"
            }
            alignTextTo="center"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
