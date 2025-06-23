import { Typography, useMediaQuery, useTheme } from "@mui/material";

interface ISectionTitleProps {
  title: string;
  textColor?: string;
}

export default function SectionTitle({ title, textColor }: ISectionTitleProps) {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <Typography
      variant={downXl ? "h6" : "h5"}
      align="center"
      color={textColor && textColor}
      gutterBottom
      fontWeight="bold"
    >
      {title}
    </Typography>
  );
}
