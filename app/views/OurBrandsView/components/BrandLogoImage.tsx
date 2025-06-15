import {
  Card,
  CardMedia,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IBrandLogoImageProps {
  image: string;
}

export default function BrandLogoImage({ image }: IBrandLogoImageProps) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

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
          height: downMd ? "100px" : "125px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: 1,
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
