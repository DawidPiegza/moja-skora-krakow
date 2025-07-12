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

export default function FooterView() {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));

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
            href="/statute"
            underline="none"
            sx={{ cursor: "pointer" }}
            color="text.primary"
            variant="caption"
          >
            REGULAMIN GABINETU
          </Link>
          <Link
            href="/voucher_statute"
            underline="none"
            sx={{ cursor: "pointer" }}
            color="text.primary"
            variant="caption"
          >
            REGULAMIN VOUCHERU
          </Link>
          {!domwMd && (
            <Link
              href="/contact"
              underline="none"
              sx={{ cursor: "pointer" }}
              color="text.primary"
              variant="caption"
            >
              KONTAKT
            </Link>
          )}

          {!domwMd && (
            <Link
              href="/"
              underline="none"
              sx={{ cursor: "pointer" }}
              color="text.primary"
              variant="caption"
            >
              STRONA GŁÓWNA
            </Link>
          )}

          {!domwMd && (
            <Button
              sx={{
                width: "80px",
                height: "50px",
                backgroundImage: `url(${booksy_logo_black})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
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
