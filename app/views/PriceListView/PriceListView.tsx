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
                          <TableCell
                            align="right"
                            sx={{
                              textDecoration:
                                item?.discountPrice && "line-through",
                            }}
                          >
                            <Typography variant="body1">
                              {item.price}
                            </Typography>
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
