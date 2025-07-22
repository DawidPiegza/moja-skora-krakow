import { Box, useMediaQuery } from "@mui/material";
import logo_moja_skora from "../../../public/images/logo_moja_skora.png";
import zdjecie_strona_glowna from "../../../public/images/zdjecie_strona_glowna.jpg";
import zdjecie_strona_glowna_xs from "../../../public/images/zdjecie_strona_glowna_xs.jpg";

import { theme } from "../../shared/styles/MUIGlobalStyle";
import { motion, useTime } from "framer-motion";

export default function LandingPageView() {
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const time = useTime();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "calc(100vh - 56px)",
        overflow: "hidden",
        filter: "grayscale(100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${
            downMd ? zdjecie_strona_glowna_xs : zdjecie_strona_glowna
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: downMd ? "flex-end" : "center",
          zIndex: 2,
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 1, scale: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Box
            component="img"
            src={logo_moja_skora}
            alt="Moja Skóra"
            sx={{ width: downMd ? "350px" : "1100px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
