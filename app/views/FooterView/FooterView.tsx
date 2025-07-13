import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Button,
  Stack,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import sygnet_wektorowy from "../../../public/images/sygnet_wektorowy.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import booksy_logo_black from "../../../public/images/booksy_logo_black.png";
import { useNavigate } from "react-router";

export default function FooterView() {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid
        size={12}
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        height="max-content"
        p={2}
      >
        <Grid
          size={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            underline="none"
            sx={{ cursor: "pointer" }}
            color="text.primary"
            variant="caption"
            onClick={() => navigate("/statute")}
            component={Button}
          >
            REGULAMIN GABINETU
          </Link>
          <Link
            underline="none"
            sx={{ cursor: "pointer" }}
            color="text.primary"
            variant="caption"
            onClick={() => navigate("/voucher_statute")}
            component={Button}
          >
            REGULAMIN VOUCHERU
          </Link>
          {!domwMd && (
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              color="text.primary"
              variant="caption"
              onClick={() => navigate("/contact")}
              component={Button}
            >
              KONTAKT
            </Link>
          )}

          {!domwMd && (
            <Button
              href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow"
              sx={{
                width: "80px",
                height: "50px",
                backgroundImage: `url(${booksy_logo_black})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
              target="_blank"
            />
          )}
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={6}>
          <Box
            p={1}
            component="img"
            sx={{
              height: !domwMd ? "50px" : "45px",
            }}
            src={sygnet_wektorowy}
          />
        </Grid>
        <Grid
          size={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Stack
            direction="row"
            width="max-content"
            height="max-content"
            columnGap={2}
          >
            <IconButton>
              <FacebookIcon fontSize={domwMd ? "medium" : "large"} />
            </IconButton>
            <IconButton>
              <InstagramIcon fontSize={domwMd ? "medium" : "large"} />
            </IconButton>
            <IconButton>
              <GoogleIcon fontSize={domwMd ? "medium" : "large"} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
