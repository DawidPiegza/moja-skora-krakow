import {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Chip,
  Container,
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
import { motion } from "framer-motion";

export default function PriceListView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: "65px" }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
          <Grid
            container
            direction={downMd ? "column" : "row"}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <TableContainer component={Paper} variant="outlined">
              <Table sx={{ width: "100%" }} size={downMd ? "small" : "medium"}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nazwa zabiegu</TableCell>
                    <TableCell align="right">Cena (PLN)</TableCell>
                    <TableCell align="right">Cena promocyjna (PLN)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PriceList.categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          bgcolor: "primary.light",
                        }}
                      >
                        <TableCell>{category.category}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      {category.priceListItems.map((item, index2) => (
                        <TableRow
                          key={index2}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{item.itemName}</TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              textDecoration:
                                item?.discountPrice && "line-through",
                            }}
                          >
                            {item.price}
                          </TableCell>
                          <TableCell align="right">
                            {item.discountPrice ? (
                              <Chip
                                label={item.discountPrice}
                                size="small"
                                variant="filled"
                                color="success"
                              />
                            ) : (
                              "-"
                            )}
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
      </Grid>
    </Container>
  );
}
