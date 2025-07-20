import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import React from "react";
import { voucherTermsPL, voucherTermsEN } from "./data/voucherTerms";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";

export default function VoucherStatueView() {
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
                ? "Regulamin vouchera"
                : "Voucher policies"}
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
                ? "Regulamin vouchera podarunkowego"
                : "TERMS AND CONDITIONS OF THE “MOJA SKÓRA” COSMETOLOGY CLINIC"
            }
            alignTextTo="center"
          />
          {(language.webLanguage === "PL"
            ? voucherTermsPL
            : voucherTermsEN
          ).sections.map((section) => (
            <React.Fragment key={section.id}>
              <Typography
                variant={!downMd ? "h6" : "body1"}
                fontWeight="bold"
                textAlign="center"
              >{`§ ${section.id}. ${section.title}`}</Typography>

              {section.entries.map((entry, index) => {
                if (typeof entry === "string") {
                  return (
                    <Typography key={index} textAlign="center" variant="body1">
                      {`${index + 1}. ${entry}`}
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
