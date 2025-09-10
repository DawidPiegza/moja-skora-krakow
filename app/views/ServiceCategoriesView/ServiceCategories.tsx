import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { serviceCategoriesList } from "./data/serviceCategoriesList";
import ServiceCategoryCard from "./components/ServiceCategoryCard/ServiceCategoryCard";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";
import ServiceCategoryCardSmallScreen from "./components/ServiceCategoryCardSmallScreen/ServiceCategoryCardSmallScreen";
import booksy_logo from "../../../public/images/booksy_logo.png";

export default function ServiceCategories() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={5} py={2} px={2}>
        <Grid size={12}>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "Wybierz zabieg dla siebie".toUpperCase()
              : "Choose a treatment for yourself".toUpperCase()}
          </Typography>
        </Grid>
        <Grid
          size={12}
          container
          direction="row"
          sx={{
            alignItems: "stretch",
          }}
          spacing={2}
        >
          {downMd ? (
            <ServiceCategoryCardSmallScreen
              serviceCategoriesList={serviceCategoriesList}
            />
          ) : (
            <>
              {serviceCategoriesList.map((category, index) => (
                <ServiceCategoryCard serviceCategory={category} key={index} />
              ))}
            </>
          )}
        </Grid>
        <Grid
          size={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ButtonBase
            component="a"
            href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 1,
              padding: 1,
              borderRadius: "10px",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.05)",
              },
            }}
          >
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign={"center"}
              fontWeight={600}
            >
              Zarezerwuj wizytę przez
            </Typography>

            <Box
              component="img"
              src={booksy_logo}
              alt="logo booksy"
              height={downMd ? "30px" : "40px"}
            />
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  );
}
