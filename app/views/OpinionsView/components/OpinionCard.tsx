import { Box, Paper, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import type { IGoogleOpinion } from "../utils/interfaces/IGoogleOpinion";
import StarIcon from "@mui/icons-material/Star";

interface IOpinionCardProps {
  opinion: IGoogleOpinion;
}

export default function OpinionCard({ opinion }: IOpinionCardProps) {
  return (
    <Box
      sx={{ width: "75%", height: "max-content" }}
      component={Paper}
      py={3}
      px={1}
      display="flex"
      flexDirection="column"
      rowGap={1}
    >
      <Typography variant="body1" gutterBottom textAlign="center">
        {opinion.text}
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        {opinion.author}
      </Typography>
    </Box>
  );
}
