import { Box } from "@mui/material";
import logo_moja_skora from "../../../public/images/logo_moja_skora.png";
import { motion } from "framer-motion";
import landing_page_image_1 from "../../../public/images/landing_page_image_1.jpg";
export default function LandingPageView() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "calc(100vh - 56px)",
        overflow: "hidden",
        filter: "grayscale(100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${landing_page_image_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "max-content",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: 2,
          alignItems: "flex-end",
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
            sx={{
              height: "60vh",
              width: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
