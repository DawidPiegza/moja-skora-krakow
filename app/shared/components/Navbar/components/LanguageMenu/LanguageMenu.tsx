import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { WebsiteLanguageContext } from "../../../../contexts/LanguageContext";
import { IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setENG_Language, setPL_Language } = React.useContext(
    WebsiteLanguageContext
  )!;

  return (
    <React.Fragment>
      <IconButton
        sx={{ mx: "1rem" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setENG_Language();
            handleClose();
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPL_Language();
            handleClose();
          }}
        >
          Polski
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
