import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

interface IOfferViewCardProps {
  cardTittle: string;
  cardDesc: string;
  cardImageUrl?: string;
  cardNavigationUrl: string;
}

export default function OfferViewCard({
  cardTittle,
  cardDesc,
  cardImageUrl,
  cardNavigationUrl,
}: IOfferViewCardProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia component="img" alt="Offer card image" image={cardImageUrl} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant={downMd ? "h6" : "h5"} component="div">
          {cardTittle}
        </Typography>
        <Typography variant={downMd ? "body2" : "body1"}>{cardDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size={downMd ? "small" : "large"}
          variant="outlined"
          sx={{ color: "primary.dark" }}
          onClick={() => navigate(cardNavigationUrl)}
        >
          Wybierz
        </Button>
      </CardActions>
    </Card>
  );
}
