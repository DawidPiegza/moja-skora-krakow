import {
  Box,
  ButtonBase,
  Container,
  Grid,
  IconButton,
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ServiceCategories() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [currentIndex, setCurrentIndex] = React.useState([0, 1, 2]);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const [animationCycle, setAnimationCycle] = React.useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setAnimationCycle((c) => c + 1);
    setCurrentIndex((prevIndex) =>
      prevIndex.map((index) =>
        index === 0 ? serviceCategoriesList.length - 1 : index - 1
      )
    );
  };

  const handleNext = () => {
    setDirection(1);
    setAnimationCycle((c) => c + 1);
    setCurrentIndex((prevIndex) =>
      prevIndex.map((index) =>
        index === serviceCategoriesList.length - 1 ? 0 : index + 1
      )
    );
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: 3 }}>
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
            <Grid size={12} container spacing={2} justifyContent={"center"}>
              <Grid size={1} height={"100%"}>
                <IconButton
                  size="large"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0",
                  }}
                  onClick={handlePrevious}
                >
                  <ArrowBackIosIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              {currentIndex.map((i) => (
                <ServiceCategoryCard
                  serviceCategory={serviceCategoriesList[i]}
                  slideDirection={direction}
                  key={`${i}-${animationCycle}`}
                />
              ))}
              <Grid size={1} height={"100%"}>
                <IconButton
                  size="large"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0",
                  }}
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
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
              {language.webLanguage === "PL"
                ? "Zarezerwuj wizytę przez"
                : "Book your appointment via"}
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
