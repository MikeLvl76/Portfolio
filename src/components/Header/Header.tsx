import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderItem from "./HeaderItem";
import { FormGroup, FormControlLabel, Tooltip } from "@mui/material";
import { HeaderSwitch } from "./HeaderSwitch";

type HeaderProps = {
  itemName: string;
};

export default function Header(props: HeaderProps) {
  const { itemName } = props;
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <AppBar
      position="static"
      sx={{
        flexGrow: 1,
        backgroundColor: isDark ? "primary.dark" : "primary.light",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <HeaderItem
            pathTo="/"
            label="Home"
            darkModeEnabled={isDark}
            isSelected={itemName === "Home"}
          />
          <HeaderItem
            pathTo="/about"
            label="About"
            darkModeEnabled={isDark}
            isSelected={itemName === "About"}
          />
          <HeaderItem
            pathTo="/career"
            label="Career"
            darkModeEnabled={isDark}
            isSelected={itemName === "Career"}
          />
          <HeaderItem
            pathTo="/projects"
            label="Projects"
            darkModeEnabled={isDark}
            isSelected={itemName === "Projects"}
          />
        </Box>
        <FormGroup>
          <Tooltip title={isDark ? "Light mode" : "Dark mode"} arrow>
            <FormControlLabel
              control={
                <HeaderSwitch
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                  aria-label="darkmode-switch"
                />
              }
              label=""
            />
          </Tooltip>
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
}
