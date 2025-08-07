import {
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import basia_profilowe from "../../../public/images/basia_profilowe.jpg";
import karolina_profilowe from "../../../public/images/karolina_profilowe.jpg";
import { useEffect, useState } from "react";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import EmployeeSection from "./components/EmployeeSection/EmployeeSection";
import { AboutBasiaText, AboutKarolinaText } from "./data/AboutMeText";

export default function AboutUsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {!isLoading && (
        <Container maxWidth="xl">
          <Grid container spacing={3} paddingY={2}>
            <Grid size={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  sx={(theme) => ({
                    color: "text.secondary",
                    ...theme.typography.body2,
                    [theme.breakpoints.up("md")]: {
                      ...theme.typography.body1,
                    },
                  })}
                >
                  {language.webLanguage === "PL"
                    ? "Strona Główna"
                    : "Main Page"}
                </Link>
                <Typography
                  sx={(theme) => ({
                    color: "text.primary",
                    ...theme.typography.body2,
                    [theme.breakpoints.up("md")]: {
                      ...theme.typography.body1,
                    },
                  })}
                >
                  {language.webLanguage === "PL" ? "Nasz zespół" : "Our Team"}
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid
              container
              size={12}
              direction={downMd ? "column" : "row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
              spacing={1}
            >
              <EmployeeSection
                photoURL={karolina_profilowe}
                name={"Karolina Sałdan"}
                academicTittle={{
                  PL: "mgr kosmetologi",
                  ENG: "M.Sc. in Cosmetology",
                }}
                aboutMeText={AboutKarolinaText}
              />
              <Grid
                size={downMd ? 12 : 0.5}
                display={!downMd ? "flex" : "unset"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Divider orientation={downMd ? "horizontal" : "vertical"} />
              </Grid>
              <EmployeeSection
                photoURL={basia_profilowe}
                name={"Barbara Żelazo"}
                academicTittle={{
                  PL: "mgr kosmetologi",
                  ENG: "M.Sc. in Cosmetology",
                }}
                aboutMeText={AboutBasiaText}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
}
