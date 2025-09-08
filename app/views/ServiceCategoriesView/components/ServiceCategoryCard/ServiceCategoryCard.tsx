import React from "react";
import type { IServiceCategory } from "../../utils/interfaces/IServiceCategory";
import {
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
          <CardMedia
            component="img"
            height={domwMd ? "250px" : "300px"}
            image={serviceCategory.pictureURL}
            alt={serviceCategory.title}
            sx={{
              filter: "grayscale(95%)",
              transition: "filter 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          />

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
