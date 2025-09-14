import React, { useState } from "react";
import { WebsiteLanguageContext } from "../../../../shared/contexts/LanguageContext";
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router";
import { theme } from "../../../../shared/styles/MUIGlobalStyle";
import { AnimatePresence, motion } from "framer-motion";
import type { IServiceCategory } from "../../utils/interfaces/IServiceCategory";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IServiceCategoryCardSmallScreenProps {
  serviceCategoriesList: IServiceCategory[];
}

export default function ServiceCategoryCardSmallScreen({
  serviceCategoriesList,
}: IServiceCategoryCardSmallScreenProps) {
  const upSM = useMediaQuery(theme.breakpoints.up("sm"));
  const betweenSM_MD = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { language } = React.useContext(WebsiteLanguageContext);
  const navTo = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  const changePhoto = (direction: "forward" | "backward") => {
    setCurrentCardIndex((prev) => {
      if (direction === "forward") {
        return prev === serviceCategoriesList.length - 1 ? 0 : prev + 1;
      }
      if (direction === "backward") {
        return prev === 0 ? serviceCategoriesList.length - 1 : prev - 1;
      }
      return prev;
    });
  };

  return (
    <Grid
      size={12}
      height={betweenSM_MD ? "600px" : "400px"}
      display={"flex"}
      justifyContent={"space-between"}
      position={"relative"}
      component={Paper}
      elevation={6}
    >
      <IconButton
        sx={{
          height: "calc(100% - 50.5px)",
          borderRadius: "0px",
          p: upSM ? "1em" : "0.5em",
          zIndex: "10",
          bgcolor: "rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => changePhoto("backward")}
      >
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </IconButton>
      <AnimatePresence>
        <Card
          elevation={1}
          component={motion.div}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <CardActionArea
            onClick={() =>
              navTo(serviceCategoriesList[currentCardIndex].categoryURL)
            }
          >
            <Box
              sx={{
                position: "relative",
                "&:hover img": {
                  filter: "none",
                },
                "&:hover .overlay": {
                  backgroundColor: "rgba(255, 255, 255, 0)",
                },
              }}
            >
              <CardMedia
                component="img"
                height={betweenSM_MD ? "550px" : "350px"}
                image={serviceCategoriesList[currentCardIndex].pictureURL}
                alt={serviceCategoriesList[currentCardIndex].title}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease",
                  width: "100%",
                }}
              />{" "}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  pointerEvents: "none",
                  transition: "background-color 0.3s ease",
                }}
              />
            </Box>
            <CardHeader
              subheader={
                language.webLanguage === "PL"
                  ? serviceCategoriesList[currentCardIndex].title
                  : serviceCategoriesList[currentCardIndex].titleENG
              }
              sx={{ textAlign: "center" }}
              slotProps={{
                subheader: {
                  sx: {
                    fontSize: "15px",
                    color: "text.primary",
                  },
                },
              }}
            />
          </CardActionArea>
        </Card>
      </AnimatePresence>
      <IconButton
        sx={{
          height: "calc(100% - 50.5px)",
          borderRadius: "0px",
          p: upSM ? "1em" : "0.5em",
          zIndex: "10",
          bgcolor: "rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => changePhoto("forward")}
      >
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </IconButton>
    </Grid>
  );
}
