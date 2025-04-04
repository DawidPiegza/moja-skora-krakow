import { Card, CardMedia, Grid, Paper } from "@mui/material";

interface IBrandLogoImageProps {
  image: string;
}

export default function BrandLogoImage({ image }: IBrandLogoImageProps) {
  return (
    <Grid
      size={{
        xl: 2,
        lg: 2,
        md: 4,
        sm: 6,
        xs: 12,
      }}
      component={Paper}
    >
      <Card
        sx={{
          height: {
            xl: "120px",
            lg: "100px",
            md: "80px",
            sm: "50px",
            xs: "50px",
          },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Card>
    </Grid>
  );
}
