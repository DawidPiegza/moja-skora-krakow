import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import google_logo from "../../../public/images/google_logo.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { OpinionsList } from "./data/OpinionsList";
import OpinionCard from "./components/OpinionCard";
import { useState } from "react";

export default function OpinionsView() {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const [currentItem, setCurrentItem] = useState<number>(0);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingY={5}>
        <Grid size={12}>
          <Typography
            variant={downXl ? "h6" : "h5"}
            align="center"
            fontStyle="italic"
          >
            Zadowolenie Klientek to nasz największy priorytet. Każda opinia to
            dla nas źródło dumy i motywacja do dalszej pracy. Sprawdź, co mówią
            o nas osoby, które nam zaufały – i dołącz do grona zadowolonych
            Klientek!
          </Typography>
        </Grid>
        <Grid size={12} display="flex" justifyContent="center">
          <Box
            component="img"
            sx={{
              height: "auto",
              width: 180,
            }}
            alt="The house from the offer."
            src={google_logo}
          />
        </Grid>
        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              padding={2}
              size={12}
              height="max-content"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ overflowX: "hidden" }}
            >
              <OpinionCard opinion={OpinionsList[currentItem]} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
