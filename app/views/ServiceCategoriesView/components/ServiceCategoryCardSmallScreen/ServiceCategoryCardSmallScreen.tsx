import React, { useState, useRef } from "react";
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
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
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
  const [lastDirection, setLastDirection] = useState<
    "forward" | "backward" | null
  >(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const swipeHandled = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchEndX.current = null;
    swipeHandled.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchEndX.current = t.clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchEndX.current == null) {
      touchStartX.current = null;
      touchStartY.current = null;
      touchEndX.current = null;
      swipeHandled.current = false;
      return;
    }

    const dx = touchEndX.current - touchStartX.current;
    const dy = e.changedTouches[0].clientY - (touchStartY.current ?? 0);
    const absDX = Math.abs(dx);
    const absDY = Math.abs(dy);
    const SWIPE_THRESHOLD = 50;

    if (absDX > SWIPE_THRESHOLD && absDX > absDY) {
      swipeHandled.current = true;
      if (dx > 0) {
        changePhoto("backward");
      } else {
        changePhoto("forward");
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
  };

  const changePhoto = (direction: "forward" | "backward") => {
    setLastDirection(direction);
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
          borderRadius: "0px",
          p: upSM ? "1em" : "0.5em",
          zIndex: "10",
        }}
        disabled
        onClick={(e) => e.preventDefault()}
      >
        <SwipeLeftIcon sx={{ color: "white" }} />
      </IconButton>
      <AnimatePresence>
        <Card
          key={currentCardIndex}
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
          initial={{
            x:
              lastDirection === "forward"
                ? 80
                : lastDirection === "backward"
                ? -80
                : 0,
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.35 },
            },
          }}
          exit={{
            x:
              lastDirection === "forward"
                ? -80
                : lastDirection === "backward"
                ? 80
                : 0,
            opacity: 0,
            scale: 0.96,
            transition: {
              x: { type: "spring", stiffness: 300, damping: 35 },
              opacity: { duration: 0.2 },
            },
          }}
        >
          <CardActionArea
            onClick={() => {
              if (swipeHandled.current) {
                swipeHandled.current = false;
                return;
              }
              navTo(serviceCategoriesList[currentCardIndex].categoryURL);
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
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
          borderRadius: "0px",
          p: upSM ? "1em" : "0.5em",
          zIndex: "10",
        }}
        onClick={(e) => e.preventDefault()}
        disabled
      >
        <SwipeRightIcon sx={{ color: "white" }} />
      </IconButton>
    </Grid>
  );
}
