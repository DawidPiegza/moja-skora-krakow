import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import sygnet_wektorowy from "../../../../public/images/sygnet_wektorowy.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

interface INavbarProps {
  setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSideDrawerOpen }: INavbarProps) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            src={sygnet_wektorowy}
            alt="logo booksy"
            height={downMd ? "30px" : "40px"}
          />
          {!downMd ? (
            <Box>
              <Button color="inherit">Strona Główna</Button>
              <Button color="inherit">Ofeta</Button>
              <Button color="inherit">Cennik</Button>
              <Button color="inherit">Kontakt</Button>
            </Box>
          ) : (
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setSideDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
