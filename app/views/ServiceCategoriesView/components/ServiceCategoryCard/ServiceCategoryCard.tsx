import React from "react";
import type { IServiceCategory } from "../../utils/interfaces/IServiceCategory";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";

interface IServiceCategoryCardProps {
  serviceCategory: IServiceCategory;
}

export default function ServiceCategoryCard({
  serviceCategory,
}: IServiceCategoryCardProps) {
  return (
    <Grid
      size={{
        xs: 12,
        md: 6,
        lg: 3,
      }}
    >
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="535px"
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
