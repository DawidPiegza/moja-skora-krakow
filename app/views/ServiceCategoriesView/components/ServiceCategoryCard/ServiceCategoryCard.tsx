import React from "react";
import type { IServiceCategory } from "../../utils/interfaces/IServiceCategory";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../../shared/styles/MUIGlobalStyle";
import * as motion from "motion/react-client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { WebsiteLanguageContext } from "../../../../shared/contexts/LanguageContext";
import { useNavigate } from "react-router";

interface IServiceCategoryCardProps {
  serviceCategory: IServiceCategory;
}

export default function ServiceCategoryCard({
  serviceCategory,
}: IServiceCategoryCardProps) {
  const domwMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);
  const navTo = useNavigate();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
    if (!inView) setShow(false);
  }, [inView]);

  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        lg: 3,
      }}
      ref={ref}
    >
      {show && (
        <Card
          sx={{ width: "100%" }}
          component={motion.div}
          initial={{ opacity: 0, x: -500 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.5,
              type: "spring",
              visualDuration: 1,
              bounce: 0.4,
            },
          }}
        >
          <CardActionArea onClick={() => navTo(serviceCategory.categoryURL)}>
            <CardMedia
              component="img"
              height={domwMd ? "250px" : "400px"}
              image={serviceCategory.pictureURL}
              alt={serviceCategory.title}
            />
            <CardHeader
              subheader={
                language.webLanguage === "PL"
                  ? serviceCategory.title
                  : serviceCategory.titleENG
              }
              sx={{ textAlign: "center" }}
            />
          </CardActionArea>
        </Card>
      )}
    </Grid>
  );
}
