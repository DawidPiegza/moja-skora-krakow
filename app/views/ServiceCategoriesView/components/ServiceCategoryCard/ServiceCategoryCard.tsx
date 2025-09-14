import React from "react";
import type { IServiceCategory } from "../../utils/interfaces/IServiceCategory";
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../../shared/styles/MUIGlobalStyle";

import { WebsiteLanguageContext } from "../../../../shared/contexts/LanguageContext";
import { useNavigate } from "react-router";
interface IServiceCategoryCardProps {
  serviceCategory: IServiceCategory;
}

export default function ServiceCategoryCard({
  serviceCategory,
}: IServiceCategoryCardProps) {
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMD_and_LG = useMediaQuery(theme.breakpoints.between("sm", 1400));

  const { language } = React.useContext(WebsiteLanguageContext);
  const navTo = useNavigate();

  return (
    <Grid
      size={{
        xs: 12,
        lg: 2.33,
      }}
    >
      <Card sx={{ width: "100%" }} elevation={1}>
        <CardActionArea onClick={() => navTo(serviceCategory.categoryURL)}>
          <Box
            sx={{
              position: "relative",
              "&:hover img": {
                filter: "none", // usuwa grayscale przy hover
              },
              "&:hover .overlay": {
                backgroundColor: "rgba(255, 255, 255, 0)", // usuwa mgiełkę przy hover
              },
            }}
          >
            <CardMedia
              component="img"
              height={domwMd ? "250px" : "300px"}
              image={serviceCategory.pictureURL}
              alt={serviceCategory.title}
              sx={{
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease",
                width: "100%",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                pointerEvents: "none",
                transition: "background-color 0.3s ease",
              }}
            />
          </Box>

          <CardHeader
            subheader={
              language.webLanguage === "PL"
                ? serviceCategory.title
                : serviceCategory.titleENG
            }
            sx={{ textAlign: "center", px: ".1em" }}
            slotProps={{
              subheader: {
                sx: {
                  fontSize: betweenMD_and_LG ? "12px" : "14px",
                  color: "text.primary",
                },
              },
            }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
