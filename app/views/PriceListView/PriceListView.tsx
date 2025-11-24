import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PriceList } from "./data/PriceList";
import React, { useEffect, useState } from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import SearchIcon from "@mui/icons-material/Search";
import type { IPriceList } from "./utils/interfaces/IPriceList";
import { useNavigate } from "react-router";

export default function PriceListView() {
  const theme = useTheme();
  const { language } = React.useContext(WebsiteLanguageContext);
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const navTo = useNavigate();

  const [filteredPriceList, setFilteredPriceList] =
    useState<IPriceList>(PriceList);

  const [inputWord, setInputWord] = useState<string>("");

  useEffect(() => {
    if (inputWord !== "") {
      const filteredCategories = PriceList.categories
        .map((category) => {
          if (
            category.category.toLowerCase().includes(inputWord.toLowerCase())
          ) {
            return category;
          } else {
            return {
              ...category,
              priceListItems: category.priceListItems.filter((el) =>
                el.itemName.toLowerCase().includes(inputWord.toLowerCase())
              ),
            };
          }
        })
        .filter((cat) => cat !== undefined && cat.priceListItems.length > 0);

      setFilteredPriceList({
        ...PriceList,
        categories: filteredCategories,
      });
    } else {
      setFilteredPriceList({ ...PriceList });
    }
  }, [inputWord]);

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
              {language.webLanguage === "PL" ? "Strona Główna" : "Main Page"}
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
              {language.webLanguage === "PL" ? "Cennik" : "Price List"}
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
            flexDirection={"column"}
            justifyContent={"flex-start"}
            py={downMd ? 1 : 2}
          >
            <Typography
              width={"100%"}
              variant={"h4"}
              textAlign="left"
              sx={{ fontWeight: "350" }}
            >
              {language.webLanguage === "PL"
                ? "Cennik".toUpperCase()
                : "Price List".toUpperCase()}
            </Typography>
          </Grid>
          <Grid size={12} display="flex" justifyContent={"flex-end"}>
            <TextField
              placeholder={language.webLanguage === "ENG" ? "Search" : "Szukaj"}
              fullWidth={downMd ? true : false}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              onChange={(e) => setInputWord(e.target.value)}
              variant="outlined"
            />
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
                {filteredPriceList.categories.map((category, index) => (
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
        <Grid
          size={12}
          display="flex"
          flexDirection={"column"}
          rowGap={1}
          my={1}
          px={1}
        >
          <Typography
            variant={downMd ? "h6" : "h5"}
            textAlign="center"
            sx={{ fontWeight: "300" }}
            width={"100%"}
            fontStyle="italic"
            gutterBottom
            paddingTop={2}
          >
            {language.webLanguage === "PL"
              ? "Zastanawiasz się, który zabieg będzie dla Ciebie najlepszy?"
              : "Wondering which treatment will suit you best?"}
          </Typography>
          <Typography
            textAlign="center"
            sx={{ fontWeight: "200" }}
            width={"100%"}
            fontStyle="italic"
            variant={downMd ? "body1" : "h6"}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "Skontaktuj się z naszą recepcją i umów na konsultację – omówimy Twoje oczekiwania i dobierzemy indywidualny plan zabiegowy dopasowany do Twoich potrzeb."
              : "Contact our reception to schedule a consultation – we’ll discuss your expectations and design a personalized treatment plan tailored to your needs."}
          </Typography>
          <Button
            color="inherit"
            fullWidth
            onClick={() => navTo("/contact")}
            sx={{ marginBottom: 2 }}
          >
            {language.webLanguage === "PL" ? "Kontakt" : "Contact"}
          </Button>
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
          <BottomNavigationAction
            component="a"
            href="https://www.facebook.com/people/Moja-Sk%C3%B3ra-Kosmetologia-Makija%C5%BC-permanentny/61561822193882/"
            target="_blank"
            rel="noopener noreferrer"
            label="Facebook"
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://maps.app.goo.gl/DthUc2eKTyvEEHFN8?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            label="Google"
            icon={<GoogleIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://www.instagram.com/mojaskora.krakow/"
            target="_blank"
            rel="noopener noreferrer"
            label="Instagram"
            icon={<InstagramIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
