import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { WebsiteLanguageContext } from "../../../../shared/contexts/LanguageContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IEmployeeSectionProps {
  name: string;
  photoURL: string;
  academicTittle: {
    PL: "mgr kosmetologi";
    ENG: "M.Sc. in Cosmetology";
  };
  aboutMeText: IAboutMeText[];
}

export default function EmployeeSection({
  name,
  photoURL,
  academicTittle,
  aboutMeText,
}: IEmployeeSectionProps) {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: any, isExpanded: any) => {
    setExpanded(isExpanded);
  };

  const summaryText =
    language.webLanguage === "PL" ? aboutMeText[0].PL : aboutMeText[0].EN;

  const getShortText = (text: any) =>
    text.length > 100 ? text.slice(0, 100) + "..." : text;

  return (
    <Grid size={downMd ? 12 : 5.5} container>
      <Grid size={12} p={2}>
        <Grid container direction="column" spacing={1}>
          <Grid size={12}>
            <Typography
              sx={(theme) => ({
                color: "text.primary",
                ...theme.typography.body1,
                [theme.breakpoints.up("xl")]: {
                  ...theme.typography.h6,
                },
              })}
            >
              {name}
            </Typography>
            <Typography
              sx={(theme) => ({
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("xl")]: {
                  ...theme.typography.body1,
                },
              })}
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? academicTittle.PL
                : academicTittle.ENG}
            </Typography>
          </Grid>
          <Grid
            size={downMd ? 12 : 12}
            display={"flex"}
            alignItems="center"
            justifyContent={betweenMdAndLg ? "flex-start" : "flex-end"}
            py={1}
          >
            <Card sx={{ padding: 2 }}>
              <CardMedia
                component="img"
                sx={{
                  height: {
                    lg: "auto",
                    md: "600px",
                    sm: "500px",
                    xs: "auto",
                  },
                }}
                image={photoURL}
                alt="Description of the image"
              />
            </Card>
          </Grid>
          <Grid size={12}>
            <Accordion
              expanded={expanded}
              onChange={handleChange}
              sx={{
                boxShadow: "none",
                border: "none",
                borderRadius: 0,
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                sx={{ padding: 0 }}
                expandIcon={
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 24,
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  sx={{ flex: 1 }}
                >
                  {expanded ? summaryText : getShortText(summaryText)}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: 0 }}>
                {(language.webLanguage === "PL"
                  ? aboutMeText
                  : aboutMeText
                ).map((text, index) =>
                  index !== 0 ? (
                    <Typography
                      key={index}
                      variant={downMd ? "body2" : "body1"}
                      gutterBottom
                    >
                      {language.webLanguage === "PL" ? text.PL : text.EN}
                    </Typography>
                  ) : null
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
