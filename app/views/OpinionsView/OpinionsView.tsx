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
            variant={downXl ? "h5" : "h4"}
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
              width: 250,
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
              size={1}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                disabled={currentItem === 0}
                onClick={() => setCurrentItem((prevState) => prevState - 1)}
              >
                <KeyboardArrowLeftIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid
              padding={2}
              size={10}
              height="max-content"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ overflowX: "hidden" }}
            >
              <OpinionCard opinion={OpinionsList[currentItem]} />
            </Grid>
            <Grid
              size={1}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <IconButton
                disabled={currentItem === OpinionsList.length - 1}
                onClick={() => setCurrentItem((prevState) => prevState + 1)}
              >
                <KeyboardArrowRightIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
