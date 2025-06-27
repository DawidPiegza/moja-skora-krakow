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

interface IServiceCategoryCardProps {
  serviceCategory: IServiceCategory;
}

export default function ServiceCategoryCard({
  serviceCategory,
}: IServiceCategoryCardProps) {
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        lg: 3,
      }}
    >
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={domwMd ? "250px" : "535px"}
            image={serviceCategory.pictureURL}
            alt={serviceCategory.title}
          />
          <CardHeader
            subheader={serviceCategory.title}
            sx={{ textAlign: "center" }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
