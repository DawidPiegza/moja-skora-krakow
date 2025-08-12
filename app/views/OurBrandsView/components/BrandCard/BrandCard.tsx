import {
  Box,
  Card,
  CardMedia,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IBrandCardProps {
  imageURL: string;
  fade: boolean;
}

export default function BrandCard({ imageURL, fade }: IBrandCardProps) {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      size={{
        xs: 12,
        lg: 2,
      }}
      component={!domwMd ? Paper : Grid}
      elevation={1}
      display="flex"
      alignItems="center"
      sx={{
        transition: "opacity 0.5s ease",
        opacity: fade ? 1 : 0,
      }}
    >
      <Box
        p={1}
        component="img"
        sx={{
          height: domwMd ? "165px" : "auto",
          width: "100%",
        }}
        src={imageURL}
      />
    </Grid>
  );
}
