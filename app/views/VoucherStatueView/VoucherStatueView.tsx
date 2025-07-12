import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import React from "react";
import { voucherStatue } from "./data/voucherStatue";

export default function VoucherStatueView() {
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
              Reagulamin Voucheara
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={2}
        >
          <SectionTitle title={voucherStatue.title} alignTextTo="center" />
          {voucherStatue.sections.map((section) => (
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

                return null;
              })}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
