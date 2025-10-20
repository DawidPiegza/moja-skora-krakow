import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Card,
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
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import voucher_imnage from "../../../public/images/voucher_image.jpeg";
import { VoucherText } from "./data/VoucherText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ClinicVoucherView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: any, isExpanded: any) => {
    setExpanded(isExpanded);
  };

  const summaryText =
    language.webLanguage === "PL" ? VoucherText[0].PL : VoucherText[0].ENG;

  const getShortText = (text: any) =>
    text.length > 200 ? text.slice(0, 200) + "..." : text;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1} paddingTop={2} paddingBottom={"60px"}>
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
              {language.webLanguage === "PL" ? "Voucher" : "Voucher"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} paddingTop={downMd ? 3 : 4} px={2}>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "VOUCHER PODARUNKOWY".toUpperCase()
              : "VOUCHER".toUpperCase()}
          </Typography>
          <Typography
            variant={downMd ? "body1" : "h6"}
            textAlign="left"
            sx={{ fontWeight: "200" }}
            width={"100%"}
            fontStyle="italic"
          >
            {language.webLanguage === "PL"
              ? "Podaruj bliskiej osobie wyjątkowy prezent"
              : "Give your loved one a truly special gift"}
          </Typography>
        </Grid>
        <Grid container size={12} spacing={downMd ? 3 : 1} paddingY={1}>
          <Grid
            size={downMd ? 12 : 6}
            display="flex"
            flexDirection="column"
            alignItems={"flex-start"}
            px={2}
            container
          >
            {downMd ? (
              <Grid size={12}>
                <Accordion
                  expanded={expanded}
                  onChange={handleChange}
                  sx={{
                    boxShadow: "none",
                    border: "none",
                    borderRadius: 0,
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <ExpandMoreIcon
                          sx={{
                            fontSize: 24,
                            width: 24,
                            height: 24,
                          }}
                        />
                      </Box>
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      sx={{ flex: 1 }}
                    >
                      {expanded ? summaryText : getShortText(summaryText)}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ padding: 0 }}>
                    {(language.webLanguage === "PL"
                      ? VoucherText
                      : VoucherText
                    ).map((text, index) =>
                      index !== 0 ? (
                        <Typography
                          key={index}
                          variant={downMd ? "body2" : "body1"}
                          gutterBottom
                        >
                          {language.webLanguage === "PL"
                            ? text.PL.split(/(regulaminie)/g).map((part, i) =>
                                part === "regulaminie" ? (
                                  <Button
                                    onClick={() => navigate("/voucher_statute")}
                                    variant="text"
                                    key={i}
                                    sx={{
                                      padding: 0,
                                      color: "primary.dark",
                                    }}
                                  >
                                    {part}
                                  </Button>
                                ) : (
                                  part
                                )
                              )
                            : text.ENG.split(/(terms and conditions)/g).map(
                                (part, i) =>
                                  part === "terms and conditions" ? (
                                    <Button
                                      onClick={() =>
                                        navigate("/voucher_statute")
                                      }
                                      variant="text"
                                      key={i}
                                      sx={{
                                        padding: 0,
                                        color: "primary.dark",
                                      }}
                                    >
                                      {part}
                                    </Button>
                                  ) : (
                                    part
                                  )
                              )}
                        </Typography>
                      ) : null
                    )}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ) : (
              <Grid
                size={12}
                container
                display={"flex"}
                alignItems={"center"}
                rowGap={3}
              >
                {language.webLanguage === "PL" &&
                  VoucherText.map((text, index) => {
                    const parts = text.PL.split(/(regulaminie)/g);
                    return (
                      <Typography variant="body1" key={index}>
                        {parts.map((part, i) =>
                          part === "regulaminie" ? (
                            <Button
                              onClick={() => navigate("/voucher_statute")}
                              variant="text"
                              key={i}
                              sx={{
                                padding: 0,
                                color: "primary.dark",
                              }}
                            >
                              {part}
                            </Button>
                          ) : (
                            part
                          )
                        )}
                      </Typography>
                    );
                  })}

                {language.webLanguage === "ENG" &&
                  VoucherText.map((text, index) => {
                    const parts = text.ENG.split(/(terms and conditions)/g);
                    return (
                      <Typography variant="body1" key={index}>
                        {parts.map((part, i) =>
                          part === "terms and conditions" ? (
                            <Button
                              onClick={() => navigate("/voucher_statute")}
                              variant="text"
                              key={i}
                              sx={{
                                padding: 0,
                                color: "primary.dark",
                              }}
                            >
                              {part}
                            </Button>
                          ) : (
                            part
                          )
                        )}
                      </Typography>
                    );
                  })}
              </Grid>
            )}
          </Grid>
          <Grid size={downMd ? 12 : 6} px={2}>
            <Card sx={{ width: "100%", height: "auto" }} elevation={1}>
              <CardMedia
                component="img"
                alt="voucher_image"
                height="max-content"
                image={voucher_imnage}
              />
            </Card>
          </Grid>
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
