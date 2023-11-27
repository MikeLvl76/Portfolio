import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuItem from "./HeaderMenuItem";
import { FormGroup, FormControlLabel } from "@mui/material";
import { HeaderSwitch } from "./HeaderSwitch";

type HeaderProps = {
  currentPage: string;
};

export default function Header(props: HeaderProps) {
  const { currentPage } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(event.currentTarget.id === "menu-button");
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            id="menu-button"
            size="large"
            edge="start"
            color="inherit"
            aria-controls="link-menu"
            aria-haspopup="true"
            onMouseOver={handleMouseOver}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" variant="h2" sx={{ flexGrow: 1 }}>
            {currentPage}
          </Typography>
          <HeaderMenu
            anchorEl={anchorEl}
            id="link-menu"
            isOpen={isMenuOpen}
            onClose={handleClose}
          >
            <HeaderMenuItem pathTo="/" onClick={handleClose} label="Home" />
            <HeaderMenuItem
              pathTo="/about"
              onClick={handleClose}
              label="About"
            />
            <HeaderMenuItem
              pathTo="/career"
              onClick={handleClose}
              label="Career"
            />
            <HeaderMenuItem
              pathTo="/projects"
              onClick={handleClose}
              label="Projects"
            />
          </HeaderMenu>
          <FormGroup>
            <FormControlLabel
              control={
                <HeaderSwitch
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                  aria-label="darkmode switch"
                />
              }
              label={isDark ? "Dark mode" : "Light mode"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
