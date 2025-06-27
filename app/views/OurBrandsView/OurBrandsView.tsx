import { Container, Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import { useState, useEffect } from "react";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import revitacare_logo from "../../../public/images/revitacare_logo.png";
import artpmu_logo from "../../../public/images/artpmu_logo.png";
import dermomedica_logo from "../../../public/images/dermomedica_logo.jpg";
import filorga_logo from "../../../public/images/filorga_logo.png";
import karisma_logo from "../../../public/images/karisma_logo.png";
import nucleofill_logo from "../../../public/images/nucleofill_logo.png";
import BrandCard from "./components/BrandCard/BrandCard";

const logos = [
  revitacare_logo,
  artpmu_logo,
  dermomedica_logo,
  filorga_logo,
  karisma_logo,
  nucleofill_logo,
];

export default function OurBrandsView() {
  const theme = useTheme();
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!domwMd) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % logos.length);
        setFade(true);
      }, 300); // fade out time
    }, 3000);

    return () => clearInterval(interval);
  }, [domwMd]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <SectionTitle title="Korzystamy wyłącznie z renomowanych produktów" />
        </Grid>

        {domwMd ? (
          <Grid size={12} display="flex" justifyContent="center">
            <Box>
              <BrandCard imageURL={logos[currentIndex]} fade={fade} />
            </Box>
          </Grid>
        ) : (
          <Grid size={12} container spacing={2} justifyContent="center">
            {logos.map((logo, index) => (
              <BrandCard imageURL={logo} key={index} fade={fade} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
