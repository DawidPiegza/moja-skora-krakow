import { Box } from "@mui/material";
import logo_moja_skora from "../../../public/images/logo_moja_skora.png";
import salon_zdjecie from "../../../public/images/salon_zdjecie.jpg";

export default function LandingPageView() {
  return (
    <Box
      id="landing_page"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${salon_zdjecie})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(231, 231, 231, 0.4)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={logo_moja_skora}
          alt="Logo"
          sx={{
            width: "90%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
