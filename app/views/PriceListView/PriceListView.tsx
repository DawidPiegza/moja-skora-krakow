import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PriceList } from "./data/PriceList";
import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function PriceListView() {
  const theme = useTheme();
  const { language } = React.useContext(WebsiteLanguageContext);
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingTop={2} paddingBottom={"60px"}>
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
              Strona Główna
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
              Cennik
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} container>
          <Grid
            size={12}
            display="flex"
            justifyContent={"flex-start"}
            py={downMd ? 1 : 2}
          >
            <Typography
              gutterBottom
              width={"100%"}
              variant={"h4"}
              textAlign="left"
              sx={{ fontWeight: "350" }}
            >
              {language.webLanguage === "PL"
                ? "CENNIK".toUpperCase()
                : "Meet Moja Skóra".toUpperCase()}
            </Typography>
          </Grid>
          <TableContainer component={Paper} variant="outlined">
            <Table sx={{ width: "100%" }} size={downMd ? "small" : "medium"}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" fontWeight={500}>
                      Nazwa zabiegu
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1" fontWeight={500}>
                      Cena (PLN)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PriceList.categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        bgcolor: "#bdbdbd",
                      }}
                    >
                      <TableCell>
                        <Typography variant="body1" fontWeight={300}>
                          {category.category}
                        </Typography>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    {category.priceListItems.map((item, index2) => (
                      <TableRow
                        key={index2}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          backgroundColor: item.isBundle
                            ? "rgba(0,0,0,0.04)"
                            : "inherit",
                        }}
                      >
                        <TableCell>
                          <Typography variant="body2" gutterBottom>
                            {item.itemName}
                          </Typography>
                          {item?.itemDescription && (
                            <Typography
                              variant="caption"
                              fontWeight={300}
                              fontStyle={"italic"}
                            >
                              {item.itemDescription}
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2">{item.price}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Box
        width="100%"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        component={Paper}
        zIndex={11}
        elevation={1}
      >
        <BottomNavigation sx={{ width: "100%" }} showLabels>
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
