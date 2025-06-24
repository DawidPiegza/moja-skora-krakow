import { Box, useMediaQuery } from "@mui/material";
import logo_moja_skora from "../../../public/images/logo_moja_skora.png";
import zdjecie_strona_glowna from "../../../public/images/zdjecie_strona_glowna.jpg";
import zdjecie_strona_glowna_xs from "../../../public/images/zdjecie_strona_glowna_xs.jpg";

import { theme } from "../../shared/styles/MUIGlobalStyle";

export default function LandingPageView() {
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="landing_page"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${
          downMd ? zdjecie_strona_glowna_xs : zdjecie_strona_glowna
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
      }}
    ></Box>
  );
}
