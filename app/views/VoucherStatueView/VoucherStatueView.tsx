import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
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
import { voucherTermsPL, voucherTermsEN } from "./data/voucherTerms";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function VoucherStatueView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

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
                ? "Regulamin vouchera"
                : "Voucher policies"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={1}
          py={downMd ? 1 : 4}
        >
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
            paddingBottom={downMd ? 1 : 4}
          >
            {language.webLanguage === "PL"
              ? "Regulamin vouchera podarunkowego".toUpperCase()
              : "TERMS AND CONDITIONS OF THE “MOJA SKÓRA” COSMETOLOGY CLINIC".toUpperCase()}
          </Typography>

          {(language.webLanguage === "PL"
            ? voucherTermsPL
            : voucherTermsEN
          ).sections.map((section) => (
            <React.Fragment key={section.id}>
              <Typography
                gutterBottom
                width={"100%"}
                variant={"body1"}
                textAlign="center"
                sx={{ fontWeight: "400" }}
                py={downMd ? 1 : 2}
              >{`§ ${section.id}. ${section.title}`}</Typography>

              {section.entries.map((entry, index) => {
                if (typeof entry === "string") {
                  return (
                    <Typography
                      key={index}
                      textAlign="center"
                      variant={"body2"}
                      fontWeight={300}
                      gutterBottom
                    >
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
      <Box
        width="100%"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        component={Paper}
        zIndex={11}
        elevation={1}
      >
        <BottomNavigation sx={{ width: "100%" }} showLabels>
          <BottomNavigationAction
            component="a"
            href="https://www.facebook.com/people/Moja-Sk%C3%B3ra-Kosmetologia-Makija%C5%BC-permanentny/61561822193882/"
            target="_blank"
            rel="noopener noreferrer"
            label="Facebook"
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://share.google/cZjmIrreCPS9W4K7i"
            target="_blank"
            rel="noopener noreferrer"
            label="Google"
            icon={<GoogleIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://www.instagram.com/mojaskora.krakow/"
            target="_blank"
            rel="noopener noreferrer"
            label="Instagram"
            icon={<InstagramIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
