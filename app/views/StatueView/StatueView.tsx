import {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { beautySalonStatue } from "./data/beautySalonStatue";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function StatueView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{
                color: "text.secondary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: theme.typography.body1,
              }}
            >
              Strona Główna
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: theme.typography.body1,
              }}
            >
              Regulamin
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          size={12}
          paddingBottom={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={2}
        >
          <SectionTitle title={beautySalonStatue.title} alignTextTo="center" />
          {beautySalonStatue.sections.map((section) => (
            <React.Fragment key={section.id}>
              <Typography
                variant={!downMd ? "h6" : "body1"}
                fontWeight="bold"
                textAlign="center"
              >{`§ ${section.id}. ${section.title}`}</Typography>

              {section.points.map((point, index) => {
                if (typeof point === "string") {
                  return (
                    <Typography key={index} textAlign="center" variant="body1">
                      {`${index + 1}. ${point}`}
                    </Typography>
                  );
                }

                if (
                  typeof point === "object" &&
                  point !== null &&
                  "subpointTitle" in point &&
                  Array.isArray(point.subpoints)
                ) {
                  return (
                    <React.Fragment key={index}>
                      <Typography
                        variant={!downMd ? "body1" : "body2"}
                        textAlign="center"
                      >
                        {`${index + 1}. ${point.subpointTitle}`}
                      </Typography>
                      {point.subpoints.map((sub, subIndex) => (
                        <Typography
                          key={`${index}-${subIndex}`}
                          variant={!downMd ? "body1" : "body2"}
                          textAlign="center"
                        >
                          {`${index + 1}.${subIndex + 1} ${sub}`}
                        </Typography>
                      ))}
                    </React.Fragment>
                  );
                }

                return null;
              })}
            </React.Fragment>
          ))}
        </Grid>
        <Grid
          size={12}
          marginTop={3}
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigation showLabels component={Paper} variant="outlined">
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon />}
            />
            <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Container>
  );
}
